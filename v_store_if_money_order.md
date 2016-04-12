---
layout: docs
title: "<v:store:if_money_order>"
---

# `<v:store:if_money_order>`

Renders its contents only if currently selected payment method is Money
Order.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](/v_else/) tag after this tag to specify
HTML to render if the currently selected method is not Money Order.

## Sample Usage

{% highlight html %}
<v:store:if_money_order>
 Your order will not be processed until we receive your Money Order.  
 We will give you further instructions once you complete the checkout process.
 </v:store:if_money_order>
{% endhighlight %}
