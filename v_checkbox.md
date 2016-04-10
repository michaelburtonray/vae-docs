---
layout: docs
title: # `<v:checkbox>`{#v_checkbox}
---

# `<v:checkbox>`{#v_checkbox}

Outputs an HTML checkbox tag (`<input type="checkbox">` tag). When the
`path` attribute is set and this tag is used inside a `<v:collection>`
tag or any other tag that iterates over a group of entries, the ID of
the current element will be added onto the input name using array
brackets.

When used in conjunction with other Vae tags that generate HTML forms,
the field will intelligently populate itself with data if data exists in
the current working path that matches the path attribute for this input.
Additionally, [form validation](#vaeml_form_validation) can be run on
the client and server end.

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

    <v:update>
      Do you want to subscribe to our newsletter?
      <v:checkbox path="newsletter" />
      <input type="submit" />
    </v:update>
