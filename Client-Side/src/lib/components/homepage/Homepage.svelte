<script>
    import '$lib/css/homepage.css'; //import homepage styles
    import logo from '$lib/components/images/Logo.png'; 
</script>

 <!-- Navbar -->
<nav class="navbar">
    <div class="logo-container">
        <img src={logo} alt="Soulful Spoon Logo" class="logo" />
        <span class="site-name">Soulful Spoon</span>
    </div>
    <ul class="nav-buttons">
        <li><a href="/">Home</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/About us">About us</a></li>
    </ul>
    <div class="add-button">
        <button title="Add New">+</button>
    </div>
</nav>

<main>
    <h1>Welcome to Soulful Spoon</h1>
    <!-- <p>Discover trending recipes, tips, and more.</p> -->
</main>