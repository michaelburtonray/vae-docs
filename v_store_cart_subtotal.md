---
layout: docs
title: "&lt;v:store:cart:subtotal&gt;"
---

# `<v:store:cart:subtotal>`

Renders the subtotal for the current shopping cart.

## Required Attributes

None.

## Optional Attributes

-   `currency` - if set to `true`, the amount will be displayed in the
    [currently selected currency](/v_store_currency_select/). If omitted,
    the amount will be displayed in the site's operating currency.

## Self-closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
Your subtotal for all the items in this cart is $<v:store:cart:subtotal />.
{% endhighlight %}
