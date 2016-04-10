---
layout: docs
title: "<v:store:address_select>"
---

# `<v:store:address_select>`{#v_store_address_select}

Outputs an HTML select input field (`<select>` tag) prepopulated with a
list of the currently logged-in customer's stored addresses. When an
address is selected, the billing and shipping address associated with
the current session will be set to that address.

This tag will automatically refresh the current page `onchange`. It does
not have to be inside a form or have an associated submit button.

## Required Attributes

-   `type` - either `billing` or `shipping`, depending on which address
    type you want to select.

## Optional Attributes

None.

Since this tag generates an HTML `<select>` tag, you may also use any
standard HTML attributes that are valid in the `<select>` tag. These
will be passed through unchanged into the generated tag.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    <v:store:if_logged_in>
     Load a Saved Address: <v:store:address_select type="billing" />
    </v:store:if_logged_in>
