/**
 * @module main
 * @description The entry point for the Svelte application. It imports the main App component and attaches it to the DOM.
 * 
 * @import './app.css' - Import global styles for the application.
 * @import App - The main Svelte component that serves as the root of the application.
 */
import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
