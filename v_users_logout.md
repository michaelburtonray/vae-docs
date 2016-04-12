---
layout: docs
title: "<v:users:logout>"
---

# `<v:users:logout>`

Outputs an HTML link (`<a>` tag) that will log the user out when clicked
on by the user.

## Required Attributes

None.

## Optional Attributes

-   `redirect` - if specified, the user will be redirected to this page
    after logging out.

Since this tag generates an HTML `<a>` tag, you may also use any
standard HTML attributes that are valid in the `<a>` tag. These will be
passed through unchanged into the generated tag.

Everything between the opening and closing tag is used as the body of
the link (it will go between the opening and closing `<a>` tags that are
generated).

## Sample Usage

{% highlight html %}
<v:users:logout redirect="/index.html">Click here to logout.</v:users:logout>
{% endhighlight %}
