---
layout: docs
title: # Saving Registration Data
---

# Saving Registration Data

Notice at the bottom of our example markup in the previous section,
we've provided an option for unregistered users to create an account.
The Register For An Account link points the user to an account
registration page, where they can sign up. This page uses the
[`<v:store:register>`](#v_store_register) tag and redirects to an
account management page upon user submission. Here is some example
markup:

    <h2>Register for an Account </h2>
    <v:store:register redirect="/account">
     <h3>Billing Information </h3>
     <table>
     <tr>
      <td>Name: </td>
      <td>
       <v:text_field path="billing_name" required="name" />
      </td>
     </tr>
       <tr>
       <td>Company:</td>
       <td><v:text_field path="billing_company" /></td>
     </tr>
     <tr>
      <td>Address:</td>
      <td>
       <v:text_field path="billing_address" required="true" />
      </td>
     </tr>
     <tr>
      <td>Address 2:</td>
      <td><v:text_field path="billing_address_2" /></td>
     </tr>
      <tr>
       <td>Country:</td>
       <td><v:country_select path="billing_country" default="US" required="true" /></td>
      </tr>
      <tr>
       <td>City:</td>
       <td><v:text_field path="billing_city" required="true" /></td>
      </tr>
     <tr>
      <td>Province/State:</td>
      <td>
       <v:state_select path="billing_state" required="uscanada" />
      </td>
     </tr>
      <tr>
      <td>Postal Code: </td>
      <td>
       <v:text_field path="billing_zip" required="uscanada" />
      </td>
     </tr>
     <tr>
      <td>
       Phone: 
      </td>
      <v:text_field path="billing_phone" required="true" />
     </tr>
     <tr>
      <td>E-Mail Address: </td>
      <td>
       <v:text_field path="e_mail_address" required="email" />
      </td>
     </tr>
      <tr>
       <td>Confirm E-Mail Address: </td>
       <td>
       <v:text_field path="confirm_e_mail_address" required="email" />
      </tr>
      <tr>
       <td>Choose a Password:</td>
       <td><v:password_field path="password" required="true" /></td>
      </tr>
      <tr><td>Confirm Password:</td>
       <td><v:password_field path="confirm_password" required="true" /></td>
      </tr>
     </table>
     <h3>Shipping Information </h3>
     <a href="#same_as_billing">Same as billing? </a>
     <table>
      <tr>
       <td>Name:</td>
       <td><v:text_field path="shipping_name" required="true" /></td>
      </tr>
      <tr>
       <td>Company:</td>
       <td>
        <v:text_field path="shipping_company" />
       </td>
      </tr>
      <tr>
       <td>Address</td>
       <td>
        <v:text_field path="shipping_address" required="true" />
       </td>
      </tr>
      <tr>
       <td>Address 2: </td>
       <td><v:text_field path="shipping_address_2" /></td>
      </tr>
      <tr>
       <td>Country:</td>
       <td><v:country_select path="shipping_country" default="US" required="true" /></td>
      </tr>
      <tr>
       <td>City:</td>
       <td><v:text_field path="shipping_city" required="true" /></td>
      </tr>
      <tr>
       <td>Province/State:</td>
       <td><v:state_select path="shipping_state" required="uscanada" /></td>
     </tr>
     <tr>
       <td>Postal Code: </td>
        <td>
        <v:text_field path="shipping_zip" required="uscanada" />
      </td>
     </tr>
     <tr>
      <td>Phone:</td>
      <td><v:text_field path="shipping_phone" required="true" /></td>
      </tr>
     </table>
     <div id="buttons"><input type="submit value="Register for an Account" /></a></div>
    </v:store:register>
