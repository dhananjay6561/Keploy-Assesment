'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import hljs from 'highlight.js';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
    children: React.ReactNode;
}

export function CodeBlock({ children, className }: any) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    const code = children?.props?.children || '';
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="my-6 border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--card-bg)]">
      <div className="flex justify-between items-center px-4 py-3 bg-[var(--bg)] border-b border-[var(--border)] text-xs font-bold">
        <span>CODE</span>
        <button
          onClick={copyCode}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border)] rounded-md text-xs text-[var(--text)] hover:bg-[var(--muted)]"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <pre className={`p-4 m-0 overflow-x-auto bg-[var(--muted)] text-sm ${className}`}>
        {children}
      </pre>
    </div>
  );
}
