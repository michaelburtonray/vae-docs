---
layout: docs
title: "<v:hidden_field>{#v_hidden_field}"
---

# `<v:hidden_field>`{#v_hidden_field}

Outputs an HTML hidden input field (`<input type="hidden">` tag).

When used in conjunction with other Vae tags that generate HTML forms,
the field will intelligently populate itself with data if data exists in
the current working path that matches the `path` attribute for this
input.

## Required Attributes

-   `path` - the path to the Vae item this input pertains to. Uses
    [VaeQL](#vaeql) syntax. If provided, the `name` parameter will be
    set to this as well, and the value will be retrieved from this path.

OR:

-   `name` - request parameter name that the input value will be
    assigned to.

## Optional Attributes

-   None.

Since this tag generates an HTML `<input>` tag, you may also use any
standard HTML attributes that are valid in the `<input>` tag. These will
be passed through unchanged into the generated tag.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    <v:formmail to="test@domain.org">
      <v:hidden_field name="from" value="Contact Page" />
      <input type="submit" />
    </v:formmail>
