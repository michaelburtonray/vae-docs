---
layout: docs
title: "<v:store:user>"
---

# `<v:store:user>`

Renders the text and tags inside with the context set to the information
collected about the current store customer.

Use the `<v:debug>` tag to see what information is available.

## Required Attributes

None.

## Optional Attributes

None.

## Sample Usage

{% highlight html %}
<v:store:user>
 Please review your shipping information:
 Name: <v:text path="shipping_name" /><br />
 Address: <v:text path="shipping_address" /><v:text path="shipping_address_2" /><br />
 City: <v:text path="shipping_city" /><br />
 State: <v:text path="shipping_state" /><br />
 ZIP: <v:text path="shipping_zip" /><br />
</v:store:user>
{% endhighlight %}
