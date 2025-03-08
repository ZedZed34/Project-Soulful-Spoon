<script>
    import '$lib/css/tips&tricks.css'; //import homepage styles
    import logo from '$lib/components/images/Logo.png'; 
    import profileicon from '$lib/components/images/profileicon.jpg'
    import facebooklogo from '$lib/components/images/facebooklogo.png';
    import instalogo from '$lib/components/images/instalogo.png';
    import xlogo from '$lib/components/images/xlogo.png';
    import whatsapplogo from '$lib/components/images/whatsapplogo.png';
    import kitchenaid from '$lib/components/images/kitchenaid.jpeg';
    import stainlesssteelbench from '$lib/components/images/stainlesssteelbench.jpg';

    let showMore = false;
    let showMoreScraper = false;
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
            <a href="/recipes">Recipes</a>
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
        <li><a href="/Aboutus">Aboutus</a></li>
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


<!-- Kitchen section -->
 <section class="kitchen-section">
    <h2>Kitchen Essential</h2>

    <div class="kitchen-tools">
        <!-- kitchen tool -->
        <div class="kitchen-tool">
        <img src={kitchenaid} alt="Kitchen Stand Mixer" class="kitchen-image">
     <button class="read-more-button" on:click={() => showMore = !showMore}>
        {showMore ? "Read Less" : "Read More"}
     </button>

     {#if showMore}
     <div class="read-more-content">
        <p>
            The KitchenAid stand mixer is an essential kitchen appliance for home bakers and professional chefs alike.
            It simplifies mixing, kneading, and whipping, saving time and effort. With multiple attachments, you can 
            make pasta, grind meat, and even churn ice cream, making it a versatile tool for any kitchen.
        </p>
     </div>
     {/if}
     </div>

    <!-- stainless steel -->
        <div class="kitchen-tool">
            <img src={stainlesssteelbench} alt="Stainless Steel Bench Scraper" class="kitchen-image">
         <button class="read-more-button" on:click={() => showMoreScraper = !showMoreScraper}>
            {showMoreScraper ? "Read Less" : "Read More"}
         </button>
         {#if showMoreScraper}
         <div class="read-more-content">
            <p>
                A stainless steel bench scraper is a must have tool for baking cooking. It helps in cutting dough, 
                scraping work surfaces, and even measuring with built-in ruler. Whether you're working with dough bread 
                or chopping herbs, this tool makes your prep work efficent and mess-free.
            </p>
         </div>
         {/if}
        </div>
    </div>
     </section>

 <section class="video-container">
    <h2>Cooking Tips & Tricks</h2>
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
