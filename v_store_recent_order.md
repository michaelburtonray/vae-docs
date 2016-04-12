---
layout: docs
title: "<v:store:recent_order>"
---

# `<v:store:recent_order>`

Iterates over all items purchased in the most recent order by this
visitor.

Within this tag, the current context will be that of the cart item, with
the following additional fields available:

-   `discount` - discount amount

-   `discount_code` - discount code

-   `email` - customer E-Mail address

-   `order_id` - order ID

-   `payment_method` - payment method

-   `remote_addr` - customer IP address

-   `shipping` - shipping amount

-   `shipping_method` - shipping method

-   `tax` - tax amount

-   `tax_rate` - tax rate description

-   `total` - order total amount

-   `billing_name` - billing name

-   `billing_company` - billing company

-   `billing_address` - billing address

-   `billing_address_2` - billing address 2nd line

-   `billing_city` - billing city

-   `billing_state` - billing state

-   `billing_country` - billing country

-   `billing_phone` - billing phone

-   `shipping_name` - shipping name

-   `shipping_company` - shipping company

-   `shipping_address` - shipping address

-   `shipping_address_2` - shipping address 2nd line

-   `shipping_city` - shipping city

-   `shipping_state` - shipping state

-   `shipping_country` - shipping country

-   `shipping_phone` - shipping phone

-   `weight` - order weight (in the unit specified by your
    shipping carrier)

## Required Attributes

None.

## Optional Attributes

None.

## Sample Usage

{% highlight html %}
We got your order.  Here is the final set of information:
<v:store:recent_order>
 Order ID         : <v=id>
 Your E-Mail      : <v=email>
 Your IP          : <v=remote_addr>
 
 <v:if path="shipping">
  S&H             : <v=shipping>
   (<v=shipping_method>)
   (<v=weight> pounds)
 </v:if>
 <v:if path="tax">
  Tax             : <v=tax>
   (<v=tax_rate>)
 </v:if>
 <v:if path="discount">
  Discount        : (<v=discount>)
   (<v=discount_code>)
 </v:if>
 Total            : <v=total>
   (paid via <v=payment_method>)
 
 Billing Address  : <v=billing_name>
                    <v=billing_company>
                    <v=billing_address>
                    <v=billing_city>
                    <v=billing_state>
                    <v=billing_country>
                    <v=billing_zip>
                    <v=billing_phone>
                     
 Shipping Address : <v=shipping_name>
                    <v=shipping_company>
                    <v=shipping_address>
                    <v=shipping_address_2>
                    <v=shipping_city>
                    <v=shipping_state>
                    <v=shipping_zip>
                    <v=shipping_country>
                    <v=shipping_phone>
</v:store:recent_order>
{% endhighlight %}
