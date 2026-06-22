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

Before you begin, ensure your system has the following installed:

- **Node.js** v16+ ([Download](https://nodejs.org/))
- **npm** (v7+) or **yarn** (v1.22+)
  - npm comes bundled with Node.js
  - To verify: `node --version` and `npm --version`
- **Git** ([Download](https://git-scm.com/))
  - To verify: `git --version`

### Step 1: Clone the Repository

```bash
git clone https://github.com/shamsssarar/gaming-store-frontend.git
cd gaming-store-frontend
```

### Step 2: Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

This installs all required packages listed in `package.json`:

- React & React DOM
- React Router DOM
- Tailwind CSS
- Framer Motion
- Vite
- TypeScript
- ESLint and related tools

### Step 3: Run the Development Server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The development server will start, typically at:

```
http://localhost:5173
```

Open this URL in your browser. The app will hot-reload when you make changes to the code.

### Step 4: Build for Production

When you're ready to deploy:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

This creates an optimized build in the `dist/` directory, ready for deployment.

### Step 5: Preview the Production Build

To test the production build locally:

```bash
npm run preview
```

Or with yarn:

```bash
yarn preview
```

### Step 6: Linting

To check code quality with ESLint:

```bash
npm run lint
```

Or with yarn:

```bash
yarn lint
```

### Troubleshooting

**Port 5173 already in use?**

```bash
npm run dev -- --port 3000
```

**Dependencies installation fails?**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -r node_modules package-lock.json

# Reinstall
npm install
```

**Hot reload not working?**

- Restart the dev server: `npm run dev`
- Check your firewall settings
- Ensure you're not running the app from a network drive

## 🛠️ Deployment

The project is deployed on **Netlify** with automatic builds from the GitHub repository.

### Deployment Configuration

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Live URL:** https://sdstore.netlify.app
- **Repository:** https://github.com/shamsssarar/gaming-store-frontend

### Client-Side Routing

The app uses client-side routing via React Router. The `public/_redirects` file is configured to handle all routes correctly in production:

```
/* /index.html 200
```

This ensures all requests are redirected to `index.html`, allowing React Router to manage navigation.

### Deploy Your Own Fork

1. Fork the repository on GitHub
2. Connect your fork to Netlify
3. Netlify will automatically build and deploy on every push
4. Configure your custom domain in Netlify settings

## 📌 Recommended Workflow

1. Run `npm install`
2. Start local development with `npm run dev`
3. Create routes and pages within `src/pages`
4. Add shared UI patterns to `src/components/ui`
5. Keep cart logic centralized in `src/context/CartContext.tsx`
6. Persist product/category data in `src/data.ts`

## 📚 Project Structure Breakdown

### Pages (`src/pages/`)

- **Home.tsx** — Landing page with featured products, hero banner, and promotions
- **Shop.tsx** — Product browsing with category filtering
- **ProductDetails.tsx** — Individual product page with specifications
- **Cart.tsx** — Shopping cart management
- **Checkout.tsx** — Multi-step checkout flow
- **About.tsx** — Company information and story

### Components

**Layout Components** (`src/components/layout/`)

- Home sections: HeroBanner, FeaturedProducts, BestSellers, SpecialOffers, etc.
- About sections: AboutHero, CoreValues, OriginStory, FinalCTA
- Navigation: Navbar, Footer

**UI Components** (`src/components/ui/`)

- ProductCard.tsx — Reusable product display card
- Other shared atomic components

### State Management

- **CartContext.tsx** — Centralized cart logic and state
- localStorage integration for persistence
- Derived state calculations (totals, item counts)

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
