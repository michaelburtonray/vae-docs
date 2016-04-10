---
layout: docs
title: "<v:formmail>"
---

# `<v:formmail>`{#v_formmail}

Creates a HTML form that will send an E-Mail when the form is submitted.
The E-Mail will contain all of the information posted to the form. The
`<v:formmail>` will take the place of a `<form>` tag in your HTML.
Inside the opening and closing `<v:formmail>` tags, you should put at
least one [`<v:text_field>`](#v_text_field) or
[`<v:text_area>`](#v_text_area) tag and a submit button.

## Required Attributes

-   `to` - the E-Mail address where the form data will be sent to
    upon submission.

## Optional Attributes

-   `email_template` - if you would like to customize the E-Mails that
    are received, provide here a path to the filename for the E-Mail
    template to use. You will need to create two files: one HTML and one
    plain text. Users who disable HTML on their email clients will see
    the plain text version, while everyone else will see the HTML email.
    For example, if you set `email_template="/formtemplate"`, then these
    files will be called `formtemplate.html` and `formtemplate.txt.html`
    and go in the root of your FTP. Inside these files you may include
    `<v:yield />` as a placeholder for where the form data will go.

-   `from` - if specified, we will make the E-Mail that is sent come
    from this address.

-   `from_field` - if specified, we will make the E-Mail that is sent
    come from the address specified in this form field. Good for making
    the E-Mail look like it came from the person who sent the form.

-   `newsletter` - supply a [newsletter
    code](#backstage.newsletter.list) here and the user will
    automatically be subscribed to that newsletter when submitting
    the form. This assumes that the form asks for the user's E-Mail
    address in the parameter named `e_mail_address`. To change this, set
    the `newsletter_email_field` attribute.

-   `newsletter_confirm` - if specified, the user will only be
    subscribed to the newsletter specified in the newsletter code if
    this request variable is passed on. This is usually used to make a
    checkbox that the user can check to opt-in.

-   `newsletter_email_field` - if specified, we will look for the user's
    E-Mail address in the parameter with this name.

-   `redirect` - URL for a webpage where the user will be redirected
    after submitting the form. Usually used to display a thank-you page.
    If the `ajax` attribute is set, this URL will be loaded into the
    specified `<div>` container.

-   You may use any attributes that are accepted by the
    [`<v:form>`](#v_form) tag.

If you want to build a form that is E-Mailed to different addresses
based on the selection of a radio button or select box, simply name that
radio button or select box `__v:to` and have it contain the E-Mail
address that the form should be mailed to. This will override the `to`
attribute.

## Sample Usage

    <h1>Contact Us</h1>
    <v:formmail to="you@yourdomain.com" redirect="thanks.html">
     Your Name: <v:text_field name="Name" />
     Your Comments: <v:text_area name="Comments" />
     <input type="submit" />
    </v:formmail>
