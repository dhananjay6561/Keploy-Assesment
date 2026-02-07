# Keploy Documentation Portal

A modern, professional documentation website built with Next.js, MDX, and Tailwind CSS, showcasing Keploy's API testing capabilities for Go applications.

## 📋 Overview

This project is a comprehensive documentation portal that demonstrates how to implement automated API testing using Keploy with a Go + Echo + PostgreSQL application. The portal features a clean, Medium-style interface with interactive components, syntax-highlighted code blocks, and an intelligent sidebar navigation system.

## ✨ Key Features

- **MDX-Powered Content**: Write documentation using Markdown with embedded React components
- **Smart Navigation**: Dynamic table of contents with scroll-spy functionality
- **Syntax Highlighting**: Beautiful code blocks with syntax highlighting powered by Shiki
- **Responsive Design**: Fully responsive layout optimized for all screen sizes
- **Custom Components**: 
  - Interactive callout boxes for important information
  - Enhanced code blocks with syntax highlighting
  - Dynamic sidebar with active section tracking
- **Typography Excellence**: Carefully selected font combinations for optimal readability
- **Modern Stack**: Built with the latest Next.js 16 and React 19

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org/) with App Router
- **UI Library**: [React 19.2.3](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with Typography plugin
- **Content**: [MDX 3](https://mdxjs.com/) for enhanced Markdown
- **Syntax Highlighting**: [Shiki](https://shiki.matsu.io/) and Rehype Pretty Code
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)

## 📦 Project Structure

```
keploy-assignment/
├── app/
│   ├── components/
│   │   ├── Callout.tsx       # Callout component for highlighting information
│   │   ├── CodeBlock.tsx     # Enhanced code block with syntax highlighting
│   │   └── Sidebar.tsx       # Dynamic navigation sidebar with scroll-spy
│   ├── Callout.mdx           # MDX content for callout examples
│   ├── page.mdx              # Main documentation content
│   ├── layout.tsx            # Root layout with header and navigation
│   └── globals.css           # Global styles and Tailwind directives
├── public/
│   └── images/               # Static images for documentation
├── mdx-components.tsx        # Custom MDX component mappings
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd keploy-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the documentation portal.

## 📝 Available Scripts

- `npm run dev` - Start the development server with hot-reload
- `npm run build` - Create an optimized production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Design Philosophy

This project follows a clean, Medium-inspired design philosophy with emphasis on:

- **Readability**: Large, legible typography with optimal line lengths
- **Hierarchy**: Clear visual hierarchy through consistent spacing and sizing
- **Simplicity**: Minimal, distraction-free interface
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized assets and lazy-loading strategies

## 🔧 Key Components

### Sidebar Navigation

The sidebar component features:
- Automatic table of contents generation from headings
- Active section highlighting based on scroll position
- Smooth scrolling to sections
- Sticky positioning for persistent visibility
- Responsive behavior (hidden on mobile, visible on large screens)

### Code Blocks

Enhanced code blocks with:
- Syntax highlighting for multiple languages
- Copy-to-clipboard functionality
- Language indicators
- Proper overflow handling
- Theme-consistent styling

### Callout Boxes

Custom callout components for:
- Highlighting important information
- External link references
- Warning messages
- Tips and best practices

## 🌐 Content Management

Documentation content is written in MDX format, allowing you to:
- Use standard Markdown syntax
- Embed React components directly in content
- Create interactive documentation
- Maintain type safety with TypeScript

To edit content, simply modify the `.mdx` files in the `app/` directory.

## 🎯 Use Cases

This documentation portal is ideal for:
- Technical documentation websites
- API documentation
- Tutorial platforms
- Developer guides
- Product documentation
- Knowledge bases

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is an assignment project. For any questions or suggestions, please contact the project maintainer.

## 📧 Contact

For inquiries regarding this project, please reach out through the appropriate channels.

---

**Built with ❤️ using Next.js and Tailwind CSS**
