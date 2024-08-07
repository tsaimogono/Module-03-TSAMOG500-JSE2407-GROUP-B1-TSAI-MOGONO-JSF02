/**
 * @module stores
 * @description This module exports Svelte writable stores for managing the application state.
 * 
 * Stores include:
 * - `cart`: A store for managing the user's shopping cart items.
 * - `wishlist`: A store for managing the user's wishlist items.
 * - `isLoggedIn`: A store for tracking the user's login state.
 * - `filteredProducts`: A store for managing the list of products after filtering.
 */

import { writable } from 'svelte/store';

/**
 * A writable store for managing the items in the user's shopping cart.
 * 
 * @constant {Writable<Array>} cart - The cart store which holds an array of cart items.
 */
export const cart = writable([]);
export const wishlist = writable([]);
export const isLoggedIn = writable(false);
export const filteredProducts = writable([]);



import { ref, computed } from 'vue';

/**
 * @module stores
 * @description This module exports reactive states for managing the application state in Vue.
 * 
 * Stores include:
 * - `cart`: A ref for managing the user's shopping cart items.
 * - `wishlist`: A ref for managing the user's wishlist items.
 * - `isLoggedIn`: A ref for tracking the user's login state.
 * - `filteredProducts`: A ref for managing the list of products after filtering.
 */

/**
 * A reactive state for managing the items in the user's shopping cart.
 * 
 * @constant {Ref<Array>} cart - The cart store which holds an array of cart items.
 */
export const cart = ref([]);

/**
 * A reactive state for managing the items in the user's wishlist.
 * 
 * @constant {Ref<Array>} wishlist - The wishlist store which holds an array of wishlist items.
 */
export const wishlist = ref([]);

/**
 * A reactive state for tracking the user's login state.
 * 
 * @constant {Ref<boolean>} isLoggedIn - The login state store which holds a boolean value.
 */
export const isLoggedIn = ref(false);

/**
 * A reactive state for managing the list of products after filtering.
 * 
 * @constant {Ref<Array>} filteredProducts - The filteredProducts store which holds an array of filtered products.
 */
export const filteredProducts = ref([]);
