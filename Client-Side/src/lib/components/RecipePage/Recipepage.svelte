<script>
    import "$lib/css/recipepage.css";
    import logo from '$lib/components/images/Logo.png'; 
    import profileicon from '$lib/components/images/profileicon.jpg';
    import Breakfast from '$lib/components/images/Breakfast.jpg';

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



<div class="main">
    <div class="men-text">
        <h1> Recipes all that you <span> need </span> <br>at your fingertip</h1>
    </div>
</div>



<p class="paragraph">
    Welcome to your Ultimate Recipe Hub!
    Rise and Dine with scrumptious breakfasts, power up your afternoons with lipsmacking lunches,
    and end your day with dinners that hit the spot! Got the munchies? Snack attacks are covered too!
    Whether you're craving something light, hearty, sweet or savory, we have cooked up a feast of Recipes
    to keep your taste buds dancing. Dig in and let's get cooking! 🍳🥗🍕🍰
</p>

<!-- <body>
    <div class="container">
        <div class="slider-wrapper">
            <div class='card-list'>
                <div class='card-item'>
                   <img src={Breakfast} alt="User Image" class="user-image"> 
                    <h2 class="user-name">Breakfast </h2>
                    <p class="user-profession">Software Developer</p>
                    <button class="message-button">Message</button>
                </div>
            </div>
        </div>
    </div>
</body> -->


<!-- <div class="main_image">
    <img src={Breakfast}>
</div> -->
<!-- // <section class="image-layout">
//     {#each images as image}
//     <div class="imagetext">
//         <img src={image.src} alt={image.text} />
//         <div class="hover-text">
//             <p>{image.text}</p>
//         </div>
//     </div>
//     {/each}
// </section> -->


 <!-- <body>
    
//     <section class="hero">
//         <h1>Recipes</h1>
//         <p><em>Wholesome, Easy, delicious for Everyone!</em></p>
//     </section>
    
//     <section class="filter-section">
//         <label for="filter">Filter to your choice &#x25BC;</label>
//         <select id="filter">
//             <option>None</option>
//             <option>Halal</option>
//             <option>Vegetarian</option>
//             <option>Vegan</option>
//             <option>Gluten Free</option>
//             <option>Protein Powder Recipes</option> -->
         <!-- </select>
//     </section>
    
//     <section class="recipe-grid">
//         <div class="recipe-item"><img src="recipe1.jpg" alt="Recipe 1"></div>
//         <div class="recipe-item"><img src="recipe2.jpg" alt="Recipe 2"></div>
//         <div class="recipe-item"><img src="recipe3.jpg" alt="Recipe 3"></div>
//         <div class="recipe-item"><img src="recipe4.jpg" alt="Recipe 4"></div>
//         <div class="recipe-item"><img src="recipe5.jpg" alt="Recipe 5"></div>
//         <div class="recipe-item"><img src="recipe6.jpg" alt="Recipe 6"></div>
//     </section>
// </body> -->
