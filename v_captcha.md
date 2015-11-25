# `<v:captcha>`{#v_captcha}

Renders a CAPTCHA using [reCAPTCHA](http://recaptcha.net/). Only useful
inside an HTML form. In order for the HTML form containing the CAPTCHA
to be processed, the user must correctly identify the text in the
rendered image. This tag may be used in any Vae form.

## Required Attributes

None.

## Optional Attributes

None.

## Sample Usage

This code would render a CAPTCHA to protect the comments entry from
spam.

    <v:create path="comments">
     ...
     <v:captcha />
     ...
    </v:create>
