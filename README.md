
# HTML-First Architecture Example

This repository demonstrates a custom **HTML-First architecture** with **Multi-Part Applications (MPA)** using [Sigment](https://github.com/sigmentjs/sigment).

- Pages are built from simple HTML with placeholders (`<layout>`, `<div data-part>`, `<div data-component>`).  
- **Components** can be rendered **server-side** (`runAtServer`) or hydrated on the client.  
- Supports **multiple component instances** per page, each with independent lifecycle and reactivity.  
- Includes a mix of **SSR and client-side only** components.  
- Demonstrates **dynamic routing with props** (`/about/:id?/:pageid?`).  
- Supports **component-level CSS** (e.g., Counter in its own folder with styling).  

> **Note:** "MPA" here refers to **Multi-Part Application** — each page can contain multiple independent parts (`data-part`) and components (`data-component`) rather than traditional full-page reload MPA.

---

## Key Concepts

- **`data-component`**  
  - Can be **server-rendered** with `runAtServer`.  
  - Can also be **client-only**.  
  - Each instance has its **own lifecycle**, reactive signals, and optionally SSR output.  
  - Can receive **props**, dynamic routing params, or other data.  

- **`data-part`**  
  - Purely a **layout placeholder**.  
  - Used to **override sections** of a layout (`<layout>`).  
  - Cannot run server logic on its own — it just wraps content/components.  
  - Acts like a **slot** in other frameworks.  

This distinction is what makes the **Multi-Part Application** flexible: layouts stay static and clean, while `data-component`s handle all logic and interactivity.

---

## Project Structure

```
Root:
│── app.js          # Starts the SSR server in production (npm run start)
│── ssr.config.js   # SSR build configuration
│── package.json
│── ...

src/
│── Main.js         # Entry point for hydration/build
│── components/     # All components (About, Footer, Header, Hello, Home, NotFound, etc.)
│   └── counter/    # Counter component with its own CSS
│── html/           # HTML pages (about, counter, hello, layouts, index.html)
│── router/         # Routes.js defines application routes
│── load-at-runtime/# components.js defines globally loadable components
│── assets/         # Static assets (css, images)
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Build static output and start SSR server
npm run build
npm run start   # -> runs app.js (SSR server)

# 3. Development mode (no SSR layout transform, live reload)
npm run dev
```

---

## Example Pages

- `/` → Home page
- `/about/:id?/:pageid?` → About page with dynamic params
- `/counter` → Counter demo (multiple independent counters)
- `/hello` → Hello component demo

---

## License

MIT

## Learn More

Want to understand how this architecture works in depth?  
Read the full article on Dev.to: [HTML-First Multi-Part Application Architecture](https://dev.to/yanivsuzana/html-firstwhy-i-built-my-own-html-first-multi-part-application-architecture-and-you-might-want-to-360e)
