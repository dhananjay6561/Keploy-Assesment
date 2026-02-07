import type { MDXComponents } from 'mdx/types'
import { CodeBlock } from './app/components/CodeBlock'
import { Callout } from './app/components/Callout'

// to generate ids fir easier naviation ins sidebar
const generateId = (children: React.ReactNode): string => {
    if (typeof children === 'string') {
        return children
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '');
    }
    
    if (Array.isArray(children)) {
        return children
            .map(child => typeof child === 'string' ? child : '')
            .join('')
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '');
    }
    return '';
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6 mt-10 lg:text-5xl">{children}</h1>,
        h2: ({ children, id }) => {
            const headingId = id || generateId(children);
            return <h2 id={headingId} className="text-2xl font-bold tracking-tight text-zinc-900 mb-4 mt-12 scroll-mt-24">{children}</h2>;
        },
        h3: ({ children, id }) => {
            const headingId = id || generateId(children);
            return <h3 id={headingId} className="text-xl font-bold tracking-tight text-zinc-900 mb-3 mt-8 scroll-mt-24">{children}</h3>;
        },
        p: ({ children }) => <p className="mb-6 leading-8 text-lg text-zinc-700">{children}</p>,
        ul: ({ children }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-lg text-zinc-700">{children}</ul>,
        ol: ({ children }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-lg text-zinc-700">{children}</ol>,
        li: ({ children }) => <li className="pl-2">{children}</li>,
        a: ({ children, href }) => <a href={href} className="font-medium text-zinc-900 underline decoration-zinc-400 decoration-1 underline-offset-2 transition-colors hover:decoration-zinc-900">{children}</a>,
        pre: ({ children, ...props }) => <CodeBlock {...props}>{children}</CodeBlock>,
        Callout,
        ...components,
    }
}
