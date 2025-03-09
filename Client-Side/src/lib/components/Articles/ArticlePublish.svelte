<script>
    import "$lib/css/articlepublish.css";  
    import { POST_URL } from "$lib/js/api-urls.js";
    import Editor from '@tinymce/tinymce-svelte';
    
    
      export let data;
    let article_title = "";
    let article_content = "";
    let username = data.username;
    let likes ;
    let dislikes;
    let date_published;
    let image_path;
    
    
    let error = false;
    let success = false;
    
    
    
        let showModal = false;
        function toggleModal() {
          showModal = !showModal;
        }
    
    //-----------------------------------------------------------------
      async function createArticle() {
        error = false;
        success = false;
    
        try{
         console.log({ article_title, article_content , username , likes, dislikes, date_published, image_path})
          const response = await fetch(POST_URL, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ article_title, article_content , username , likes, dislikes, date_published, image_path})
          });
    
    
        if (!response.ok){
          const errorMessage = await response.json();
          throw new Error(errorMessage.error);
        }
        success = true;
    
        article_content = "";
        article_title = "";
      }
    
        catch (error) {
                console.error('Error creating article:', error.message);
                alert('Error creating article: ' + error.message);
    
      }
    
    }
    
    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            const imageDataUrl = e.target.result;
            // Concatenate the image data URL to the article content
            article_content += `<img src="${imageDataUrl}" alt="Uploaded image">`;
          };
          reader.readAsDataURL(file);
        }
      }
    
    
      
    </script>
    
    
    <form on:submit|preventDefault={createArticle}> 
      <div id="publishArticles-container">
        
        <div>
        <p>Title</p>
        <textarea id="article_title" bind:value={article_title} rows="1" cols="40" maxlength="20" required></textarea>
        </div>
    
        <div id="content-upload">
        <div >
          <p> 
           Content
          </p>
          <div class = "AC">
          <textarea id="article_content" bind:value={article_content} rows="4" cols="40" maxlength="1000" required
          > </textarea> 
          
    
                                                         
          <Editor   id="article_content" 
          apiKey="47j9ca2i2bj3u4tecumr45esqktc9oooh23le1byo4z4lzqt" bind:value={article_content} />
         
          </div>
          </div>
    
        <div class="fileinput-button">
          <span id="text">Add image</span>
          <input type="file" id="content-image" name="content-image" accept="image/*" onchange={handleFileChange}/>
        </div>
      </div>
    
        <div>
        <button id="submit">Submit now!</button>
        </div>
    
        {#if showModal}
        <div class="pop-up-publish">
          <p>Do you want to submit?</p>
          <button on:click={createArticle}>Yes</button>
          <button on:click={toggleModal}>No</button>
        </div>
        {/if}
    
        {#if error}<span class="error">Could not save!</span>{/if}
        {#if success}<span class="success">Saved!</span>{/if}
        
       </div>
    </form>
    
    
    <style>
    
    .error,
      .success {
        font-weight: bold;
        padding: 5px;
        text-align: center;
      }
    
      .error {
        color: darkred;
        background-color: lightcoral;
      }
    
      .success {
        color: darkgreen;
        background-color: lightgreen;
      }
      .AC{
        position: relative;
      top: 30px;
      left: 350px;
      width: 800px;
      height: 500px;
      font-size: 20px;
      color:black;
      font-family: Arial, sans-serif;
      border: 1px solid #ccc;
      border-radius: 2px;
      padding: 5px;
      box-shadow: 1px 1px 2px #ccc;
      }
    
    </style>
    