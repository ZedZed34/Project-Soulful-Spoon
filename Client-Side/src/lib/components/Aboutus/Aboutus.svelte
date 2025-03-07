<script>
    import '$lib/css/aboutus.css'; 
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
            <a href="/">Recipes</a>
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
    <!-- lined to publish article page (change to actual one) -->
    <button class="add-button" title="Add New" on:click={() => window.location.href='/mockarticlepublish'}>+</button>

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

<section class="about-section">
 <h2>About Soulful Spoon</h2>
 <p>Welcome to Soulful Spoon! We are a team dedicated to making healthy eating accessible, enjoyable, and inclusive</p>

 <h2>Our Mission</h2>
 <p>We aim to promote healthier food choices by providing easy-to-follow, nutritious recipes. Soulful Spoon is a community-driven platform that empowers users to share thier own recipes, discover new flavours, and make informed food decisions based on thier lifestyle and dietary needs. </p>

 <h2>Why Soulful Spoon</h2>
 <ul>
    <li>🌱 **Promoting Healthier Eating** - Helping people shift away from ultra-processed food and embrace home-cooked, nutritious meals.</li>
    <li>🥗 **Diverse & Inclusive** - Recipes for various dietary preferences including **halal, vegetarian, vegan and gluten-free** options.</li>
    <li>💡 **Educational Content** - Articles, tips, and nutritional insights to make informed food choices.</li>
    <li>👨‍👩‍👧‍👦 **Community-Driven** - A space where users can share thier recipes, review recipes and connect with like-minded individuals.</li>
</ul>
</section>

<section class="contact-section">
    <div class="contact-container">
        <h2>📩 Get in Touch</h2>
        <p>Have questions, suggestions, or just want to say hello? We'd look to hear from you! 
            Feel free to reach us to us using the contact details below.
        </p>
        <div class="contact-info">
            <div class="contact-item">
                <h2>📧 Email Us</h2>
                <p><a href="mailto:soulfulspoon89@gmail.com">soulfulspoon89@gmail.com</a></p>
            </div>
            <div class="contact-item">
                <h3>📍Our Location</h3>
                <p>Singapore</p>
            </div>
        </div>
    </div>
    <div class="contact-form">
        <h3> 💬 Send Us a Message</h3>
        <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
        </form>
    </div>
</section>