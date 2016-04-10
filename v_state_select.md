---
layout: docs
title: "<v:state_select>{#v_state_select}"
---

# `<v:state_select>`{#v_state_select}

Outputs an HTML select input field (`<select>` tag) prepopulated with a
list of states in the United States or Canada as options and a hidden
text input field (`<input type="text">` tag) that will be toggled on if
the user selects a country that is not the United States or Canada. This
allows visitors from foreign countries to input their state manually.

We determine the name of the associated `<v:country_select>` tag by
taking the name of this tag and replacing the word `state` with
`country`. For example if you had a `<v:state_select>` with name
`billing_state`, it would link to the `<v:country_select>` tag called
`billing_country`.

When used in conjunction with other Vae tags that generate HTML forms,
the field will intelligently populate itself with a selected state if
data exists in the current working path that matches the path attribute
for this input. Additionally, [form validation](#vaeml_form_validation)
can be run on the client and server end.

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

    <v:formmail to="test@domain.org">
      Which state are you from?
      <v:state_select name="from_state" />
      <v:country_select name="from_country" />
      <input type="submit" />
    </v:formmail>
