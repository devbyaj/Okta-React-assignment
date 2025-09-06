# Okta React Assignment

This project is a React application built as part of a Senior Frontend Engineer assignment.  
It demonstrates the use of modern tooling, a clean architecture, reusable UI components, and a consistent design system with **light & dark theme support**.

- Deployed to vercel
- You can access at: https://okta-react-assignment.vercel.app/

## Tech Stack

- **React 18** – Component-based UI development  
- **Vite 6** – Fast dev server & build system  
- **TypeScript 5** – Type safety and maintainability  
- **TailwindCSS 3** – Utility-first styling  
- **React Router DOM 7** – Client-side routing  
- **React Icons 5** – Icon library  
- **@devbyaj/dev-ui 1.0.5** – Personal UI component library with theme support  

---

## 🛠️ Local Setup

Follow the steps below to run the project locally:

```bash
# 1. Clone the repository or download zip file
GitHub: git clone https://github.com/devbyaj/Okta-React-assignment.git
Zip file: 
cd okta-react-assignment

# 2. Install dependencies
bun install or npm install (To use bun, please install if not done)

# 3. Start the development server
bun start or npm start

# 4. App will be available at:
http://localhost:5173/

# 5. For build
bun run build or npm run build
```

## Project Structure

```text
okta-react-assignment/
├── dist/                    # assets created after build
├── src/                     # Source code
│   ├── components/          # Project components & shared (Re-usable components)
|   ├── constants/           # Project hardcoded config
│   ├── pages/               # Route-level pages
|   ├── types/               # Typescript files
│   ├── App.tsx              # Root app component
│   └── index.tsx            # App entry point
│
├── .npmrc                   # Used for custom UI library (dev-ui)
├── package.json             # Dependencies & scripts
├── tailwind.config.ts       # Tailwind config and UI library themes setup
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite configuration
├── vercel.json              # Vercel configuration to deploy the application
└── README.md                # Project documentation
```

## 🎨 Custom UI Component Library

This project integrates a **personal component library** which I am using for my personal project:  
[`Storybook`](https://dev-ui-xi.vercel.app/), [`Package`](https://github.com/devbyaj/dev-ui/pkgs/npm/dev-ui), 



### 🔑 Key Features
- Built with **React + TailwindCSS**
- Provides **reusable and accessible UI components**
- **Light & Dark theme support** using CSS variables
- Ensures **consistent design system** across the application
- Reduces boilerplate for common UI elements

---

### 📦 Installation
The library is already included in this project as a dependency:

```json
"dependencies": {
  "@devbyaj/dev-ui": "1.0.5"
}
