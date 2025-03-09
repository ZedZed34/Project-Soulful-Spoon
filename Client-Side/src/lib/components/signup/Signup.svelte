<script>
  import { SIGNUP_URL } from "$lib/js/api-urls";
  import "$lib/css/signup.css";  
  import { goto } from "$app/navigation";
  import { loginWithGoogle, logout, auth } from "$lib/firebase";
  import { onMount } from "svelte";

  let user = null;
  let username = "";
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let confirmedPassword = "";
  let profilePicture = "";
  
  let error = false;
  let passwordMatchError = false;
  let usernameTakenError = false;
  let emailTakenError = false;

  let images = [
    "/src/lib/components/images/pp-jaguar.png", 
    "/src/lib/components/images/pp-parrot.png", 
    "/src/lib/components/images/pp-panda.png",
    "/src/lib/components/images/pp-turtle.png", 
    "/src/lib/components/images/pp-butterfly.png", 
    "/src/lib/components/images/pp-jacutinga.png"
  ];
  
  let currentImage = 0;
  let selectedImage = images[currentImage];

  async function googleLogin() {
    try {
      const result = await loginWithGoogle();
      user = result.user;
      const uniqueUsername = user.displayName.replace(" ", "_") + "_" + Math.floor(Math.random() * 10000);

      const response = await fetch(SIGNUP_URL, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username: uniqueUsername, 
          email: user.email,
          profilePicture: user.photoURL 
        })
      });

      if (!response.ok) throw new Error("Google sign-up failed");

      console.log("Google Login Success:", user);
      window.location.href = "/";
    } catch (err) {
      console.error("Google Login Error:", err);
      error = true;
    }
  }

  async function signupUser() {
    if (password !== confirmedPassword) {
      passwordMatchError = true;
      return;
    }

    try {
      const response = await fetch(SIGNUP_URL, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          firstName,
          lastName,
          email,
          password,
          profilePicture: selectedImage
        })
      });

      if (response.status === 409) {
        const errorData = await response.json();
        if (errorData.message.includes("username")) usernameTakenError = true;
        if (errorData.message.includes("email")) emailTakenError = true;
        return;
      }

      if (!response.ok) throw new Error("Signup failed");

      console.log("Signup successful");
      goto("/login");
    } catch (err) {
      console.error("Signup Error:", err);
      error = true;
    }
  }

  function changeProfilePicture() {
    currentImage = (currentImage + 1) % images.length;
    selectedImage = images[currentImage];
  }
</script>

<main>
  <h1>Sign Up</h1>
  
  <form on:submit|preventDefault={signupUser}>
    <input type="text" bind:value={username} placeholder="Username" required />
    {#if usernameTakenError}
      <p class="error">Username is already taken.</p>
    {/if}

    <input type="text" bind:value={firstName} placeholder="First Name" required />
    <input type="text" bind:value={lastName} placeholder="Last Name" required />
    
    <input type="email" bind:value={email} placeholder="Email" required />
    {#if emailTakenError}
      <p class="error">Email is already registered.</p>
    {/if}

    <input type="password" bind:value={password} placeholder="Password" required />
    <input type="password" bind:value={confirmedPassword} placeholder="Confirm Password" required />
    {#if passwordMatchError}
      <p class="error">Passwords do not match.</p>
    {/if}

    <div class="profile-picture">
      <img src={selectedImage} alt="Profile Picture" />
      <button type="button" on:click={changeProfilePicture}>Change Picture</button>
    </div>

    <button type="submit">Sign Up</button>
  </form>

  <p>Or sign up using Google:</p>
  <button on:click={googleLogin}>Sign in with Google</button>

  {#if error}
    <p class="error">An error occurred. Please try again.</p>
  {/if}
</main>

<style>
  main {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  input, button {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
  }
  .profile-picture {
    text-align: center;
  }
  .profile-picture img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .error {
    color: red;
    font-size: 0.9em;
  }
</style>
