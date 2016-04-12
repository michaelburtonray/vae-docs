---
layout: docs
title: "<v:store:cart:shipping>"
---

# `<v:store:cart:shipping>`

Renders the shipping amount for the currently selected shipping method.

## Required Attributes

None.

## Optional Attributes

-   `currency` - if set to `true`, the amount will be displayed in the
    [currently selected currency](/v_store_currency_select/). If omitted,
    the amount will be displayed in the site's operating currency.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    The shipping cost for this order will be $<v:store:cart:shipping />.
