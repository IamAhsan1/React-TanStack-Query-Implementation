# React TanStack Query Implementation 🔄⚡

A focused React application built with [Vite](https://vitejs.dev/) designed to demonstrate advanced server state management using **TanStack Query** (formerly React Query). This project moves away from traditional `useEffect` data fetching to provide a highly optimized, cached, and synchronized data experience.

## 🌟 Overview

Managing asynchronous data in React can be complex when handling loading states, caching, and synchronizing UI with the server. This repository serves as a practical implementation of TanStack Query, showcasing how to easily fetch product lists and handle data mutations (adding new products) while keeping the cache perfectly in sync.

## ✨ Key Features

*   **📦 Product Fetching (`ProductList.jsx`):** 
    *   Utilizes `useQuery` to fetch data from an API, handle loading/error states cleanly, and cache the results for instant subsequent navigations.
*   **➕ Data Mutations (`AddProduct.jsx`):** 
    *   Implements `useMutation` to send POST requests.
    *   Showcases **Query Invalidation** to automatically trigger a background refetch of the product list upon a successful submission.
*   **🛣️ Client-Side Routing (`router.jsx`):** 
    *   Clean navigation between the product list and creation forms using React Router.
*   **🔌 API Abstraction (`api.js`):** 
    *   Centralized Axios/Fetch logic to keep React components clean and focused strictly on the UI.

## 📂 Project Structure

```text
TanStack_Imp/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   │   └── api.js
│   ├── assets/
│   ├── pages/
│   │   ├── AddProduct.jsx
│   │   └── ProductList.jsx
│   ├── routes/
│   │   └── router.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js