---
layout: docs
title: "&lt;v:store:if_digital_downloads&gt;"
---

# `<v:store:if_digital_downloads>`

Renders its contents only if there are digital download items in the
shopping cart.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](/v_else/) tag after this tag to specify
HTML to render if there are no digital download items in the shopping
cart.

## Sample Usage

{% highlight html %}
<v:store:if_digital_downloads>
 Your downloads will be made available once you complete the checkout process.
</v:store:if_digital_downloads>
{% endhighlight %}
