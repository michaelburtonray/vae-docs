---
layout: docs
title: "<v:store:if_shippable>"
---

# `<v:store:if_shippable>`

Renders its contents only if the order contains items that would be
shipped (i.e. not digital items).

## Required Attributes

None.

## Optional Attributes

You may provide a [`<v:else>`](/v_else/) tag after this tag to specify
HTML to to render if the order will not be shipped.

## Sample Usage

{% highlight html %}
<v:store:if_shippable>
 We support the following shipping methods ...
</v:store:if_shippable>
<v:else>
 Your order is digital only, no shipping will occur.
</v:else>
{% endhighlight %}
