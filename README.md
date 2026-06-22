# SD Store — Next-Gen E-Commerce Frontend

A premium, high-performance storefront for next-level gaming hardware. Built with a component-driven React architecture, global cart state management, and a polished Tailwind + Framer Motion experience.

[Live Demo](https://sdstore.netlify.app) • https://sdstore.netlify.app

## 🚀 Project Overview

`gaming-store` is a modern React-based storefront designed for elite gaming peripherals and hardware. It emphasizes maintainability, performance, and a premium UX through:

- Modular page orchestration with reusable layout components
- Global cart state powered by `CartContext`
- Dynamic client-side routing using React Router
- Tailwind-first styling with glassmorphic UI patterns
- Framer Motion micro-interactions for smooth, engaging transitions
- A normalized, type-safe data layer in `src/data.ts`

## 🌟 Core Architecture

### Modular Orchestration

Pages act as orchestrators that compose layout-specific sections from `src/components/layout`. This clean separation keeps business logic, presentation, and page composition decoupled.

### Global State Management

`src/context/CartContext.tsx` handles:

- cart item state
- add/remove/update cart operations
- derived totals and item counts
- localStorage persistence

### Intelligent Routing

The app uses `react-router-dom` to manage navigation and route-aware UI state. The Navbar is responsive to location changes and adjusts its styling dynamically for a premium visual experience.

### Optimized Data Layer

`src/data.ts` contains structured, dictionary-style product and category data. This avoids redundancy, supports type-safe filtering, and simplifies category-driven rendering in the Shop flow.

### Premium UX/UI

The storefront uses Tailwind CSS for utility-first styling, a high-contrast amber/slate palette, and motion-enhanced interactions that feel polished and fast.

## 📁 Key Files and Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── About/
│   │   └── Home/
│   ├── ui/
│   └── ProductCard.tsx
├── context/
│   └── CartContext.tsx
├── pages/
│   ├── About.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Home.tsx
│   ├── ProductDetails.tsx
│   └── Shop.tsx
├── App.tsx
└── data.ts
```

## 🧩 Installed Dependencies

- `react` / `react-dom` — UI library
- `react-router-dom` — declarative routing
- `framer-motion` — interaction and animation
- `tailwindcss` — utility-first styling
- `swiper` — carousel presentations
- `vite` — development tooling and build system

## 🛠️ Technology Stack

`React` `TypeScript` `Vite` `Tailwind CSS` `Framer Motion` `React Router` `Context API` `LocalStorage` `Responsive Design` `Glassmorphism`

## ⚙️ Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn

### Install

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 🛠️ Deployment

- Build command: `npm run build`
- Publish directory: `dist`
- Client-side routing support via `public/_redirects`

> Ensure your hosting environment is configured to redirect all traffic to `index.html` when using React Router.

## 📌 Recommended Workflow

1. Run `npm install`
2. Start local development with `npm run dev`
3. Create routes and pages within `src/pages`
4. Add shared UI patterns to `src/components/ui`
5. Keep cart logic centralized in `src/context/CartContext.tsx`
6. Persist product/category data in `src/data.ts`

## 🧠 Design Principles

- Maintainable page orchestration
- Reusable atomic UI components
- Clean separation of layout and data logic
- Consistent theming and motion-driven polish
- Strong typing and normalized state

## 🙋 Author

**Shams Sarar** — Full-Stack Software Engineer

- GitHub: [@ShamsSarar](https://github.com/ShamsSarar)

---

Built as a high-performance frontend architecture assessment for premium e-commerce experiences.
