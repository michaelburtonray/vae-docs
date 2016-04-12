---
layout: docs
title: "<v:divider>"
---

# `<v:divider>`

This tag is used to insert HTML code between or around the individual
entries in a tag that iterates over multiple entries (such as
[`<v:collection>`](/v_collection/)). There are 2 ways to use this tag. If
the tag contains a `<v:yield>` tag, the contents of this tag will wrap
each entry, with the `<v:yield>` tag denoting where the rendered HTML
from each entry will go. If this tag does not contain a `<v:divider>`
tag, the content between the `<v:divider>` and `</v:divider>` will be
inserted as a divider between entries.

By default the divider will appear after each item, but you can pass in
the `every` attribute to specify how often the divider should be
displayed.

This is useful for paginating or dividing collections into rows and
columns.

Note that you may include multiple `<v:divider>` within a collection tag
The individual `<v:divider>` tags may have different values for the
`every` attribute.

> **Warning**
>
> This tag only works inside of a tag that iterates over a number of
> entries, such as [`<v:collection>`](/v_collection/).

## Required Attributes

None.

## Optional Attributes

-   `every` - if set to a number *x*, the divider will be rendered after
    every *x* entries in the collection are rendered.

## Sample Usage - Simple

{% highlight html %}
<v:collection path="locations">
 <p><v:text path="name" /></p>
 <!-- insert a horizontal rule after every 5 location names -->
 <v:divider every="5">
  <hr />
 </v:divider>
</v:collection>
{% endhighlight %}

## Sample Usage - As a Wrapper

{% highlight html %}
<v:collection path="locations">
 <p><v:text path="name" /></p>
 <!-- wrap every location name in a div -->
 <v:divider >
  <div><yield /></div>
 </v:divider>
</v:collection>
{% endhighlight %}
