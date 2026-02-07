'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Sidebar() {
  const [headings, setHeadings] = useState<any[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = document.querySelectorAll('h2, h3');
    const items = Array.from(elements).map((el: any) => ({
      id: el.id || el.textContent.toLowerCase().replace(/\s+/g, '-'),
      text: el.textContent,
      level: el.tagName === 'H2' ? 2 : 3,
    }));
    setHeadings(items);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h4>On this page</h4>
      </div>

      <ul className="sidebar-links">
        {headings.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className={`sidebar-link ${activeId === item.id ? 'active' : ''} ${item.level === 3 ? 'nested' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}