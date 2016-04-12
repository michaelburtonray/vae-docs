---
layout: docs
title: "<v:set_default>"
---

# `<v:set_default>`

Sets a request parameter's default value – the value that will be used
in all other VaeML tags where that request parameter is referred. If the
request parameter is already set, this tag will not do anything.

## Required Attributes

-   `name` - request parameter name.

-   `value` - default value to set.

## Optional Attributes

None.

## Self Closed

This tag is usually self-closed.

## Sample Usage

This will output the text in the `name` structure of the entry with the
ID passed in via the request parameter `id`. If that parameter is not
provided, it will output the text in the `name` structure of the item
with ID `75`:

{% highlight html %}
<v:set_default name="id" value="75" />
<v:text path="$id/name" />
{% endhighlight %}
