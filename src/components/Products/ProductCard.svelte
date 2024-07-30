<script>
    //import { onMount } from 'svelte';
    import Ratings from './Ratings.svelte';
    import { navigate } from 'svelte-routing';
  
    //Exporting properties that can be passed from a parent component
    export let id;
    export let title;
    export let image;
    export let price;
    export let rating;
    export let category;
    
  //Function to handle click events, navigating to the product details page
  function handleClick() {
    navigate(`/products/${id}`);
  }
  //Function to handle adding a product to favorites
  function addToFavourites(event) {
    //Prevents click event from propagating to parent elements
    event.stopPropagation();
  }
</script>