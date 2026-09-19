import { Arrow } from './icons';

export default function Hero({ style }) {
  return <section id="top" className="hero"><div className="shell"><div className="hero-content" style={style}>
    <div className="kicker"><span className="kicker-dot" /> Consent-native data infrastructure</div>
    <h1>Consumer data with a <em>clear right to exist.</em></h1>
    <p>Real spending behavior for AI training and personalization—collected with explicit consent, stripped of direct identifiers, and documented record by record.</p>
    <div className="hero-actions"><a className="button button-primary" href="#how">Explore the system <Arrow /></a><a className="button button-secondary" href="#enterprise">For enterprise teams</a></div>
    <div className="hero-meta"><span>Early prototype · Base testnet</span><span className="rule" /><span>$EQL has no monetary value</span></div>
  </div></div></section>;
}
