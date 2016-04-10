---
layout: docs
title: "<v:store:paypal_express_checkout>"
---

# `<v:store:paypal_express_checkout>`

Displays a button that when clicked will launch the PayPal Express
Checkout flow. Usually displayed on the Shopping Cart page, below the
standard Checkout button.

## Required Attributes

None.

## Optional Attributes

-   `redirect` - users will be redirected to this page once they
    complete the PayPal login and confirmation process. This would
    usually be the URL of the checkout confirmation page containg
    `<v:store:checkout>`.

-   `src` - image to use for the button.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    <v:store:paypal_express_checkout redirect="/checkout" />
