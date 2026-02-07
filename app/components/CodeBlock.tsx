'use client';

import { Check, Copy } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import hljs from 'highlight.js';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
    children: React.ReactNode;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
    const [isCopied, setIsCopied] = useState(false);
    const preRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        if (preRef.current) {
            const codeElement = preRef.current.querySelector('code');
            if (codeElement) {
                hljs.highlightElement(codeElement);
            } else {
                hljs.highlightElement(preRef.current);
            }
        }
    }, [children]);

    const copyToClipboard = async () => {
        if (!preRef.current) return;
        const code = preRef.current.innerText;

        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <div className="group relative my-6 rounded-lg border border-zinc-200 bg-zinc-50 dark:bg-zinc-900/50">
            <button
                onClick={copyToClipboard}
                className="absolute right-2 top-2 z-10 hidden rounded-md p-1.5 text-zinc-400 opacity-0 transition-all hover:bg-zinc-200 hover:text-zinc-600 group-hover:opacity-100 md:block"
                aria-label="Copy code"
            >
                {isCopied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
            </button>
            <pre
                ref={preRef}
                className={`overflow-x-auto p-4 text-sm leading-6 ${className || ''}`}
                {...props}
            >
                {children}
            </pre>
        </div>
    );
}
