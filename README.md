# BookNest — Responsive eCommerce Bookstore

A polished demo eCommerce bookstore built with React + Vite. It is designed to demonstrate responsive front-end development and an agentic workflow such as IBM BOB.

## Features

- Responsive desktop, tablet and mobile UI
- Search books by title, author or category
- Category filtering
- Book detail modal
- Add to cart
- Quantity controls and item removal
- Demo checkout interaction
- Newsletter subscription demo
- Reusable React components
- No backend required

## Run locally

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Suggested IBM BOB demo workflow

1. Provide the bookstore requirements to the agent.
2. Ask it to create a responsive React structure.
3. Review the generated components.
4. Ask the agent to improve mobile responsiveness.
5. Test search, filtering, product details and cart flows.
6. Fix issues with additional prompts.
7. Build and verify the final application.
8. Push the project to GitHub.

## Suggested prompts

### Initial prompt
Create a responsive eCommerce bookstore called BookNest using React and Vite. Include a responsive navbar, search, category filters, book cards, book details modal, shopping cart, quantity controls, checkout demo, and newsletter section. Use reusable components and mobile-first responsive CSS.

### Responsive refinement prompt
Review the BookNest UI for mobile, tablet and desktop breakpoints. Fix overflow, navigation, spacing, card sizing and touch-target issues while preserving the existing design.

### Testing prompt
Review the application for common UI and functional issues. Verify search, category filtering, add-to-cart, quantity changes, remove-item, checkout and book-detail flows. Fix any issues you find.

## GitHub

After creating your repository:

```bash
git init
git add .
git commit -m "Create responsive BookNest bookstore"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/booknest-ecommerce.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.