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
