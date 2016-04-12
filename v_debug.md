---
layout: docs
title: "<v:debug>"
---

# `<v:debug>`

Helps you debug your code by outputting all data in the current context.
If you put it at top-level, it will give you all of your data. Inside a
[`<v:collection>`](/v_collection/) or [`<v:section>`](/v_section/) tag, it
will give you the data currently available to you.

## Required Attributes

None.

## Optional Attributes

None.

## Self-closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
<v:collection path="artists">
 <!-- display the information in the current artist entry -->
 <v:debug />
</v:collection>
{% endhighlight %}
