import { Check } from './icons';
import SpotlightCard from './SpotlightCard';

const principles = [
  ['Visibility by default', 'Contributors can understand what they’ve chosen to share and the use-scope attached to it.'],
  ['Direct identifiers removed', 'Purchase records are processed to strip identifying information before they move forward.'],
  ['Withdrawal is a real control', 'Consent is not permanent. Contributors can withdraw from future collection.'],
  ['Testnet, not a financial product', '$EQL currently exists only on a test network and has no monetary value.'],
];

export default function Privacy() {
  return <section id="privacy"><div className="shell section privacy"><div><span className="section-label">Data &amp; privacy</span><h2>Your contribution stays yours.</h2><p>Eqlara is built around an unglamorous but important idea: people deserve to know how their information is used—and to change their mind.</p></div>
    <SpotlightCard className="privacy-panel">{principles.map(([title, copy]) => <div className="privacy-row" key={title}><span className="check"><Check /></span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</SpotlightCard>
  </div></section>;
}
