---
layout: docs
title: "<v:users:register>{#v_users_register}"
---

# `<v:users:register>`{#v_users_register}

Outputs an HTML form (`<form>` tag) that when submitted will register
users for your website by adding their information to a Vae collection.
This is commonly used for building members-only areas.

You may use the [form validation tools](#vaeml_form_validation) provided
by the Vae form tags to make certain fields required.

## Required Attributes

-   `path` - the path to the Vae collection that holds your users. Uses
    [VaeQL](#vaeql) syntax.

## Optional Attributes

-   `redirect` - if specified, users will be redirected to this page
    once they have registered.

## Sample Usage

    Register for our website:
    <v:users:register path="users" redirect="/welcome">
     Choose a username: <v:text_field path="username" />
     Choose a password: <v:password_field path="password" />
     Confirm password: <v:password_field path="confirm_password" />
     <input type="submit" value="Register" />
    </v:users:register>
