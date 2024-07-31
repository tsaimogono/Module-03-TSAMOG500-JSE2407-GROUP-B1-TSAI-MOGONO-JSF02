<script>
    import { cart, wishlist, isLoggedIn } from '../Stores';
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    // Close the menu when the screen size increases beyond mobile
    onMount(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                isMenuOpen = false;
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
</script>

<nav>
    <div class="navbar">
        <div class="navbar-brand">
            <a href="/" class="logo-link">
                SwiftCart 
                <img src="./assets/online-shop.png" />
              </a>
        </div>
        <div class="navbar-menu">
            <a href="/">Products</a>
            <a href="/wishlist">Wishlist ({$wishlist.length})</a>
            <a href="/cart">Cart ({$cart.length})</a>
            <a href="/login">Login</a>
        </div>
        <div class="navbar-hamburger" on:click={toggleMenu}>
            <span class="hamburger-icon"></span>
            <span class="hamburger-icon"></span>
            <span class="hamburger-icon"></span>
        </div>
    </div>
    {#if isMenuOpen}
    <div class="navbar-dropdown">
        <a href="/">Products</a>
        <a href="/wishlist">Wishlist ({$wishlist.length})</a>
        <a href="/cart">Cart ({$cart.length})</a>
        <a href="/login">Login</a>
    </div>
    {/if}
</nav>

<style>
    nav {
        background-color: #333;
        color: white;
        padding: 10px 20px;
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .navbar-brand a {
        color: white;
        text-decoration: none;
        font-size: 24px;
        font-weight: bold;
    }
    .navbar-menu {
        display: flex;
        gap: 20px;
    }
    .navbar-menu a {
        color: white;
        text-decoration: none;
    }
    .navbar-hamburger {
        display: none;
        cursor: pointer;
    }
    .hamburger-icon {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 5px 0;
    }
    .navbar-dropdown {
        display: none;
        flex-direction: column;
        background-color: #333;
        position: absolute;
        top: 60px;
        width: 100%;
        padding: 10px 20px;
    }
    .navbar-dropdown a {
        color: white;
        text-decoration: none;
        padding: 10px 0;
    }

    .logo-image {
     height: 2rem; /* Equivalent to h-8 in Tailwind CSS */
}


    @media (max-width: 768px) {
        .navbar-menu {
            display: none;
        }
        .navbar-hamburger {
            display: block;
        }
        .navbar-dropdown {
            display: flex;
        }
    }
    .logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-image {
  height: 2rem; /* Equivalent to h-8 in Tailwind CSS */
  margin-left: 0.5rem; /* Add some space between the text and the image */
}

</style>
