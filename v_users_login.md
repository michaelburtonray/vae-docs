---
layout: docs
title: # `<v:users:login>`{#v_users_login}
---

# `<v:users:login>`{#v_users_login}

Outputs an HTML form (`<form>` tag) that when submitted will log users
into your website. This is commonly used for building members-only
areas.

## Required Attributes

-   `path` - the path to the Vae collection that holds your users. Uses
    [VaeQL](#vaeql) syntax.

-   `required` - comma-delimited list of fields that are required to
    match a user. For example if you wanted to allow them to enter their
    username and password in this box, this field should be
    `username,password`. If you want them to have to enter their
    username and E-Mail address, its value might be
    `username,e_mail_address`.

## Optional Attributes

-   `invalid` - message to display if the user enters invalid
    information and submits the form.

-   `redirect` - if specified, users will be redirected to this page
    once they have been logged in.

Since this tag generates an HTML `<form>` tag, you may also use any
standard HTML attributes that are valid in the `<form>` tag. These will
be passed through unchanged into the generated tag.

## Sample Usage

    <v:users:login path="users" redirect-"membersonly.html" required="username,password" invalid="Login information incorrect.">
     Username: <v:text_field path="username" />
     Password: <v:password_field path="password" />
     <input type="submit" value="Login" />
    </v:users:login>
