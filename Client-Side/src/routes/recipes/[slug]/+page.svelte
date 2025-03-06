<script>
    import ArticleDetail from "$lib/components/Articles/ArticleDetail.svelte";
    export let data;
</script>

<svelte:head>
    <title>{data.recipe.article_title}</title>
  </svelte:head>

{#if data?.recipe}
<ArticleDetail
    id={data.recipe.id}
    article_title={data.recipe.article_title}
    article_content={data.recipe.article_content}
    username={data.recipe.username}
    likes={data.recipe.likes}
    dislikes={data.recipe.dislikes}
    date_published={data.recipe.date_published}
    image_path={data.recipe.image_path}
/>
{:else}
    <p>Loading Recipe...</p>
{/if}