---
layout: docs
title: # `<v:users:forgot>`{#v_users_forgot}
---

# `<v:users:forgot>`{#v_users_forgot}

Outputs an HTML form (`<form>` tag) that will operate as a forgot
password form. The user may enter their username, email address, or
whatever other identifier you use to identify users and an E-Mail will
be generated and sent to them containing a link that will let them log
in directly (so they can reset their password).

The E-Mail that will be sent looks like this:

    You are receiving this E-Mail because a request was submitted to reset your 
    password for CURRENT_DOMAIN.  If you submitted this request, please go to the 
    following URL to login and reset your password:

    http://CURRENT_DOMAIN/RECOVERY_URL

    Thanks,
    CURRENT_DOMAIN Password Recovery

## Required Attributes

-   `path` - the path to the Vae collection that holds the information
    about your users. Uses [VaeQL](#vaeql) syntax.

-   `required` - comma-delimited list of fields that are required to
    match a user. For example if you wanted to allow them to enter their
    username in this box, this field should be `username`. If you want
    them to have to enter their username and E-Mail address, its value
    might be `username,e_mail_address`.

-   `email_field` - name of the structure on the users collection that
    contains the users E-Mail address. This is how Vae knows where to
    send the password recovery E-Mail.

## Optional Attributes

-   `redirect` - if specified, users will be redirected to this page
    once the form is submitted.

Since this tag generates an HTML `<form>` tag, you may also use any
standard HTML attributes that are valid in the `<form>` tag. These will
be passed through unchanged into the generated tag.

## Sample Usage

    <p>Forgot your password?  Enter your E-Mail address below to reset it:</p>
    <v:users:forgot email_field="email" path="users" redirect="myaccount.html" required="email">
      <p>Your E-Mail Address: <v:text_field path="email" /></p>
      <input type="submit" />
    </v:users:forgot>
