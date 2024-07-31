<script>
    import { onMount } from 'svelte';
    import { Link } from 'svelte-routing';
    
    export let id;
  
    let product = null;
    let loading = true;
    let error = null;
  
    onMount(async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch product with ID ${id}: ${response.statusText}`);
            }
            product = await response.json();
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
        }
    });
  </script>
  

{#if loading}
<p>Loading...</p>
{:else if error}
<p>Error: {error}</p>
{:else if product}
<div class="product-details">
  <img class="image" src={product.image} alt={product.title} width="200" />
  <h1>{product.title}</h1>
  <p>{product.description}</p>
  <p>Category: {product.category}</p>
  <p>Price: ${product.price}</p>
  <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
  <Link to="/">
    <button>Back to Products</button>
  </Link>
</div>
{:else}
<p>Product not found.</p>
{/if}

<style>
.product-details {
  text-align: center;
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
}

.image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

h1 {
  font-size: 24px;
  margin-bottom: 8px;
}

p {
  margin: 4px 0;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .product-details {
      padding: 10px;
      margin: 10px;
  }

  h1 {
      font-size: 20px;
  }

  button {
      font-size: 14px;
      padding: 8px 16px;
  }
}
</style>
