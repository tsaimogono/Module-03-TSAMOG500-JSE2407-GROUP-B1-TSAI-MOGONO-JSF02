<script>

  /**
   * @module App
   * @description The main application component that sets up routing and includes the Navbar.
   * 
   * @import { Router, Route } - Components from 'svelte-routing' for handling routing in the application.
   * @import Products - The component for displaying the list of products.
   * @import ProductDetail - The component for displaying detailed information about a single product.
   * @import Navbar - The navigation bar component.
   */
  import { Router, Route} from 'svelte-routing';
  import Products from './Routes/+Products.svelte';
  import ProductDetail from '../src/Routes/+ProductDetail.svelte';
  import Navbar from './Routes/+Navbar.svelte';
</script>

<Navbar />

<main>
    <Router>
        <Route path="/" component={Products} />
        <Route path="/product/:id" component={ProductDetail} />
    </Router>
</main>

<style>

    /**
     * Styles for the App component.
     * 
     * main - Styles for the main content area including padding.
     */
    main {
        padding: 20px;
    }
</style>