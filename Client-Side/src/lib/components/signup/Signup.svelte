<script>
    import { goto } from "$app/navigation";
    import { user } from "../../../lib/components/user.js";
    import { SIGNUP_URL } from "../../../lib/js/api-urls.js";
  
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
  let images = ["/src/lib/image/defaultPP-cat.png", "/src/lib/image/defaultPP-dog.png", "/src/lib/image/defaultPP-duck.png","/src/lib/image/defaultPP-hamster.png", "/src/lib/image/defaultPP-pig.png"];
  let currentImage = 0;

  function toggleImage() {
    currentImage = (currentImage + 1) % images.length; //setting default image
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
  <title>Register</title>
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

    </form>
