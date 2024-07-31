<script>
    import { onMount } from 'svelte';
    import { Link } from 'svelte-routing';
    import { filteredProducts } from '../Stores.js';
    
    let products = [];
    let categories = [];
    let selectedCategory = '';
    let selectedPriceOrder = '';

    onMount(async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        products = await res.json();
        filteredProducts.set(products);

        categories = [...new Set(products.map(product => product.category))];
    });

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
    const stars = Array(5).fill(0);
</script>
