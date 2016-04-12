---
layout: docs
title: "&lt;v:store:google_checkout&gt;"
---

# `<v:store:google_checkout>`

Displays a button that when clicked will launch the Google Checkout
flow. Usually displayed on the Shopping Cart page, below the standard
Checkout button.

## Required Attributes

None.

## Optional Attributes

-   `email_confirmation` - path to the [HTML template to use for the
    confirmation E-Mail sent to the
    customer](/customizing_order_emails/).

-   `email_received` - path to the [HTML template to use for the order
    received E-Mail sent to the merchant](/customizing_order_emails/).

-   `email_shipping` - path to the [HTML template to use for the order
    shipped E-Mail sent to the customer](/customizing_order_emails/).

## Self-closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
<v:store:google_checkout />
{% endhighlight %}
