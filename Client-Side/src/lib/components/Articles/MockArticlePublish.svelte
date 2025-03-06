<script>

    import "$lib/css/mockarticlepublish.css"
    import logo from '$lib/components/images/Logo.png'; 
    import profileicon from '$lib/components/images/profileicon.jpg'

    import Editor from '@tinymce/tinymce-svelte';

  
    let article_title = "";
    let article_content = "";
    let username = "Tester";
    // let likes = 0;
    // let dislikes = 0;
    let date_published = new Date().toISOString();
    let image_path = "src/lib/components/images/publish-article.jpg"

    let selectedCourse = [];
    let selectedDiet = [];


    // let error = false;
    let success = false;
    // let uploadedImage = "src/lib/components/images/publish-article.jpg"
    // let showModal = false;

    // function toggleModal(){
    //     showModal = !showModal
    // }

    function createArticle(event){
        event.preventDefault();
        success = true;
        console.log("Article Created:", {article_title, username});
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

<div class="article-page">
    <div class="publish-container">
        <div class="image-container">
            <img src={image_path} alt="Recipe Image">  
        </div>
        <div class="form-container">
            <h2>Publish Your Recipe!</h2>
            <p class="username">By: <strong>{username}</strong></p>
            <form onsubmit={createArticle}>
                <label>Title</label>
                <input type="text" bind:value={article_title} placeholder="Enter Recipe Title" required />
                <label>Course</label>
                <select required>
                    <option value="">Choose Course</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </select>
                <label>Diet</label>
                <select required>
                    <option value="">Choose Diet</option>
                    <option>Vegan</option>
                    <option>Halal</option>
                    <option>Gluten-Free</option>
                </select>
                <label>Recipe Content</label>
                <Editor   id="article_content" 
                apiKey="47j9ca2i2bj3u4tecumr45esqktc9oooh23le1byo4z4lzqt" bind:value={article_content} />
                <label class="file-upload">
                    Upload Image
                    <input type="file" id="content-image" name="content-image" accept="image/*" onchange={handleFileChange}/>
                </label>
                <button type="submit" class="upload-button">Publish Recipe</button>
                {#if success}
                    <p class="sucesss-message">Your Recipe Has Been Published!</p>
                {/if}
            </form>
        </div>
    </div>
</div>