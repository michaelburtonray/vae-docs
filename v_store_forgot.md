---
layout: docs
title: "<v:store:forgot>"
---

# `<v:store:forgot>`

Outputs an HTML form (`<form>` tag) that will operate as a forgot
password form. The user may enter their E-Mail address and an E-Mail
will be generated and sent to them containing a new password that they
can use.

Unless you customize it, the E-Mail that will be sent looks like this:

    We received a request to reset your password.  

    Your password has been reset to: 
    NEW_PASSWORD

    Thanks,
    WEBSITE_NAME

## Required Attributes

None.

## Optional Attributes

-   `email_template` - if you would like to customize the E-Mails,
    provide here a path to the filename for the E-Mail template to use.
    You will need to create two files: one HTML and one plain text.
    Users who disable HTML on their email clients will see the plain
    text version, while everyone else will see the HTML email. For
    example, if you set `email_template="/forgot"`, then these files
    will be called `forgot.html` and `forgot.txt.html` and go in the
    root of your FTP. Inside these files you may include
    `<v:text placeholder="password" />` as a placeholder for where the
    new password will go.

-   `redirect` - if specified, users will be redirected to this page
    once the form is submitted.

Since this tag generates an HTML `<form>` tag, you may also use any
standard HTML attributes that are valid in the `<form>` tag. These will
be passed through unchanged into the generated tag.

## Sample Usage

    Forgot your password?  Enter your E-Mail address below and we will send you a new password:
    <v:store:forgot redirect="/myaccount">
     Your E-Mail Address: <v:text_field path="e_mail_address" />
     <input type="submit" />
    </v:users:forgot>
