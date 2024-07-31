# SwiftCart Store

 Swift cart is a modern, responsive e-commerce application built with Svelte and styled using style CSS. This project demonstrates how to create a dynamic product catalog with features such as product listing, filtering, sorting, and detailed product views.

## Features

- **Responsive Grid Layout**: Displays products in a grid that adjusts to different screen sizes.
- **Product Filtering**: Filter products by category.
- **Price-Based Sorting**: Sort products by price (ascending and descending).
- **Detailed Product View**: View detailed information about each product.
- **Loading Spinners**: Provides visual feedback while data is being fetched.
- **State Management**: Manages state using Svelte stores.

## Technologies Used

- **Svelte**: A modern JavaScript framework for building user interfaces.
- **Vite**: Next generation frontend tooling.

## Project Structure

├── node_modules/
├── public/
├── src/
|   |-- /assets
|   |   |-- online-shop.png
|   |-- index.html
|   |-- /Routes
|   |   |-- +Products.svelte
|   |   |-- +ProductDetail.svelte
|   |   |-- +Navbar.svelte
|   |--app.css
|   |-- |App.svelte
|   |-- main.js
|   |-- routes.js
|   |-- Stores.js
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── vite.config.js


## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tsaimogono/Module-03-TSAMOG500-JSE2407-GROUP-B1-TSAI-MOGONO-JSF02.git

## Navigate to the project Directory:
   cd Module-03-TSAMOG500-JSE2407-GROUP-B1-TSAI-MOGONO-JSF02

## Install dependencies:
npm install

## Start the development server:
npm run dev

Open your browser and navigate to http://localhost:3000 (or the port specified in your terminal)

## Usage

Browsing Products
The home page (Home.svelte) displays a grid of product cards.
Each card shows the product image, title, price, and category.
Click on a product card to view more details on the ProductDetail page.
Filtering and Sorting
Use the Filter component to filter products by category.
Use the Sort component to sort products by price (ascending or descending).
Searching Products
Use the Search component to search for specific products.
Loading States