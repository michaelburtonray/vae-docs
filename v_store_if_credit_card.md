---
layout: docs
title: "&lt;v:store:if_credit_card&gt;"
---

# `<v:store:if_credit_card>`

Renders its contents only if currently selected payment method is Credit
Card.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](/v_else/) tag after this tag to specify
HTML to render if the currently selected method is not Credit Card.

## Sample Usage

{% highlight html %}
<v:store:if_credit_card>
 Please note: We take credit card fraud very seriously and manually inspect all orders.
</v:store:if_credit_card>
{% endhighlight %}
