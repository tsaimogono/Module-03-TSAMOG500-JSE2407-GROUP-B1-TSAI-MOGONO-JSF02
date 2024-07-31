/**
 * @module routes
 * @description Configuration for routing in the Svelte application. Maps URL paths to Svelte components.
 * 
 * @import Home - The Svelte component for the home page or products listing.
 * @import ProductDetail - The Svelte component for displaying product details.
 */
import Home from './Routes/+Products.svelte';
import ProductDetail from './Routes/+ProductDetail.svelte';

const routes = {
  '/': Home,
  '/product/:id': ProductDetail,
};

export default routes;
