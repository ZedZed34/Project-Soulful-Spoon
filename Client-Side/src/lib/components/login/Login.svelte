<script>
    import { goto } from "$app/navigation";
    import { AUTH_URL } from "../../../lib/js/api-urls.js";
    import "$lib/css/login.css";  

    let username = "";
    let password = "";
    let error = false;
  
  
    /**
     * Handles logging in by sending a POST request to /api/auth, with the given username and password.
     *
     * If successful, redirect the user back to the homepage. Otherwise, display an error message.
     */
     async function handleSubmit() {
  error = false;
  
  try {
    const response = await fetch(AUTH_URL, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
      
    });

    if (!response.ok) {
      // If response is not okay (status code other than 2xx)
      
      if (response.status === 401) {
        // Unauthorized: Incorrect username or password
        error = true;
      } else {
        // Other server errors
        console.error("Server error:", response.statusText);
      }
    } else {
      // Successful login, redirect user to homepage
      goto("/", { invalidateAll: true, replaceState: true });
    }
  } catch (error) {
    console.error("Error while processing login:", error);
    error = true; // Set error flag for unexpected errors
  }
}
   
  </script>
  
  <!-- HTML for login page-->
  <div class="login-container">
    <!-- login image -->
    <div class="login-image">
      <!-- login form -->
      <div class="login-form">
        <!-- close button -->
        <button class="close-button" on:click={() => goto('/')}>X</button>
        <h2>Welcome Back!</h2>
        <form on:submit|preventDefault={handleSubmit}>
          <input type="username" bind:value={username} placeholder="Username" required />
          <input type="password" bind:value={password} placeholder="Password" required />
          <p class="forgot-password"><a href="#">Forgot Password? Get Help.</a></p>
          <button class="login-button" type="submit">Login</button>
          <div class="social-login">
            <p>Or Sign In With:</p>
            <div class="social-login-icons">
              <img src="/images/google.png" alt="Google" />
              <img src="/images/facebook.png" alt="Facebook" />
            </div>
          </div>
          <p class="signup">
            No Account? <a href="/signup">Get Started.</a>
          </p>
        </form>
      </div>
    </div>
  </div>
  
  <!-- <h1 id="loginHeader">Login</h1>
  
    <form id="login-container" on:submit|preventDefault={handleSubmit}>
    <label for="username">Username:</label>
    <input type="text" name="username" bind:value={username} required />
    <label for="password">Password:</label>
    <input type="password" name="password" bind:value={password} required />
    <button id="loginButton" type="submit">Login</button>
    {#if error}
      <span class="error">username or password not correct, please try again.</span>
    {/if}
    <div class="signup">
      <span class="signingup">Don't have an account?
        <a href="/signup" on:click={() => goto("/signup")}>&#x1F64C Sign up</a>
          </span>
      </div>
    </form> -->

  