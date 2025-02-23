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
        <li class="hover-show">
            <a href="#">Recipes</a>
            <div class="hover-content">
                <p>Breakfast</p>
                <p>Lunch</p>
                <p>Dinner</p>
                <p>Desserts</p>
                <p>Snacks</p>
                <p>Quick and Easy</p>
            </div>
            <!-- <ul class="dropdown content">
            <li><a href="/breakfast">Breakfast</a></li>
            <li><a href="/lunch">Lunch</a></li>
            <li><a href="/dinner">Dinner</a></li>
            <li><a href="/desserts">Desserts</a></li>
            <li><a href="/snacks">Snacks</a></li>
            <li><a href="/snacks">Snacks</a></li>
            <li><a href="/quick-easy">Quick and Easy</a></li>
            <li><a href="/airfryer">Airfryer</a></li>
            </ul> -->
        </li>
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
