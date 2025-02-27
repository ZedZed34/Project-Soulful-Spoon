<script>
    import '$lib/css/aboutus.css'; //import homepage styles
    import logo from '$lib/components/images/Logo.png'; 
    import profileicon from '$lib/components/images/profileicon.jpg'
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
        <li><a href="/About us">About us</a></li>
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
