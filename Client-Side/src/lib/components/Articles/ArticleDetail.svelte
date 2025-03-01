<script>

    import "$lib/css/articledetail.css"

    export let article_title = "Unknown Title";
    export let article_content = "No Content Available";
    export let username = "Anonymous";
    export let likes = 0 ;
    export let dislikes = 0;
    export let date_published = "Unknown Date";
    export let image_path = "";
</script>

<div id="recipe-container">
    <!-- details -->
    <h1>{article_title}</h1>
    <p><strong>By:</strong>{username}</p>
    <p><strong>Published:</strong>{date_published}</p>

    <!-- image -->
    {#if image_path}
         <img src="{image_path}" alt="{article_title}" width="400">
    {/if}

    <!-- content -->
    <h2>Recipe Details</h2>
    <p>{@html article_content}</p>

    <!-- interaction -->
    <div class="reaction-buttons">
        <button>Likes: {likes || 0}</button>
        <button>Dislikes: {dislikes || 0}</button>
    </div>

    <a href="/">Back to Recipes</a>
</div>