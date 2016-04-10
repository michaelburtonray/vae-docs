---
layout: docs
title: # `<v:newsletter>`{#v_newsletter}
---

# `<v:newsletter>`{#v_newsletter}

Creates a HTML form to subscribe a visitor to one of your Vae
[newsletter lists](#backstage.newsletter.list).

Inside the opening and closing `<v:newsletter>` tags, you should put a
`<v:text_field path="e_mail_address" />`.

## Required Attributes

-   `code` - code for the [newsletter list](#backstage.newsletter.list)
    to send the submission to.

## Optional Attributes

-   `redirect` - URL for a webpage where the user will be redirected
    after submitting the form. Usually used to display a thank-you page.
    If the `ajax` attribute is set, this URL will be loaded into the
    specified `<div>` container.

You may use any attributes that are accepted by the
[`<v:form>`](#v_form) tag.

## Sample Usage

    <v:newsletter code="12345678" redirect="thanks.html">
     Your E-Mail Address: <v:text_field path="e_mail_address" />
     <input type="submit" />
    </v:newsletter>
