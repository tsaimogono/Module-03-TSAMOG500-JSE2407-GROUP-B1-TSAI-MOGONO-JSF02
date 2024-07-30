<script>
  import Header from './components/Header.svelte'
  import ProductDetails from './components/Products/ProductDetails.svelte'
  import {Router, Route} from "svelte-routing"
  import ProductDetail from './components/Products/ProductDetail.svelte'
  
</script>

<style lang="postcss">
  :global(html) {
      background-color: #caf0f8;
  }

</style>

<Router>
      <Header />
  
  <Route path="/" component={ProductDetails} />
  <Route path="/products/:id" component={ ProductDetail}/>
</Router>
