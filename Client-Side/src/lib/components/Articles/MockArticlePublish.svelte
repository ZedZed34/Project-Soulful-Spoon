<script>
    import "$lib/css/mockarticlepublish.css";  
    import { POST_URL } from "$lib/js/api-urls";
    import Editor from '@tinymce/tinymce-svelte';
    import { user } from "$lib/components/user"; // Ensures user state tracking

    import logo from '$lib/components/images/Logo.png'; 
    import profileicon from '$lib/components/images/profileicon.jpg';
    import facebooklogo from '$lib/components/images/facebooklogo.png';
    import instalogo from '$lib/components/images/instalogo.png';
    import xlogo from '$lib/components/images/xlogo.png';
    import whatsapplogo from '$lib/components/images/whatsapplogo.png';

    let article_title = "";
    let article_content = "";
    let username = user?.name || "Guest";
    let likes = 0;
    let dislikes = 0;
    let date_published = new Date().toISOString();
    let image_path = "src/lib/components/images/publish-article.jpg";

    let selectedCourse = [];
    let selectedDiet = [];

    let courseOptions = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];
    let dietOptions = ["Vegan", "Halal", "Gluten-Free", "Keto", "Vegetarian"];

    let success = false;
    let error = null;
    let showLoginPopup = !user; // Show login popup if user is not authenticated

    async function createArticle(event) {
        event.preventDefault();
        
        if (!user) {
            error = "You must be logged in to publish an article.";
            return;
        }

        let newArticle = {
            title: article_title,
            content: article_content,
            username,
            likes,
            dislikes,
            date_published,
            image_path,
            course: selectedCourse,
            diet: selectedDiet
        };

        try {
            const response = await fetch(POST_URL, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newArticle)
            });

            if (!response.ok) {
                throw new Error("Failed to publish article.");
            }

            success = true;
            article_title = "";
            article_content = "";
            selectedCourse = [];
            selectedDiet = [];
            error = null;
        } catch (err) {
            console.error(err);
            error = err.message;
        }
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                image_path = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    function toggleCourse(course) {
        if (selectedCourse.includes(course)) {
            selectedCourse = selectedCourse.filter(c => c !== course);
        } else {
            selectedCourse = [...selectedCourse, course];
        }
    }

    function toggleDiet(diet) {
        if (selectedDiet.includes(diet)) {
            selectedDiet = selectedDiet.filter(d => d !== diet);
        } else {
            selectedDiet = [...selectedDiet, diet];
        }
    }
</script>

<!-- Navbar -->
<nav class="navbar">
    <div class="logo-container">
        <a href="/" rel="external">
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
                <li><a href="/quick-easy">Quick and Easy</a></li>
                <li><a href="/airfryer">Airfryer</a></li>
            </ul>
        </li>
        <li><a href="/Tips&tricks">Tips & Tricks</a></li>
        <li><a href="/Aboutus">About us</a></li>
    </ul>
</nav>

{#if showLoginPopup}
    <div class="popup">
        <div class="popup-content">
            <p>Please Log In to Publish Your Article.</p>
            <button onclick={() => window.location.href = '/login'}>Login</button>
        </div>
    </div>
{/if}

<div class="article-page {showLoginPopup ? 'blur-background' : ''}">
    <div class="publish-container">
        <div class="image-container">
            <img src={image_path} alt="Recipe Image">  
        </div>
        <div class="form-container">
            <h2>Publish Your Article</h2>
            <p class="username">By: <strong>{username}</strong></p>
            <form on:submit|preventDefault={createArticle}>
                <label>Title</label>
                <input type="text" bind:value={article_title} placeholder="Enter Title" required />
                
                <label>Course Category</label>
                <div class="course-selection">
                    {#each courseOptions as course}
                        <button type="button" class="course-button {selectedCourse.includes(course) ? 'selected' : ''}" on:click={() => toggleCourse(course)}>
                            {course}
                        </button>
                    {/each}
                </div>

                <label>Dietary Preferences</label>
                <div class="diet-selection">
                    {#each dietOptions as diet}
                        <button type="button" class="diet-button {selectedDiet.includes(diet) ? 'selected' : ''}" on:click={() => toggleDiet(diet)}>
                            {diet}
                        </button>
                    {/each}
                </div>

                <label>Content</label>
                <Editor id="article_content" apiKey="your-tinymce-api-key" bind:value={article_content} />

                <label class="file-upload">Upload Image
                    <input type="file" accept="image/*" on:change={handleFileChange} />
                </label>

                <button type="submit">Publish</button>
                {#if success}
                    <p class="success-message">Your Article Has Been Published!</p>
                {/if}
            </form>
        </div>
    </div>
</div>

<!-- Footer -->
<footer class="footer">
    <div class="footer-container">
        <div class="footer-column">
            <img src={logo} alt="Soulful Spoon Logo" class="footer-logo">
            <p class="footer-about">Discover delicious recipes, tips, and tricks for a healthier lifestyle.</p>
        </div>
        <div class="footer-column">
            <h4>Quick Links</h4>
            <ul class="footer-links">
                <li><a href="/Recipepage">Recipes</a></li>
                <li><a href="/Tips&tricks">Tips & Tricks</a></li>
                <li><a href="/Aboutus">About Us</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h4>Follow Us</h4>
            <div class="social-icons">
                <img src={facebooklogo} alt="Facebook">
                <img src={instalogo} alt="Instagram">
                <img src={xlogo} alt="Twitter">
                <img src={whatsapplogo} alt="WhatsApp">
            </div>
        </div>
    </div>
</footer>
