<script>
    import '$lib/css/tips&tricks.css'; //import homepage styles
    import logo from '$lib/components/images/Logo.png'; 
    import profileicon from '$lib/components/images/profileicon.jpg'
    import facebooklogo from '$lib/components/images/facebooklogo.png';
    import instalogo from '$lib/components/images/instalogo.png';
    import xlogo from '$lib/components/images/xlogo.png';
    import whatsapplogo from '$lib/components/images/whatsapplogo.png';
</script>

<div>
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
    <script src="https://files.bpcontent.cloud/2025/02/25/06/20250225063934-HGA74MAU.js"></script>
</div>


<!-- Navbar -->
<nav class="navbar">
    <div class="logo-container">
    <a href="/#">
        <img src={logo} alt="Soulful Spoon Logo" class="logo" />
    </a>
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
            <li><a href="/snacks">Snacks</a></li>
            <li><a href="/quick-easy">Quick and Easy</a></li>
            <li><a href="/airfryer">Airfryer</a></li>
            </ul>
        </li>
        <li><a href="/Tips&tricks">Tips & Tricks</a></li>
        <li><a href="/Aboutus">About us</a></li>
    </ul>

    <div class="action-buttons">
    <button class="add-button" title="Add New">+</button>
        <img src={profileicon} alt="Profile" class="profile-icon" />
    </div>
</nav>

<!-- Filters -->
<div class="filter-box">
    <button class="filter-button">
        Filter Options ⇩
    </button>

    <div class="filter-dropdown">
        <h4>Courses</h4>
        <ul>
            <li><input type="radio" name="course" /> <label for="breakfast">Breakfast</label></li>
            <li><input type="radio" name="course" /> <label for="lunch">Lunch</label></li>
            <li><input type="radio" name="course" /> <label for="dinner">Dinner</label></li>
            <li><input type="radio" name="course" /> <label for="bites">Bites</label></li>
            <li><input type="radio" name="course" /> <label for="highProtein">High Protein</label></li>
            <li><input type="radio" name="course" /> <label for="dessert">Dessert</label></li>
            <li><input type="radio" name="course" /> <label for="baking">Baking</label></li>
        </ul>
        <h4>Dietary Requirements</h4>
        <ul>
            <li><input type="radio" name="diet" /> <label for="vegan">Vegan</label></li>
            <li><input type="radio" name="course" /> <label for="vegetarian">Vegetarian</label></li>
            <li><input type="radio" name="course" /> <label for="halal">Halal</label></li>
            <li><input type="radio" name="course" /> <label for="dairyFree">Dairy Free</label></li>
            <li><input type="radio" name="course" /> <label for="glutenFree">Gluten Free</label></li>
        </ul>
    </div>
 </div>

 <h4>Kitchen</h4>

 <section class="video-container">
    <h4>Cooking Tips & Tricks</h4>
    <div class="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BHcyuzXRqLs?si=Bbc8AiykeNZJ1lWd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/H_erG7HSK0A?si=bk8lmV6AdBVNW8f1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>
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