import { writable } from 'svelte/store';

export const cart = writable([]);
export const wishlist = writable([]);
export const isLoggedIn = writable(false);
export const filteredProducts = writable([]);
