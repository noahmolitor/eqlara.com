import { Arrow } from './icons';
import SpotlightCard from './SpotlightCard';

const steps = [
  ['01', 'Set up once', 'Create a household profile and consent record, then set a one-time email filter for order confirmations.'],
  ['02', 'Capture quietly', 'Forwarded orders become structured purchase records. Receipt photos can cover purchases without an email trail.'],
  ['03', 'Remove & document', 'Direct identifiers are stripped. Each record retains a timestamped consent trail and defined use-scope.'],
  ['04', 'Get something back', 'Your data has value, and you share in it. Beta contributors will be compensated in cash or a reward of similar value.'],
];

export default function HowItWorks() {
  return <section id="how"><div className="shell section"><div className="section-head"><div><span className="section-label">A quiet, consent-first flow</span><h2>Set it up once. Let your data speak for itself.</h2></div><p>No background tracking or browser extension. Contributors choose what is shared, see what is shared, and can withdraw whenever they choose.</p></div>
    <div className="steps">{steps.map(([number, title, copy]) => <SpotlightCard className="step" key={number}><div className="step-number">{number}<Arrow /></div><h3>{title}</h3><p>{copy}</p></SpotlightCard>)}</div>
  </div></section>;
}
