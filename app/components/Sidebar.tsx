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
    <nav className="sticky top-[100px] h-fit">
      <div className="mb-6 p-4 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl">
        <h4 className="m-0 text-sm font-bold">On this page</h4>
      </div>

      <ul className="list-none p-0 m-0">
        {headings.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className={`block py-2.5 px-3 text-sm opacity-70 !no-underline rounded-lg transition-all duration-200 hover:opacity-100 hover:bg-[var(--muted)] hover:!text-[var(--orange)] ${
                activeId === item.id ? 'opacity-100 font-semibold bg-[var(--muted)]' : ''
              } ${item.level === 3 ? 'pl-8' : ''}`}
              style={{ color: activeId === item.id ? 'var(--orange)' : 'var(--text)' }}
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