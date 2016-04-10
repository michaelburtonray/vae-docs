---
layout: docs
title: "<v:country_select>"
---

# `<v:country_select>`

Outputs an HTML select input field (`<select>` tag) prepopulated with a
list of countries in the world as options.

When used in conjunction with other Vae tags that generate HTML forms,
the field will intelligently populate itself with a selected country if
data exists in the current working path that matches the path attribute
for this input. Additionally, [form validation](#vaeml_form_validation)
can be run on the client and server end.

When used in the same form as a `<v:state_select>` tag, this tag will
link itself to the `<v:state_select>` tag, automatically populating the
state select box with the list of states for the selected country. Or,
if the selected country does not have a defined list of states, the
state select box will transform into a standard text input box.

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

Since this tag generates an HTML `<select>` tag, you may also use any
standard HTML attributes that are valid in the `<select>` tag. These
will be passed through unchanged into the generated tag.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    <v:update>
      Where are you from?
      <v:country_select name="country" />
      <input type="submit" />
    </v:update>
