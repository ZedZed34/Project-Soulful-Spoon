<script>

    import "$lib/css/articledetail.css"
    import logo from '$lib/components/images/Logo.png'; 
    import profileicon from '$lib/components/images/profileicon.jpg'
    import { onMount, onDestroy } from "svelte";

    export let id = ""; //unique recipe ID
    export let article_title = "Unknown Title";
    export let article_content = "No Content Available";
    export let username = "Anonymous";
    export let likes = 0 ;
    export let dislikes = 0;
    export let date_published = "Unknown Date";
    export let image_path = "";

    let userReaction = null;
    let showShareMenu = false;
    let currentURL = "";

    let isAuthenticated = false; // this is to track if a user is logged in
    let loggedInUser = "Anonymous"; //no user

    let newComment = "";
    let comments = [];

    let replyingTo = { commentID: null, replyID: null}
    let replyText = "";
    let replyingToUsername = null;

    let visibleComments = 7;
    let commentsExpanded = false;
    let visibileReplies = {};

    onMount(() => {
        currentURL = window.location.href;
        //using local storage first instead of backend
        if(typeof window !== "undefined"){
            //retrieve stored likes, dislikes, and user reaction
            let storedLikes = localStorage.getItem(`likes-${id}`);
            let storedDislikes = localStorage.getItem(`dislikes-${id}`);
            userReaction = localStorage.getItem(`reaction-${id}`) || null; //if user liked, disliked or null

            //use stored values if available
            likes = storedLikes ? parseInt(storedLikes, 10) : 0;
            dislikes = storedDislikes  ? parseInt(storedDislikes, 10) : 0;

            //load existing comments from local storage
            const storedComments = localStorage.getItem(`comments-${id}`);
            comments = storedComments ? JSON.parse(storedComments) : [];

            let storedUser = localStorage.getItem("loggedInUser");
            loggedInUser = storedUser ? storedUser : "Anonymous";

            document.addEventListener("click", handleClickOutside);
        }  
    });

    $: isAuthenticated = loggedInUser !== "Anonymous";

    onDestroy(() => {
        if(typeof window !== "undefined"){
            document.removeEventListener("click", handleClickOutside);
        }
    });
    
    function updateReaction(type){
        if(type === "like"){
            if(userReaction === "like"){
                //if user already liked, remove the like
                likes -= 1;
                userReaction = null;
                localStorage.removeItem(`reaction-${id}`);
            }
            else{
                //remove dislike first, if switching from dislike
                if(userReaction === "dislike"){
                    dislikes -= 1;
                }
                likes += 1;
                userReaction = "like";
                localStorage.setItem(`reaction-${id}`, "like");
            }
        }
        else if(type === "dislike"){
            if(userReaction === "dislike"){
                //if user already disliked, remove the dislike
                dislikes -= 1;
                userReaction = null;
                localStorage.removeItem(`reaction-${id}`);
            }
            else{
                //remove like first, if switching from like
                if(userReaction === "like"){
                    likes -= 1;
                }
                dislikes += 1;
                userReaction = "dislike";
                localStorage.setItem(`reaction-${id}`, "dislike");
            }
        }

        localStorage.setItem(`likes-${id}`, likes.toString());
        localStorage.setItem(`dislikes-${id}`, dislikes.toString());
    }

    function printRecipe(){
        window.print();
    }

    function toggleShareOptions(event){
        event.stopPropagation();
        showShareMenu = !showShareMenu;
    }

    function handleClickOutside(event){
        if(!event.target.closest(".share-container")){
            showShareMenu = false;
        }
    }

    function shareOn(platform){
        let text = encodeURIComponent("Check Out This Recipe: ");
        let url = encodeURIComponent(currentURL);
        let shareURL = "";

        if (platform === "whatsapp"){
            shareURL = `https://api.whatsapp.com/send?text=${text}%20${url}`;
        }
        else if (platform === "facebook"){
            shareURL = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        }
        else if (platform === "twitter"){
            shareURL = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        }

        window.open(shareURL, "_blank");
    }

    function copyLink(){
        navigator.clipboard.writeText(currentURL).then(() => {
            alert("Link Copied to Clipboard!");
        })
    }

    function addComment(){
        if (newComment.trim() === ""){
            return;
        };

        const commentObject= {
            id: Date.now(),
            username: loggedInUser, 
            text: newComment,
            date: new Date().toLocaleString(),
            profilePic: profileicon, 
            replies: []
        };

        comments = [...comments, commentObject];
        localStorage.setItem(`comments-${id}`, JSON.stringify(comments));
        newComment ="";
    }

    function deleteComment(commentID){
        comments = comments.filter(comment => comment.id !== commentID);
        localStorage.setItem(`comments-${id}`, JSON.stringify(comments));
    }

    function addReply(commentID){
        if(replyText.trim() === ""){
            return;
        };

        let formattedReplyText = replyingTo.replyID ? `@${replyingToUsername} ${replyText}` : replyText;

        const replyObject = {
            id: Date.now(),
            username: loggedInUser, 
            text: formattedReplyText,
            date: new Date().toLocaleString(),
            profilePic: profileicon, 
        };

        comments = comments.map(comment => {
            if(comment.id == commentID){
                return {...comment, replies: [...comment.replies, replyObject]};
            }

            return comment;
        });

        localStorage.setItem(`comments-${id}`, JSON.stringify(comments));

        replyingTo = { commentID: null, replyID: null};
        replyText = "";
        replyingToUsername = null;

    }

    function deleteReply(commentID, replyID){
        comments = comments.map(comment => {
            if (comment.id === commentID){
                return{
                    ...comment, 
                    replies: comment.replies.filter(reply => reply.id != replyID)
                };
            }
            return comment;
        });
        localStorage.setItem(`comments-${id}`, JSON.stringify(comments));
    }

    function toggleComments(){
        commentsExpanded = !commentsExpanded;
        visibleComments = commentsExpanded ? comments.length : 7;
    }

    function toggleReplies(commentID){
        visibileReplies[commentID] = !visibileReplies[commentID];
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

<div id="recipe-container">
    <div class="recipe-header">
        <h1>{article_title}</h1>
        
        <div class="reaction-buttons">
            <button 
                on:click|preventDefault={() => updateReaction("like")}
                class:userReacted={userReaction === "like"}
            >👍 {likes || 0}</button>
            <button 
                on:click|preventDefault={() => updateReaction("dislike")}
                class:userReacted={userReaction === "dislike"}
            >👎 {dislikes || 0}</button>
        </div>
        <button class="print-button" on:click={() => printRecipe()}>🖨️ Print Recipe</button>

        <div class="share-container">
            <button class="share-button" on:click={toggleShareOptions} >🔗 Share Recipe</button>
            {#if showShareMenu}
                <div class="share-options">
                    <button class="whatsapp" on:click={() => shareOn("whatsapp")}> WhatsApp </button>
                    <button class="facebook" on:click={() => shareOn("facebook")}> Facebook </button>
                    <button class="twitter" on:click={() => shareOn("twitter")}> Twitter </button>
                    <div class="copy-link">
                        <input type="text" value={currentURL} readonly />
                        <button on:click={copyLink}> Copy</button>
                    </div>
                </div>
            {/if}
        </div> 
    </div>
    <div class="recipe-meta">
        <p><strong>By:</strong> {username}</p>
        <p><strong>Published:</strong> {date_published}</p>
    </div>
    
    <!-- image -->
    {#if image_path}
         <img src="{image_path}" alt="{article_title}" class="recipe-image"/>
    {/if}

    <!-- content -->
    <h2>Recipe Details</h2>
    <p>{@html article_content}</p>
</div>

<section class = "comments-section">
    <h2 class="comment-title">Comments</h2>

    {#if isAuthenticated}
        <div class="comment-box">
            <textarea bind:value={newComment} placeholder="Write a Comment" rows="3"></textarea>
            <button on:click={addComment} disabled={newComment.trim() === ""}>Post Comment</button>
        </div>
    {:else}
        <p class="login-prompt">Sign In to Comment.</p>
    {/if}

    <ul class="comments-list">
        {#each comments.slice(0, visibleComments) as comment (comment.id)}
        <li class="comment">
            <img src={comment.profilePic} alt="Profile Picture" class="profile-picture"/>
            <div class="comment-content">
                <strong class="comment-username">{comment.username}</strong>
                <p class="comment-text">{comment.text}</p>
                <small class="comment-date">{comment.date}</small>
                <!-- <button class="reply-button" on:click={() => addReply(comment.id, prompt(`Replying to @${comment.username}: `))}>Reply</button> -->
               {#if isAuthenticated}
                <button class="reply-button" on:click={() => {
                        replyingTo = { commentID: comment.id, replyID: null };
                        replyingToUsername = null;
                    }}>Reply</button>
                    {#if comment.username === loggedInUser}
                        <button class="delete-button" on:click={() => deleteComment(comment.id)}>🗑️</button>
                    {/if}
                    {#if replyingTo.commentID === comment.id && replyingTo.replyID === null}
                        <div class="reply-box">
                            <textarea bind:value={replyText} placeholder="Write Your Reply" rows="2"></textarea>
                            <button on:click={() => addReply(comment.id)}>Post Reply</button>
                            <button class="cancel-reply" on:click={() => {replyingTo = {commentID: null, replyID: null}; replyText = ""}}>x</button>
                        </div>
                    {/if}
                {/if}

                <!-- replies -->
                {#each comment.replies.slice(0, visibileReplies[comment.id] ? comment.replies.length : 2) as reply (reply.id)}
                    <div class="reply">
                        <img src={reply.profilePic} alt="Profile Picture" class="reply-profile-picture"/>
                        <div class="reply-content">
                            <strong class="comment-username">{reply.username}</strong>
                            <p class="comment-text">{reply.text}</p>
                            <small class="comment-date">{reply.date}</small> 
                            <!-- <button class="reply-button" on:click={() => addReply(comment.id, prompt(`Replying to @${reply.username}: `), reply.username)}>Reply</button> -->
                            {#if isAuthenticated}
                                <button class="reply-button" on:click={() => {
                                    replyingTo = { commentID: comment.id, replyID: reply.id};
                                    replyingToUsername = reply.username;
                                }}>Reply</button>    
                                {#if reply.username === loggedInUser}
                                    <button class="delete-button" on:click={() => deleteReply(comment.id, reply.id)}>🗑️</button>
                                {/if}
                                {#if replyingTo.commentID === comment.id && replyingTo.replyID === reply.id}
                                <div class="reply-box">
                                    <textarea bind:value={replyText} placeholder=  "Replying to @{replyingToUsername}" rows="2"></textarea>
                                    <button on:click={() => addReply(comment.id)}>Post Reply</button>
                                    <button class="cancel-reply" on:click={() => {replyingTo = {commentID: null, replyID: null}; replyText = ""}}>x</button>
                                </div>
                                {/if}
                            {/if}
                        </div>
                    </div>
                {/each}

                {#if comment.replies.length > 2}
                    <button class="view-more-replies" on:click={() => toggleReplies(comment.id)}>
                        {visibileReplies[comment.id] ? "Hide Replies" : `View More Replies (${comment.replies.length -2})`}
                    </button>
                {/if}
            </div>
        </li>
        {/each}
    </ul>
    {#if comments.length > 7}
        <button class="view-more-comments" on:click={toggleComments}>
            {commentsExpanded ? "Hide Comments" : `View More Comments (${comments.length - visibleComments})`}
        </button>
    {/if}   
</section>