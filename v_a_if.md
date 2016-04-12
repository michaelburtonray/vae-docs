---
layout: docs
title: "<v:a_if>"
---

# `<v:a_if>`

Outputs its contents either as an HTML link (`<a>` tag) or without a
link, depending on whether the path specified in the `path=` attribute
contains data. If called from within a [`<v:collection>`](/v_collection/)
block, it will automatically append information about which item in the
collection was clicked to the query string just like the `<v:a>` tag.

## Required Attributes

-   `href` - link `href`. This will become the href attribute of the
    generated `<a>` tag.

-   `path` - path to check for data. Uses VaeQL syntax.

## Optional Attributes

You may use any attributes that are accepted by the `<v:a>` tag.

## Sample Usage

Assume that our `locations` collection has 2 entries: New York and
London. Only New York has the checkbox `show_more_information` set.
Then, this code:

{% highlight html %}
<v:collection path="locations">
 <p>
  <v:a_if path="show_more_information" href="/location" />
   <v:text path="name" />
  </v:a_if>
 </p>
</v:collection>
{% endhighlight %}

Might render:

{% highlight html %}
<p>
 <a href="/location/1-new-york">New York</a>
</p>
<p>
 London
</p>
{% endhighlight %}
