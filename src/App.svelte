<script>
  import { Router, Route} from 'svelte-spa-router';
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
    main {
        padding: 20px;
    }
</style>