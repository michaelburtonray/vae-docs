---
layout: docs
title: "<v:store:shipping_methods_select>{#v_store_shipping_methods_select}"
---

# `<v:store:shipping_methods_select>`{#v_store_shipping_methods_select}

Outputs an HTML select input field (`<select>` tag) prepopulated with a
list of acceptable [shipping methods](#ecommerce.real_time_shipping) as
options. The current shipping method will be selected.

This tag will automatically refresh the current page `onchange`. It does
not have to be inside a form or have an associated submit button.

## Required Attributes

None.

## Optional Attributes

None.

Since this tag generates an HTML `<select>` tag, you may also use any
standard HTML attributes that are valid in the `<select>` tag. These
will be passed through unchanged into the generated tag.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    Current Shipping Method: <v:store:shipping_methods_select />
