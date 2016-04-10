---
layout: docs
title: "<v:password_field>"
---

# `<v:password_field>`{#v_password_field}

Outputs an HTML password input field (`<input type="password">` tag).
When used in conjunction with other Vae tags that generate HTML forms,
[form validation](#vaeml_form_validation) can be run on the client and
server end.

## Required Attributes

-   `path` - the path to the Vae item this input pertains to. Uses
    [VaeQL](#vaeql) syntax. If provided, the `name` parameter will be
    set to this as well, and the value will be retrieved from this path.

OR:

-   `name` - request parameter name that the input value will be
    assigned to.

## Optional Attributes

-   `required` - if set and used in conjunction with a Vae form tag that
    generates an HTML form, validation will be performed on this field.
    Please see the [Validating Forms](#vaeml_form_validation) page for
    more information.

Since this tag generates an HTML `<input>` tag, you may also use any
standard HTML attributes that are valid in the `<input>` tag. These will
be passed through unchanged into the generated tag.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    <v:users:login>
      Enter your E-Mail address: <v:text_field name="email" />
      Enter your password: <v:password_field name="password" />
      <input type="submit" />
    </v:users:login>
