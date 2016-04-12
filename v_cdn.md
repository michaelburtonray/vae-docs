---
layout: docs
title: "&lt;v:cdn&gt;"
---

# `<v:cdn>`

Outputs either the base CDN URL for your website (if called with no
attributes) or the CDN URL for a specific asset on your website (if
called with an attribute).

## Required Attributes

-   None.

## Optional Attributes

-   `src` - path to the asset you'd like to host on the CDN.

-   `href` - alias for `src`.

## Self Closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
<img src="<v:cdn src="/images/my_image.jpg" />" />
{% endhighlight %}
