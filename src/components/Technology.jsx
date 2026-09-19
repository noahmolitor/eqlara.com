import SpotlightCard from './SpotlightCard';

const uses = [
  ['AI training', 'Real-world behavior', 'Consent-backed purchase patterns for teams building models that understand how people actually buy and live.'],
  ['Personalization', 'Context, not surveillance', 'Third-party behavioral data for products that need insight without building a hidden tracking machine.'],
  ['Data partners', 'A new data category', 'A small, carefully documented dataset category for marketplaces and licensing partners to evaluate early.'],
];

export default function Technology() {
  return <section id="technology"><div className="shell section"><div className="section-head"><div><span className="section-label">Technology</span><h2>Open mechanics. Verifiable contributions.</h2></div><p>The token and reserve contract are intended to be open and verifiable on-chain. The system should be inspectable, not hidden behind a data broker’s black box.</p></div>
    <div className="use-grid">{uses.map(([eyebrow, title, copy]) => <SpotlightCard className="use-card" key={title}><span className="eyebrow">{eyebrow}</span><h3>{title}</h3><p>{copy}</p></SpotlightCard>)}</div>
  </div></section>;
}
