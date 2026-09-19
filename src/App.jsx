import { useEffect, useState } from 'react';
import AmbientBackground from './components/AmbientBackground';
import Enterprise from './components/Enterprise';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import InterestForm from './components/InterestForm';
import Privacy from './components/Privacy';
import Technology from './components/Technology';

export default function App() {
  const [light, setLight] = useState(() => localStorage.getItem('eqlara-theme') === 'light');
  const [heroStyle, setHeroStyle] = useState({});

  useEffect(() => {
    document.documentElement.classList.toggle('light', light);
    document.documentElement.classList.toggle('dark', !light);
    localStorage.setItem('eqlara-theme', light ? 'light' : 'dark');
    document.querySelector('meta[name="theme-color"]').content = light ? '#fffaf7' : '#090605';
  }, [light]);

  useEffect(() => {
    const updateHero = () => {
      const y = window.scrollY;
      setHeroStyle({ opacity: Math.max(0.25, 1 - y / 760), transform: `translateY(${Math.min(75, y / 7)}px) scale(${Math.max(0.95, 1 - y / 10000)})` });
    };
    updateHero();
    window.addEventListener('scroll', updateHero, { passive: true });
    return () => window.removeEventListener('scroll', updateHero);
  }, []);

  return <><a className="skip-link" href="#main">Skip to content</a><AmbientBackground /><Header light={light} onThemeChange={() => setLight(!light)} /><main id="main"><Hero style={heroStyle} /><HowItWorks /><Enterprise /><Technology /><Privacy /><InterestForm /></main><Footer /></>;
}
