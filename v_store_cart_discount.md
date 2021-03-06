---
layout: docs
title: "&lt;v:store:cart:discount&gt;"
---

# `<v:store:cart:discount>`

Renders the amount of any currently activated discounts.

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
Your coupon codes saved you $<v:store:cart:discount />.
{% endhighlight %}
