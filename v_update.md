---
layout: docs
title: "<v:update>"
---

# `<v:update>`

Outputs an HTML form (`<form>` tag) that when submitted will update an
entry stored in Vae. This is commonly used for building CMS
functionality directly into your website, such as the ability for users
to change passwords or edit content.

## Required Attributes

-   `path` - the path to the Vae entry being modified. Uses
    [VaeQL](/vaeql/) syntax.

## Optional Attributes

-   `redirect` - if specified, users will be redirected to this page
    once the update form is submitted.

-   You may use any attributes that are accepted by the
    [`<v:form>`](/v_form/) tag.

## Sample Usage

This will render a form that allows the currently logged in user to
change their password:

    <v:update path="loggedin()" redirect="/account">
     Set a new password : <v:password_field path="password" />
     Confirm password   : <v:password_field path="confirm_password" />
     <input type="submit" />
    </v:update>
