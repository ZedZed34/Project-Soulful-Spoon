<script>
    import '$lib/css/homepage.css'; //import homepage styles
    import logo from '$lib/components/images/Logo.png'; 
    import profileicon from '$lib/components/images/profileicon.jpg'
    import SalmonQuinoaBowl from '$lib/components/images/SalmonQuinoaBowl.jpg';
    import PrawnSpagetti from '$lib/components/images/PrawnSpagetti.jpg';
    import BananaOatmealPancakes from '$lib/components/images/BananaOatmealPancakes.jpg';
    import StickyGingerSesameChicken from '$lib/components/images/StickyGingerSesameChicken.jpg';
    import ChickpeaSaladSandwich from '$lib/components/images/ChickpeaSaladSandwich.jpg';
    import StrawberryYoghurtBites from '$lib/components/images/StrawberryYoghurtBites.jpg';
    import SteakWithMushroomSauce from '$lib/components/images/SteakWithMushroomSauce.jpg';
    import EggSalad from '$lib/components/images/EggSalad.jpg';

    let images = [
        {src: SalmonQuinoaBowl, text: "Salmon Quinoa Bowl"},
        {src: PrawnSpagetti, text: "Prawn Spagetti"},
        {src: BananaOatmealPancakes, text: "Banana Oatmeal Pancakes"},
        {src: StickyGingerSesameChicken, text: "Sticky Ginger Sesame Chicken"},
        {src: ChickpeaSaladSandwich, text: "Chickpea Salad Sandwich"},
        {src: StrawberryYoghurtBites, text: "Strawberry Yoghurt Bites"},
        {src: SteakWithMushroomSauce, text: "Steak With Mushroom auce"},
        {src: EggSalad, text: "Egg Salad"}
        
        
    ];
</script>

 <!-- Navbar -->
<nav class="navbar">
    <div class="logo-container">
        <img src={logo} alt="Soulful Spoon Logo" class="logo" />
        <span class="site">Soulful Spoon</span>
    </div>
    <ul class="nav-buttons">
        <li class="dropdown">
            <a href="#">Recipes</a>
            <ul class="dropdown-content">
            <li><a href="/breakfast">Breakfast</a></li>
            <li><a href="/lunch">Lunch</a></li>
            <li><a href="/dinner">Dinner</a></li>
            <li><a href="/desserts">Desserts</a></li>
            <li><a href="/snacks">Snacks</a></li>
            <li><a href="/snacks">Snacks</a></li>
            <li><a href="/quick-easy">Quick and Easy</a></li>
            <li><a href="/airfryer">Airfryer</a></li>
            </ul>
        </li>
        <li><a href="/Tips&tricks">Tips & Tricks</a></li>
        <li><a href="/About us">About us</a></li>
    </ul>

    <div class="action-buttons">
    <button class="add-button" title="Add New">+</button>
        <img src={profileicon} alt="Profile" class="profile-icon" />
    </div>
</nav>

<main>
    <h1>Welcome to Soulful Spoon</h1>

</main>

<section class="image-layout">
    {#each images as image}
    <div class="imagetext">
        <img src={image.src} alt={image.text} />
        <div class="hover-text">
            <p>{image.text}</p>
        </div>
    </div>
    {/each}
</section>
