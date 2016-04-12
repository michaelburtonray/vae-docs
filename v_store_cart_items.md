---
layout: docs
title: "&lt;v:store:cart:items&gt;"
---

# `<v:store:cart:items>`

Iterates over all items in the current customer's shopping cart and
renders the text and tags inside once for every cart item. You may nest
a `<v:divider>` tag inside this tag to specify a divider that will be
shown after a certain number of items.

Within this tag, the current context will be that of the cart item, with
the following additional fields available:

-   `cart_id` - cart item ID\#

-   `name` - item name

-   `option_id` - option ID

-   `option_value` - option value (size, color, etc)

-   `price` - unit price

-   `qty` - quantity in cart

-   `total` - total amount for quantity in cart

## Required Attributes

None.

## Optional Attributes

None.

## Sample Usage

{% highlight html %}
<v:store:cart:items>
 Name  : <v:text path="name" />
 Size  : <v:text path="option_value" />
 Qty   : <v:text path="qty" />
 Price : <v:store:item:price />
 Total : <v:store:item:price price_field="total" />
</v:store:cart:items>
{% endhighlight %}
