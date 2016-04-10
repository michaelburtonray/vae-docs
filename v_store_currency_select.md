---
layout: docs
title: # `<v:store:currency_select>`{#v_store_currency_select}
---

# `<v:store:currency_select>`{#v_store_currency_select}

Outputs an HTML select input field (`<select>` tag) that when changed
will set the display currency for your store. It is prepopulated with a
list of available currencies as options, but these may be overridden by
passing in an `options` attribute. The current display currency will be
selected.

This tag will automatically refresh the current page `onchange` to
reload the current page in the new currency. It does not have to be
inside a form or have an associated submit button.

This display currency is used in the `<v:store:item:price>` tag and any
other tag where the `currency` attribute is available and set.

## Required Attributes

None.

## Optional Attributes

None.

Since this tag generates an HTML `<select>` tag, you may also use any
standard HTML attributes that are valid in the `<select>` or
`<v:select>` tags. These will be passed through unchanged into the
generated tag.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    Display prices in this currency: <v:store:currency_select />
