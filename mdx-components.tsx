import type { MDXComponents } from 'mdx/types'
import { CodeBlock } from './app/components/CodeBlock'
import { Callout } from './app/components/Callout'

// Generate IDs for headings
function generateId(children: React.ReactNode): string {
    if (typeof children === 'string') {
        return children.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    }
    if (Array.isArray(children)) {
        return children
            .map(child => (typeof child === 'string' ? child : ''))
            .join('')
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '');
    }
    return '';
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
                {children}
            </h1>
        ),

        h2: ({ children, id }) => (
            <h2
                id={id || generateId(children)}
                className="text-2xl font-semibold text-gray-900 mb-3 mt-10 scroll-mt-8"
            >
                {children}
            </h2>
        ),

        h3: ({ children, id }) => (
            <h3
                id={id || generateId(children)}
                className="text-xl font-semibold text-gray-900 mb-2 mt-6 scroll-mt-8"
            >
                {children}
            </h3>
        ),

        p: ({ children }) => (
            <p className="mb-4 text-gray-700 leading-relaxed">
                {children}
            </p>
        ),

        ul: ({ children }) => (
            <ul className="my-4 ml-6 list-disc text-gray-700 space-y-1">
                {children}
            </ul>
        ),

        ol: ({ children }) => (
            <ol className="my-4 ml-6 list-decimal text-gray-700 space-y-1">
                {children}
            </ol>
        ),

        li: ({ children }) => (
            <li className="pl-1">{children}</li>
        ),

        a: ({ children, href }) => (
            <a
                href={href}
                className="text-blue-600 underline hover:text-blue-800"
            >
                {children}
            </a>
        ),

        pre: ({ children, ...props }) => (
            <CodeBlock {...props}>{children}</CodeBlock>
        ),

        Callout,
        ...components,
    }
}
