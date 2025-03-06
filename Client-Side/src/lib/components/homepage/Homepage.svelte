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
    import facebooklogo from '$lib/components/images/facebooklogo.png';
    import instalogo from '$lib/components/images/instalogo.png';
    import xlogo from '$lib/components/images/xlogo.png';
    import whatsapplogo from '$lib/components/images/whatsapplogo.png';

    import {onMount} from "svelte";

    let searchQuery = "";
    let filteredImages = [];
    let selectedCourse = "";
    let selectedDiet = "";

    function handleSearch() {
        filteredImages = images.filter(image =>
            image.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
            image.course.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
            image.diet.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }


    let images = [
        {src: SalmonQuinoaBowl, text: "Salmon Quinoa Bowl", course:["lunch"], diet: ["gluten-free"]},
        {src: PrawnSpagetti, text: "Prawn Spagetti", course:["dinner"], diet: ["halal", "high-protein"]},
        {src: BananaOatmealPancakes, text: "Banana Oatmeal Pancakes", course:["breakfast"], diet: ["halal", "high-protein", "vegetarian", "dairy-free"] },
        {src: StickyGingerSesameChicken, text: "Sticky Ginger Sesame Chicken", course:["lunch", "dinner"], diet: ["halal", "high-protein"]},
        {src: ChickpeaSaladSandwich, text: "Chickpea Salad Sandwich", course:["dinner", "lunch"], diet: ["vegan", "dairy-free"]},
        {src: StrawberryYoghurtBites, text: "Strawberry Yoghurt Bites", course:["bites"], diet:["halal", "vegetarian"]},
        {src: SteakWithMushroomSauce, text: "Steak With Mushroom Sauce", course: ["dinner", "lunch"], diet: ["high-protein", "halal"]},
        {src: EggSalad, text: "Egg Salad", course: ["breakfast"], diet: ["diary-free", "gluten-free", "halal"]}  
    ];

    onMount(()=> {
        filteredImages = images;
    });
</script>

<<<<<<< HEAD
<div>
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
    <script src="https://files.bpcontent.cloud/2025/02/25/06/20250225063934-HGA74MAU.js"></script>
</div>
=======
<svelte:head>
     <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2025/02/25/06/20250225063934-HGA74MAU.js"></script>
    </svelte:head>
>>>>>>> Harshikaa
    
 <!-- Navbar -->
<nav class="navbar">
    <div class="logo-container">
    <a href="/">
        <img src={logo} alt="Soulful Spoon Logo" class="logo" />
    </a>
        <span class="site">Soulful Spoon</span>
    </div>
    <ul class="nav-buttons">
        <li class="dropdown">
            <a href="/RecipePage">Recipes</a>
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
        <li><a href="/Aboutus">About us</a></li>
    </ul>

    <div class="action-buttons">
        <a href="/Articles">
    <button class="add-button" title="Add New">+</button>
</a>



    <!-- profile dropdown login.signup -->
     <div class="profile-dropdown">
        <img src={profileicon} alt="Profile" class="profile-icon"/>
        
        <ul class="dropdown-menu">
            <li><a href="/login" rel="external">Login</a></li>
            <li><a href="/signup"rel="external">Sign Up</a></li>
        </ul>
     </div>
    </div>
</nav>

<!-- search bar -->
 <div class="search-filter-container">

    <!-- Filters -->
<div class="filter-box">
    <button class="filter-button">
        Filter Options ⇩</button>

    <div class="filter-dropdown">
        <h4>Courses</h4>
        <ul>
            <li><input type="radio" name="course" bind:group={selectedCourse}/> <label for="breakfast">Breakfast</label></li>
            <li><input type="radio" name="course" bind:group={selectedCourse} /> <label for="lunch">Lunch</label></li>
            <li><input type="radio" name="course" bind:group={selectedCourse}/> <label for="dinner">Dinner</label></li>
            <li><input type="radio" name="course" bind:group={selectedCourse}/> <label for="bites">Bites</label></li>
            <li><input type="radio" name="course" bind:group={selectedCourse}/> <label for="highProtein">High Protein</label></li>
            <li><input type="radio" name="course" bind:group={selectedCourse}/> <label for="dessert">Dessert</label></li>
            <li><input type="radio" name="course" bind:group={selectedCourse}/> <label for="baking">Baking</label></li>
        </ul>
        <h4>Dietary Requirements</h4>
        <ul>
            <li><input type="radio" name="diet" bind:group={selectedDiet}/> <label for="vegan">Vegan</label></li>
            <li><input type="radio" name="diet" bind:group={selectedDiet}/> <label for="vegetarian">Vegetarian</label></li>
            <li><input type="radio" name="diet" bind:group={selectedDiet}/> <label for="halal">Halal</label></li>
            <li><input type="radio" name="diet" bind:group={selectedDiet}/> <label for="dairyFree">Dairy Free</label></li>
            <li><input type="radio" name="diet" bind:group={selectedDiet}/> <label for="glutenFree">Gluten Free</label></li>
        </ul>
    </div>
 </div>
    <div class="search-container">
    <input
        type="text"
        bind:value={searchQuery}
        on:input={handleSearch}
        placeholder="Search recipes..."
        class="search-input"
        />
        <button class="search-button">🔍</button>
 </div>
 </div>

 <main>
    <h1>Welcome to Soulful Spoon</h1>

</main>

 <!-- recipes result after search -->
  <section class="image-layout">
    {#each filteredImages as image}
    <div class="imagetext">
        <!-- added to link each recipe to its individual page -->
        <a href="/recipes/{image.text.toLowerCase().replace(/\s+/g, '-')}" rel="external">
            <img src={image.src} alt={image.text} />
            <div class="hover-text">
                <p>{image.text}</p>
            </div>
        </a>
    </div>
    {/each}
</section>

<!-- Footer -->
 <footer class="footer">
    <div class="footer-container">
        <!-- logo and about us  -->
         <div class="footer-column">
            <img src={logo} alt="Soulful Spoon Logo" class="footer-logo">
            <p class="footer-about">Discover delicious recipes, tips and tricks for a healthier lifestyle.</p>
         </div>
         <!-- links for quick acess -->
          <div class="footer-column">
            <h4>Quick Links</h4>
            <ul class="footer-links">
                <li><a href="/Recipepage">Recipes</a></li>
                <li><a href="/Tips&tricks">Tips & Tricks</a></li>
                <li><a href="/About us">Aboutus</a></li>
            </ul>
          </div>
          <!-- social media -->
           <div class="footer-column">
            <h4>Follow us!</h4>
            <div class="social-icons">
                <a href="/#" class="social-link">
                    <img src={facebooklogo} alt="Facebook">
                </a>
                <a href="/#" class="social-link">
                    <img src={instalogo} alt="Instagram">
                </a>
                <a href="/#" class="social-link">
                    <img src={xlogo} alt="X">
                </a>
                <a href="/#" class="social-link">
                    <img src={whatsapplogo} alt="Whatsapp">
                </a>
            </div>
        </div>
    </div>
 </footer>