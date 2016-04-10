---
layout: docs
title: # `<v:store:login>`{#v_store_login}
---

# `<v:store:login>`{#v_store_login}

Outputs an HTML form (`<form>` tag) that when submitted will log
customers into your website using the registration database maintained
in the [Customers tab](#backstage.customers). Customes can register
using the `<v:store:register>` tag.

## Required Attributes

None.

## Optional Attributes

-   `invalid` - message to display if the user enters invalid
    information and submits the form.

-   `redirect` - if specified, users will be redirected to this page
    once they have been logged in.

Since this tag generates an HTML `<form>` tag, you may also use any
standard HTML attributes that are valid in the `<form>` tag. These will
be passed through unchanged into the generated tag.

## Form Parameters

These are the request (POST) parameters that should be submitted with
the form:

-   `e_mail_address` - Customer's E-Mail Address.

-   `password` - Customer's Password.

## Sample Usage

    <v:store:login redirect="/account" invalid="Login information incorrect.">
     E-Mail Address: <v:text_field path="e_mail_address" />
     Password: <v:password_field path="password" />
    <input type="submit" value="Login" />
    </v:store:login>
