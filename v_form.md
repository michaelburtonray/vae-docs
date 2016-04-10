---
layout: docs
title: "<v:form>{#v_form}"
---

# `<v:form>`{#v_form}

Outputs an HTML form.

When used in conjunction with VaeML form tags, validation can be
performed on user input. Please see [VaeML Form Tag
Validations](#vaeml_form_validation) for more information.

## Required Attributes

-   None.

## Optional Attributes

-   `ajax` - If this attribute is specified, code will be generated to
    submit this form via AJAX. This attribute should be set to the ID of
    the `<div>` container into which Vae will load the form response. .

-   `akismet` - provide an [Akismet](http://akismet.com/) [API
    key](http://akismet.com/personal/) here to have the submission
    filtered by Akismet.

-   `akismet_comment_field` - if using Akismet filtering, provide the
    name of the structure that corresponds to the actual
    comment/post text.

-   `akismet_email_field` - if using Akismet filtering, provide the name
    of the structure that corresponds to the E-Mail address of
    the commenter/poster.

-   `akismet_name_field` - if using Akismet filtering, provide the name
    of the structure that corresponds to the name of
    the commenter/poster.

-   `akismet_url_field` - if using Akismet filtering, provide the name
    of the structure that corresponds to the URL of
    the commenter/poster.

-   `flash` - name of the [flash bucket](#v_flash) to store error
    messages in. You can name your flash buckets to put different types
    of messages in different places. Just pass that name here and in the
    `flash` attribute of the `<v:flash>` tag you are using to display
    error messages.

-   `validateinline` - if set to `true`, validation on the enclosed form
    elements will be performed on the client side using JavaScript and
    error messages will be displayed inline.

Since this tag generates an HTML `<form>` tag, you may also use any
standard HTML attributes that are valid in the `<form>` tag. These will
be passed through unchanged into the generated tag.

> **Warning**
>
> `<v:form>` is rarely used directly. It exists primarily because it is
> the foundation upon which any other tag that submits back to the
> server (such as `<v:formmail>` is built.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    <h1>Join Us</h1>
    <v:form action="/signup.php" ajax="signupArea">
      Your Name: <v:text_field name="Name" />
      <input type="submit" />
    </v:form>
