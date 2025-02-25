<script>
    //commented out for now to view css and html (couldnt work if i did not comment out)
    //import { goto } from "$app/navigation";
    //import { user } from "../../../lib/components/user.js";
    //import { SIGNUP_URL } from "../../../lib/js/api-urls.js";
    import "$lib/css/signup.css";  
	import { goto } from "$app/navigation";
  import {loginWithGoogle, logout, auth} from "$lib/firebase";
  import {onMount} from "svelte";

  let user = null;
  let username = "";
  let firstName = "";
  let lastName = "";
  let email ="";
  let birthday ="";
  let password = "";
  let confirmedPassword = "";
  let profilePicture = "";
  let error = false;
  let passwordMatchError = false;
  let usernameTakenError = false;
  let emailTakenError = false;
  let images = ["/src/lib/components/images/pp-jaguar.png", "/src/lib/components/images/pp-parrot.png", "/src/lib/components/images/pp-panda.png","/src/lib/components/images/pp-turtle.png", "/src/lib/components/images/pp-butterfly.png", "/src/lib/components/images/pp-jacutinga.png"];
  let currentImage = 0;
  let selectedImage = images[currentImage];

  async function googleLogin(){
    try{
      const result = await loginWithGoogle();
      user = result.user;
      console.log("Google Login Sucess:", user);
    } catch (error){
        console.log("Google Login Failed:", error);
    }
  }

  function handleLogout(){
    logout();
    user = null;
  }

  onMount(() => {
    auth.onAuthStateChanged((u) => {
      user.u;
    });
  });

  function toggleImage() {
    // currentImage = (currentImage + 1) % images.length; //setting default image
    selectedImage = images[(currentImage + 1) % images.length];
    currentImage = (currentImage + 1) % images.length;

    const fileInput = document.getElementById("profilePicture");
    if(fileInput){
      fileInput.value = "";
    }

  }

  function handleFileUpload(event){
    const file = event.target.files[0];
    if(file){
      selectedImage = URL.createObjectURL(file);
    }
  }


  async function handleSignup() {
  error = false;
  passwordMatchError = false;
  usernameTakenError = false;
  emailTakenError = false;



  

  // Validate that birthday is chosen
  if (!birthday) {
    error = true;
    return;
  }

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
  confirmedPassword,
  birthday,
  profilePicture: images[currentImage], })
  });

  if (response.ok) {
            // Signup successful
            const userData = await response.json();
            user.login({ username: userData.username, email: userData.email, password: userData.password, confirmedPassword: userData.confirmedPassword });
            goto("/", { replaceState: true });
        } 
        
        else {
          const data = await response.json();
          console.log(data.error);
        if (response.status === 400) {
         
            if (data.error === 'username_taken') {
                usernameTakenError = true;
            } 
            if (data.error === 'email_taken') {
                emailTakenError = true;
            }
            if (password !== confirmedPassword) {
              passwordMatchError = true;
            }
          }
          else {
            // Handle other errors (e.g., server errors)
            console.log(data.error);
            console.error("Signup failed:", response.statusText);
            // Display a generic error message to the user
            
        }
       

}
  }

</script>

<svelte:head>
  <link rel="preload" href="/login">
  <title>Sign Up</title>
</svelte:head>




