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