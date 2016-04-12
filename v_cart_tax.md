---
layout: docs
title: "<v:store:cart:tax>"
---

# `<v:store:cart:tax>`

Renders the tax amount due for the current shopping cart.

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
Tax due: $<v:store:cart:tax />.
{% endhighlight %}