<div id="signup-container" >
  <div class="signup-image"></div>
  <!-- sign up form -->
  <div class="signup-form">
    <button class="close-button" on:click={() => goto('/')}>x</button>
    <h2>Create Account</h2>
    <form on:submit|preventDefault={handleSignup}>
      
      <!-- form columns -->
      <div class="form-columns">
        <!-- left column -->
        <div class="form-column">
          <!-- username -->
          <label for="username">Username:</label>
          <input type="text" bind:value={username} required />
          {#if usernameTakenError}
            <p class="error">Username is already taken. Please use a different username.</p>
          {/if}

          <!-- first name -->
          <div class="name-field">
            <div>
              <label for="firstName">First Name:</label>
              <input type="text" bind:value={firstName} required />
            </div>
          </div>

           <!-- password -->
           <label for="password">Password:</label>
           <input type="password" bind:value={password} required />
        </div>
        
        <!-- right column -->
        <div class="form-column">

          <!-- email -->
          <label for="email">Email:</label>
          <input type="email" bind:value={email} required />
          {#if emailTakenError}
              <p class="error">Email is already taken. Please use a different email address.</p>
          {/if}

          <!-- last name -->
          <div class="name-field">
            <div>
              <label for="lastName">Last Name:</label>
              <input type="text" bind:value={lastName} required />
            </div>
          </div>
        
          <!-- confirm password -->
          <label for="confirmedPassword">Confirm Password:</label>
          <input type="password" bind:value={confirmedPassword} required />
          {#if passwordMatchError}
          <p class="error">Password does not match. Re-enter password.</p>
          {/if}


          <!-- profile picture -->
          <!-- <div class="profile-picture">
              <label for="profilePicture">Profile Picture:</label>
              <img src={images[currentImage]} alt="Profile Picture">
              <button type="button" on:click={toggleImage}>Next</button>
          </div> -->

        </div>
        
      </div>

       <!-- birthday -->
       <!-- <label for="birthday">Birthday:</label>
       <input type="date" bind:value={birthday} required /> -->

       <!-- updated profile picture section -->
       <div class="profile-picture">
        <label class="profile-picture-label" for="profilePicture">Profile Picture:</label>
        <div class="profile-picture-image">
          <img src={selectedImage} alt="Profile">
          <input type="file" id="profilePicture" accept="image/*" on:change={handleFileUpload}>
          <button type="button" on:click={toggleImage}>Next</button>
        </div>
      </div> 

      <!-- signup button -->
      <button id="signup-button" type="submit">Sign Up</button>
    </form>

    {#if user}
      <div class="user-info">
        <img src={user.photoURL} alt="Profile">
        <p>Welcome, {user.displayName}!</p>
        <button on:click={handleLogout}>Logout</button>
      </div>
    {:else}
    <div class="social-login">
      <p>Or Sign Up With:</p>
      <div class="social-icons">
        <button on:click={googleLogin}>
          <img src="src/lib/components/images/google-icon.png" alt="Google" />
        </button>
        <!-- <img src="src/lib/components/images/facebook-icon.png" alt="Facebook" /> -->
      </div>
    </div>
    {/if}

    <!-- login redirect -->
     <div class="login">
      <p>Already Have an Account?
        <!-- <a href="/login" on:click={() => goto("/login")}>Login</a> -->
        <!-- <button class="login-button" on:click={() => goto('/login')}>Login</button> -->
        <a href="/login" rel="external">Login</a>

      </p>
     </div>
    
      <!-- <p class="login">
        Already Have an Account? <a href="/login">Login</a>
      </p> -->
  
  </div>
</div>

<!-- <svelte:head>
  <title>Sign Up</title>
</svelte:head>

<h1 id="registerHeader">Register</h1>

    <form id="register-container"> 
      
      <label for="username">Enter your username:</label>
      <div>
        <input type="text" name ="username" bind:value={username} required />
        {#if usernameTakenError}
        <p style="color: red;">Username is already taken.</p>
        {/if}
      </div>
      
      <label for="firstName">Enter your first name:</label>
      <input type="text" name="firstName" bind:value={firstName} required />
      <label for="lastName">Enter your last name:</label>
      <input type="text" name="lastName" bind:value={lastName} required />
      

      <label for="email">Enter your email:</label>
      <div>
      <input type="email" name="email" bind:value={email} required />
      {#if emailTakenError}
      <p style="color: red;">Email is already taken. Please use a different email address.</p>
      {/if}
     </div>


      <label for="birthday">Choose your birthday:</label>
      <input type="date" name="birthday" bind:value={birthday} required />


        <label for="password">Enter your password:</label>
      <input type="password" name="password" bind:value={password} required />
      <label for="confirmedPassword">Confirm your password:</label>
      <div>
      <input type="password" name="confirmedPassword" bind:value={confirmedPassword} required />
      {#if passwordMatchError}
      <p style="color: red;">Password does not match.</p>
      {/if}
      </div>
      

      <div class="pickPP">
        <div class="pickPP-label">
          <label for="profilePicture">Profile pictures:</label>
        </div>
      <div class="pickPP-image">
        <img src={images[currentImage]} alt="nextImage">
        <button on:click={toggleImage}>next</button>
      </div>
    </div>



      <button id="registerButton" type="submit" on:click={handleSignup} >Signup</button>
      <div class="login">
        <span class="signingin">Already have an account?
      
          <a href="/login" on:click={() => goto("/login")}>&#x1F64C Log in</a> 
          
        </span>
      </div>

    </form> -->
