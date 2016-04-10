---
layout: docs
title: # `<v:store:paypal_checkout>`{#v_store_paypal_checkout}
---

# `<v:store:paypal_checkout>`{#v_store_paypal_checkout}

Displays a button that when clicked will launch the PayPal Website
Payments Standard checkout flow without going through a registration and
confirmation page hosted on Vae. Usually displayed on the Shopping Cart
page, in place of standard Checkout button.

Integrating with PayPal in this manner will bypass access to shipping,
tax, and discount codes that are set on Vae. You can set up shipping and
tax calculations in PayPal directly using this method. Alternatively,
you can use a standard cart, registration, and checkout page on Vae and
still have customers pay using PayPal standard as the final step.

## Required Attributes

None.

## Optional Attributes

-   `redirect` - users will be redirected to this page once they
    complete the PayPal checkout process.

-   `src` - image to use for the button.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    <v:store:paypal_checkout />
