'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

type TocItem = {
  id: string;
  title: string;
  level: number;
};

export function Sidebar() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll('h2, h3')
    ) as HTMLHeadingElement[];

    const items = headings.map((heading) => {
      const id =
        heading.id ||
        heading.textContent
          ?.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '') ||
        '';

      heading.id = id;

      return {
        id,
        title: heading.textContent || '',
        level: heading.tagName === 'H2' ? 2 : 3,
      };
    });

    setToc(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -70% 0px',
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block w-64 sticky top-24 h-[calc(100vh-6rem)] overflow-auto pr-6">
      <h4 className="text-sm font-semibold text-zinc-900 mb-4">
        On this page
      </h4>

      <ul className="space-y-1">
        {toc.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`
                flex items-center text-sm rounded-md px-2 py-1.5 transition-colors
                ${
                  activeId === item.id
                    ? 'bg-zinc-100 text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                }
                ${item.level === 3 ? 'pl-6' : 'pl-2'}
              `}
            >
              <BookOpen className="mr-2 h-4 w-4 text-zinc-400" />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
