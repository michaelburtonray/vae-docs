---
layout: docs
title: "&lt;v:else&gt;"
---

# `<v:else>`

When a [`<v:if`](/v_if/)&gt; tag or other tag that provides conditional
branching contains a `<v:else>` tag, the content of the `<v:else>` will
be rendered if the if condition is false.

## Required Attributes

None.

## Optional Attributes

None.

## Sample Usage

This code will render the word Meters if the `display_in_metric`
checkbox is set and the word Feet otherwise.

{% highlight html %}
<v:if path="display_in_metric">
 Meters
</v:if>
<v:else>
 Feet
</v:else>
{% endhighlight %}
