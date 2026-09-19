import { IncomingForm } from 'formidable';
import { readFile, unlink } from 'node:fs/promises';
import { Resend } from 'resend';

export const config = { api: { bodyParser: false } };
const recipient = 'minhqui2401@gmail.com';
const first = (value) => Array.isArray(value) ? value[0] : value;
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character]);

function parseForm(request) {
  const form = new IncomingForm({ maxFiles: 1, maxFileSize: 5 * 1024 * 1024, filter: ({ mimetype }) => !mimetype || mimetype === 'application/pdf' });
  return new Promise((resolve, reject) => form.parse(request, (error, fields, files) => error ? reject(error) : resolve({ fields, files })));
}

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed.' });
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) return response.status(503).json({ error: 'Interest form email is not configured yet.' });
  let resume;
  try {
    const { fields, files } = await parseForm(request);
    const name = first(fields.name)?.trim();
    const email = first(fields.email)?.trim();
    const major = first(fields.major)?.trim();
    resume = first(files.resume);
    if (!name || !email || !major || !/^\S+@\S+\.\S+$/.test(email)) return response.status(400).json({ error: 'Please provide your name, school email, and major.' });
    const attachments = resume ? [{ filename: resume.originalFilename || 'resume.pdf', content: await readFile(resume.filepath) }] : [];
    const result = await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: process.env.RESEND_FROM_EMAIL, to: recipient, replyTo: email, subject: `Eqlara interest form — ${name}`,
      html: `<h2>New Eqlara interest form</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>School email:</strong> ${escapeHtml(email)}</p><p><strong>Major / field:</strong> ${escapeHtml(major)}</p><p><strong>Résumé:</strong> ${resume ? 'Attached PDF' : 'Not provided'}</p>`,
      attachments,
    });
    if (result.error) throw new Error(result.error.message);
    return response.status(200).json({ ok: true });
  } catch (error) {
    return response.status(400).json({ error: error.message || 'Unable to submit the form.' });
  } finally {
    if (resume?.filepath) await unlink(resume.filepath).catch(() => {});
  }
}
