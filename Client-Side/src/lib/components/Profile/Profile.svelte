<script>
    import '$lib/css/profile.css'; //import homepage styles
    import logo from '$lib/components/images/Logo.png'; 
    import profileicon from '$lib/components/images/profileicon.jpg'


    import { onMount } from "svelte";

    onMount(() => {
    window.botpressWebChat.init({
        botId: "2025/02/25/06/20250225063934-HGA74MAU",
        host: "https://cdn.botpress.cloud",
        clientId: "564aef3c-694d-473d-9e3f-bd4d81475072",
        messagingUrl: "https://messaging.botpress.cloud",
        botName: "ChatBot",
        showBotAvatar: true,
        showCloseButton: true,
        disableAnimations: false,
        stylesheet: "https://cdn.botpress.cloud/webchat/v2.2/style.css",
        themeName: "prism",
        showPoweredBy: false,
        enableTranscriptDownload: true
    });
});

</script>

<div>
<script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js">
 </script><script src="https://files.bpcontent.cloud/2025/02/25/06/20250225063934-HGA74MAU.js"></script>
</div>
    
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