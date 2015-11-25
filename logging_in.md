# Logging In To Retrieve Saved Information

Let's first give an example of a "Sign In" page. In our shopping cart
example, we directed users to a Register page. If you are going to
implement user accounts, you will need to instead direct to a "Sign In"
page. A sign in page will most likely provide a couple of options: sign
into their account and retrieve their saved information, or continue
through the checkout process as a "Guest." Here is an example of the
markup for a page which accomplishes this. The main tag to notice is
Vae's [`<v:store:login>`](#v_store_login) tag, which handles all the
work of verifying a user's login information.

    <h3>Sign in with your E-Mail Address and Password:</h3>
    <v:store:login flash='login' redirect='/account'>
     <p>If you already have an account, sign in here.</p>
     <table>
     <tr>
      <td>Enter your E-Mail Address:</td>
      <td>
       <v:text_field path='e_mail_address'></v:text_field>
      </td>
     </tr>
     <tr>
      <td>Enter your Password:</td>
     <td>
      <v:password_field path='password'></v:password_field>
     </td>
     </tr>
     </table>
     <div class='buttons'>
      <a href='#submit'>Sign In</a>
     </div>
    </v:store:login>

    <h3>If you do not have an Account, you can create one:</h3>
     Welcome to this site.  Just click 'Register For an Account'.
     <a href='/register-front'>Register for an Account</a>

    <h3>Forgot Your Password?</h3>
     We can help.  Just click the button to the right.
     <a href='/forgot'>I Forgot My Password</a>

Creating [`<v:text_field>`](#v_text_field) tags with path values
`"password"` and `"e_mail_address"` is necessary to create a functional
login. Vae always keys off of the user's email address; there is no need
for them to remember a username.
