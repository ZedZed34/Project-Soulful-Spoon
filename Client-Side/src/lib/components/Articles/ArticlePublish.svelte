<script>
  import "$lib/css/articlepublish.css";  
  import { POST_URL } from "$lib/js/api-urls";
  import Editor from '@tinymce/tinymce-svelte';
  import { user } from "$lib/components/user"; // Ensures proper user state tracking

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
  let showLoginPopup = false;
  let isAuthenticated = user ? true : false;

  if (!isAuthenticated) {
      showLoginPopup = true;
  }

  async function createArticle(event) {
      event.preventDefault();
      
      if (!isAuthenticated) {
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
</script>

<main>
  <h1>Publish an Article</h1>

  {#if showLoginPopup}
      <p class="error">Please <a href="/login">log in</a> to publish an article.</p>
  {/if}

  <form on:submit|preventDefault={createArticle}>
      <input type="text" bind:value={article_title} placeholder="Article Title" required />

      <Editor bind:value={article_content} apiKey="your-tinymce-api-key" />

      <div class="selection-container">
          <label>Course Category:</label>
          {#each courseOptions as course}
              <label><input type="checkbox" bind:group={selectedCourse} value={course} /> {course}</label>
          {/each}
      </div>

      <div class="selection-container">
          <label>Dietary Preferences:</label>
          {#each dietOptions as diet}
              <label><input type="checkbox" bind:group={selectedDiet} value={diet} /> {diet}</label>
          {/each}
      </div>

      <button type="submit">Publish</button>
  </form>

  {#if success}
      <p class="success">Article published successfully!</p>
  {/if}

  {#if error}
      <p class="error">{error}</p>
  {/if}

  <footer>
      <img src={logo} alt="Logo" />
      <img src={profileicon} alt="Profile Icon" />
      <div class="social-icons">
          <img src={facebooklogo} alt="Facebook" />
          <img src={instalogo} alt="Instagram" />
          <img src={xlogo} alt="Twitter" />
          <img src={whatsapplogo} alt="WhatsApp" />
      </div>
  </footer>
</main>

<style>
  main {
      max-width: 600px;
      margin: auto;
      padding: 20px;
  }
  input, button {
      display: block;
      width: 100%;
      padding: 10px;
      margin: 10px 0;
  }
  .selection-container {
      margin-top: 10px;
  }
  .success {
      color: green;
      font-weight: bold;
  }
  .error {
      color: red;
  }
  .social-icons img {
      width: 30px;
      margin-right: 10px;
  }
</style>
