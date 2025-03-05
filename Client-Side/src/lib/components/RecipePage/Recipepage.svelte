<script>
    import "$lib/css/recipepage.css";
    import logo from '$lib/components/images/Logo.png'; 
    import profileicon from '$lib/components/images/profileicon.jpg';
    import Breakfast from '$lib/components/images/Breakfast.jpg';
    import Lunch from '$lib/components/images/Lunch.jpg';
    import Dinner from '$lib/components/images/Dinner.jpg';
    import Desserts from '$lib/components/images/Desserts.jpg';
    import Snacks from '$lib/components/images/Snacks.jpg';
    import Quickeasy from '$lib/components/images/Breakfast.jpg';
    import Airfryer from '$lib/components/images/Airfryer.png';

    // importing the javascript to recipe.js
    import { onMount } from "svelte";
    import smoothScroll from "$lib/components/RecipePage/recipe.js"; 

    // allow smooth scrolling
    onMount(() => {
        smoothScroll();
    });
        // Sample images for different recipe sections
        const breakfastImages = [
        { src: {Breakfast}, text: "Pancakes with Maple Syrup" },
        { src: {Breakfast}, text: "Avocado Toast with Poached Egg" },
        { src: {Breakfast}, text: "Greek Yogurt & Granola Bowl" },
        { src: {Breakfast}, text: "Oatmeal with Fruits & Nuts" }]

        const lunchImages = [
        { src: {Lunch}, text: "Grilled Chicken Caesar Salad" },
        { src: {Lunch}, text: "Spaghetti Aglio e Olio" },
        { src: {Lunch}, text: "Teriyaki Salmon Rice Bowl" },
        { src: {Lunch}, text: "Vegetable Stir-Fry with Tofu" }]

        const dinnerImages = [
        { src: {Dinner}, text: "Butter Chicken with Garlic Naan" },
        { src: {Dinner}, text: "Beef Stroganoff with Mashed Potatoes" },
        { src: {Dinner}, text: "Lemon Herb Grilled Fish with Quinoa" },
        { src: {Dinner}, text: "Vegetable Curry with Basmati Rice" }]

        const dessertsImages = [
        { src: {Desserts}, text: "Chocolate Protein Lava Cake" },
        { src: {Desserts}, text: "Classic Dark Tiramisu" },
        { src: {Desserts}, text: "Vegan Strawberry Cheesecake" },
        { src: {Desserts}, text: "Mango Sticky Rice" }]

        const snacksImages = [
        { src: {Snacks}, text: "Nachos with Guacamole & Salsa" },
        { src: {Snacks}, text: "Cheese & Garlic Breadsticks" },
        { src: {Snacks}, text: "Crispy Popcorn Chicken" },
        { src: {Snacks}, text: "Hummus with Pita Chips" }]

        const quickeasyImages = [
        { src: {Quickeasy}, text: "Egg & Cheese Sandwich" },
        { src: {Quickeasy}, text: "One-Pan Garlic Shrimp Pasta" },
        { src: {Quickeasy}, text: "Microwave Mug Cake" },
        { src: {Quickeasy}, text: "Banana Peanut Butter Smoothie" }]

        const airfryerImages = [
        { src: {Airfryer}, text: "Crispy Air Fryer French Fries" },
        { src: {Airfryer}, text: "Buffalo Chicken Wings" },
        { src: {Airfryer}, text: "Air Fryer Mozzarella Sticks" },
        { src: {Airfryer}, text: "Cajun-Spiced Sweet Potato Wedges" }]
</script>


<!-- Navbar -->
<nav class="navbar">
    <div class="logo-container">
        <img src={logo} alt="Soulful Spoon Logo" class="logo" />
        <span class="site">Soulful Spoon</span>
    </div>
    <ul class="nav-buttons">
        <li class="dropdown">
            <a href="#/">Recipes</a>
            <ul class="dropdown-content">
            <li><a href="/breakfast">Breakfast</a></li>
            <li><a href="/lunch">Lunch</a></li>
            <li><a href="/dinner">Dinner</a></li>
            <li><a href="/desserts">Desserts</a></li>
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



<!-- Recipe Sections -->
<section id="breakfast" class="recipe-section">
    <h2>Breakfast Recipes</h2>
    <p>Start your day with the best breakfast options.</p>
    <div class="recipe-grid">
        {#each breakfastImages as img}
            <div class="container">
                <img src={Breakfast} alt={img.text} class="image">
                <div class="overlay">
                    <div class="text">{img.text}</div>
                </div>
            </div>
        {/each}
    </div>
</section>

<section id="lunch" class="recipe-section">
    <h2>Lunch Recipes</h2>
    <p>Power through the day with our tasty lunch ideas.</p>
    <div class="recipe-grid">
        {#each lunchImages as img}
            <div class="container">
                <img src={Lunch} alt={img.text} class="image">
                <div class="overlay">
                    <div class="text">{img.text}</div>
                </div>
            </div>
        {/each}
    </div>
</section>

<section id="dinner" class="recipe-section">
    <h2>Dinner Recipes</h2>
    <p>End your day with a fulfilling meal.</p>
    <div class="recipe-grid">
        {#each dinnerImages as img}
            <div class="container">
                <img src={Dinner} alt={img.text} class="image">
                <div class="overlay">
                    <div class="text">{img.text}</div>
                </div>
            </div>
        {/each}
    </div>
</section>

<section id="desserts" class="recipe-section">
    <h2>Dessert Recipes</h2>
    <p>Indulge in sweet treats with our dessert collection.</p>
    <div class="recipe-grid">
        {#each dessertsImages as img}
            <div class="container">
                <img src={Desserts} alt={img.text} class="image">
                <div class="overlay">
                    <div class="text">{img.text}</div>
                </div>
            </div>
        {/each}
    </div>
</section>

<section id="snacks" class="recipe-section">
    <h2>Snack Recipes</h2>
    <p>Quick and easy snacks to keep your energy levels high.</p>
    <div class="recipe-grid">
        {#each snacksImages as img}
            <div class="container">
                <img src={Snacks} alt={img.text} class="image">
                <div class="overlay">
                    <div class="text">{img.text}</div>
                </div>
            </div>
        {/each}
    </div>
</section>

<section id="quick-easy" class="recipe-section">
    <h2>Quick & Easy Recipes</h2>
    <p>Fast, simple, and delicious recipes for busy days.</p>
    <div class="recipe-grid">
        {#each quickeasyImages as img}
            <div class="container">
                <img src={Quickeasy} alt={img.text} class="image">
                <div class="overlay">
                    <div class="text">{img.text}</div>
                </div>
            </div>
        {/each}
    </div>
</section>

<section id="airfryer" class="recipe-section">
    <h2>Air Fryer Recipes</h2>
    <p>Healthy and crispy dishes made easy with an air fryer.</p>
    <div class="recipe-grid">
        {#each airfryerImages as img}
            <div class="container">
                <img src={Airfryer} alt={img.text} class="image">
                <div class="overlay">
                    <div class="text">{img.text}</div>
                </div>
            </div>
        {/each}
    </div>
</section>

