---
layout: docs
title: "&lt;v:store:currency&gt;"
---

# `<v:store:currency>`

Renders the current display currency for your store, as set with the
`<v:store:currency_select>` tag.

This display currency is used in the `<v:store:item:price>` tag and any
other tag where the `currency` attribute is available and set.

## Required Attributes

None.

## Optional Attributes

None.

## Self-closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
Although we are displaying prices in <v:store:currency />, 
we will always charge your credit card in US Dollars.
{% endhighlight %}
