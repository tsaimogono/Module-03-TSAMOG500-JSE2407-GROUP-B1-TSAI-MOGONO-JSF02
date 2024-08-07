<script>

    /**
     * @module ProductList
     * @description A component that displays a list of products with filtering and sorting options.
     * 
     * @import { onMount } - Lifecycle function for fetching data when the component mounts.
     * @import { Link } - Component from 'svelte-routing' for navigation.
     * @import { filteredProducts } - Svelte store containing the list of filtered products.
     * 
     * @property {Array} products - Array of product objects fetched from the API.
     * @property {Array} categories - Array of unique product categories for filtering.
     * @property {string} selectedCategory - The category selected for filtering products.
     * @property {string} selectedPriceOrder - The price order selected for sorting products.
     */
    import { onMount } from 'svelte';
    import { Link } from 'svelte-routing';
    import { filteredProducts } from '../Stores.js';
    
    let products = [];
    let categories = [];
    let selectedCategory = '';
    let selectedPriceOrder = '';

    /**
     * Fetches products from the API and initializes categories for filtering.
     * Sets the fetched products to the `filteredProducts` store.
     */

    onMount(async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        products = await res.json();
        filteredProducts.set(products);

        categories = [...new Set(products.map(product => product.category))];
    });

    /**
     * Filters and sorts products based on the selected category and price order.
     * Updates the `filteredProducts` store with the filtered and sorted products.
     */
    function filterProducts() {
        let tempProducts = products;

        if (selectedCategory) {
            tempProducts = tempProducts.filter(product => product.category === selectedCategory);
        }

        if (selectedPriceOrder === 'low-high') {
            tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        } else if (selectedPriceOrder === 'high-low') {
            tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        }

        filteredProducts.set(tempProducts);
    }

    /**
     * Array representing stars for rating display.
     * @type {Array}
     */
    const stars = Array(5).fill(0);
</script>

<style>


    /**
     * Styles for the ProductList component.
     * 
     * .product-grid - Grid layout for displaying products with responsive columns.
     * .product-card - Card styling for individual product display.
     * .image - Styling for product images.
     * h2 - Styling for product titles.
     * p - Styling for text elements.
     * button - Styling for buttons with hover effect.
     * .stars - Styling for star icons used in product ratings.
     * .filter-section - Layout for filter and sort controls.
     * 
     * @media (max-width: 1200px) - Adjust grid to 3 columns.
     * @media (max-width: 900px) - Adjust grid to 2 columns.
     * @media (max-width: 600px) - Adjust grid to 1 column and style adjustments.
     */
    .product-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Default: 4 cards per row */
        gap: 20px;
        margin: 0 auto; /* Center grid horizontally */
        max-width: 1200px; /* Optional: limit max width of the grid */
        padding: 0 20px; /* Optional: add padding to the sides */
    }
    
    .product-card {
        border: 1px solid #ddd;
        padding: 16px;
        border-radius: 8px;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }
    
    .product-card:hover {
        transform: translateY(-5px);
    }
    
    .product-card img {
        max-width: 100%;
        height: auto;
        height: 15rem;
        object-fit: contain;
        margin-bottom: 16px;
    }
    
    .product-card h2 {
        font-size: 20px;
        margin-bottom: 8px;
    }
    
    .product-card p {
        margin: 4px 0;
    }
    
    button {
        background-color: #3b82f6; /* Tailwind's blue-500 */
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    button:hover {
        background-color: #0056b3;
    }
    
    .stars {
        width: 1.25rem;
        height: 1.25rem;
    }
    
    .filter-section {
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .filter-section label, .filter-section select {
        margin-right: 10px;
    }
    
    /* Media queries for responsiveness */
    
    /* 1200px and below: 3 cards per row */
    @media (max-width: 1200px) {
        .product-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    
    /* 900px and below: 2 cards per row */
    @media (max-width: 900px) {
        .product-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    /* 600px and below: 1 card per row */
    @media (max-width: 600px) {
        .product-grid {
            grid-template-columns: 1fr;
        }
    
        .product-card {
            padding: 10px;
            margin: 10px;
        }
    
        .product-card h2 {
            font-size: 18px;
        }
    
        button {
            font-size: 14px;
            padding: 8px 16px;
        }
    
        .filter-section {
            flex-direction: column;
        }
    }
    </style>

<div>
    <h1>Products</h1>
    
    <div class="filter-section">
        <label>Filter by Category:</label>
        <select bind:value={selectedCategory} on:change={filterProducts}>
            <option value="">All</option>
            {#each categories as category}
                <option value={category}>{category}</option>
            {/each}
        </select>
        
        <label>Sort by Price:</label>
        <select bind:value={selectedPriceOrder} on:change={filterProducts}>
            <option value="">None</option>
            <option value="low-high">Lowest to Highest</option>
            <option value="high-low">Highest to Lowest</option>
        </select>
    </div>
    
    <div class="product-grid">
        {#each $filteredProducts as product}
            <div class="product-card">
                <img src={product.image} alt={product.title} width="100" />
                <h2>{product.title}</h2>
                <div class="flex items-center mb-2">
                    {#each stars as _, i}
                      <svg
                        class="stars {i < Math.round(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    {/each}
                  </div>
            
                <p>Category: {product.category}</p>
                <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                <Link to={`/product/${product.id}`}>
                    <button>View Product</button>
                </Link>
            </div> 33/*6
            










            
        {/each}
    </div>
</div>