import { FileCheck, Layers } from './icons';
import SpotlightCard from './SpotlightCard';

export default function Enterprise() {
  return <section id="enterprise"><div className="shell section">
    <div className="section-head"><div><span className="section-label">For enterprise teams</span><h2>Training data with the paperwork already done.</h2></div><p>Most consumer data has a murky origin. Eqlara is designed around a stronger standard: a documented source, a defined use-scope, and a human who opted in.</p></div>
    <div className="bento"><SpotlightCard className="bento-main"><div><span className="section-label">One record, complete context</span><h3>Provenance isn’t a footnote. It’s part of the data.</h3><p>Every usable contribution is associated with a consent record and collection context—so teams can evaluate it with confidence rather than assumptions.</p></div><div className="record"><div className="record-head"><span>RECORD / 7E3A-91F</span><span className="verified">● VERIFIED</span></div><div className="record-grid"><span>source / email receipt</span><span>consent / 2026-01-14</span><span>scope / training + personalization</span><span>identity / removed</span></div></div></SpotlightCard>
      <div className="bento-side"><SpotlightCard className="data-card"><div className="iconbox"><FileCheck /></div><h3>Defined use-scope</h3><p>Data is contributed for specific, declared uses—not repurposed ad-tech exhaust.</p></SpotlightCard><SpotlightCard className="data-card"><div className="iconbox"><Layers /></div><h3>Longitudinal by design</h3><p>Merchant, category, and amount over time—useful context for real-world behavior models.</p></SpotlightCard></div>
    </div>
  </div></section>;
}
