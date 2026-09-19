import { useState } from 'react';
import { Arrow } from './icons';

const initial = { name: '', email: '', major: '', resume: null };

export default function InterestForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value });

  async function submit(event) {
    event.preventDefault();
    setStatus('sending');
    const body = new FormData();
    Object.entries(form).forEach(([key, value]) => { if (value) body.append(key, value); });
    try {
      const response = await fetch('/api/interest', { method: 'POST', body });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'We could not send your interest form.');
      setStatus('success'); setMessage('Thanks—we received your interest form. We’ll be in touch.');
      setForm(initial); event.target.reset();
    } catch (error) { setStatus('error'); setMessage(error.message); }
  }

  return <section id="interest"><div className="shell section interest-layout"><div className="interest-copy"><span className="section-label">Interest form</span><h2>Help build a more equitable data economy.</h2><p>We’re looking for thoughtful students and early collaborators who care about technology, privacy, and a better relationship between people and their data.</p><p className="interest-note">Tell us a little about yourself. A résumé is welcome, but never required.</p></div>
    <form className="interest-form" onSubmit={submit}><label>Name<input required name="name" value={form.name} onChange={update} autoComplete="name" /></label><label>School email<input required type="email" name="email" value={form.email} onChange={update} autoComplete="email" placeholder="you@school.edu" /></label><label>Major or field of study<input required name="major" value={form.major} onChange={update} /></label><label>Résumé <span>Optional · PDF, up to 5 MB</span><input type="file" name="resume" accept="application/pdf" onChange={update} /></label>{message && <p className={`form-message ${status}`} role="status">{message}</p>}<button className="button button-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : <>Submit interest form <Arrow /></>}</button></form>
  </div></section>;
}
