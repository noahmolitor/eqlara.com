import { useState } from 'react';
import { Close, Menu, Moon, Sun } from './icons';

const links = [['How it works', '#how'], ['For teams', '#enterprise'], ['Technology', '#technology'], ['Privacy', '#privacy'], ['Join our team', '#interest']];

export default function Header({ light, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="nav-shell">
    <div className="shell nav">
      <a className="brand" href="#top" aria-label="Eqlara home"><img src="/eqlara-logo.png" alt="" />EQLARA</a>
      <nav className="nav-links" aria-label="Primary navigation">{links.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <div className="nav-actions">
        <button className="theme-button" onClick={onThemeChange} aria-label={`Switch to ${light ? 'dark' : 'light'} mode`}>{light ? <Moon /> : <Sun />}</button>
        <a className="button button-primary nav-cta" href="#interest">Join Eqlara</a>
        <button className="menu-button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <Close /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
    </div>
  </header>;
}
