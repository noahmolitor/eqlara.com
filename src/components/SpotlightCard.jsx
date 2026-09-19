import { useEffect, useRef } from 'react';

export default function SpotlightCard({ className = '', children }) {
  const card = useRef(null);
  useEffect(() => {
    const element = card.current;
    const update = (event) => {
      const bounds = element.getBoundingClientRect();
      element.style.setProperty('--x', `${event.clientX - bounds.left}px`);
      element.style.setProperty('--y', `${event.clientY - bounds.top}px`);
    };
    element.addEventListener('pointermove', update);
    return () => element.removeEventListener('pointermove', update);
  }, []);
  return <article ref={card} className={`spotlight ${className}`}>{children}</article>;
}
