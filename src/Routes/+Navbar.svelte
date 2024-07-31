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