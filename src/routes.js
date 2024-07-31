import Home from './Routes/+Products.svelte';
import ProductDetail from './Routes/+ProductDetail.svelte';

const routes = {
  '/': Home,
  '/product/:id': ProductDetail,
};

export default routes;
