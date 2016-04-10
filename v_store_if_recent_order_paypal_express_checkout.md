---
layout: docs
title: # `<v:store:if_recent_order_paypal_express_checkout>`{#v_store_if_recent_order_paypal_express_checkout}
---

# `<v:store:if_recent_order_paypal_express_checkout>`{#v_store_if_recent_order_paypal_express_checkout}

Renders its contents only if the payment method used for the most recent
order was PayPal Express Checkout.

This tag will not render its contents if the payment method is [PayPal
Website Payments Standard](#v_store_if_recent_order_paypal) or [PayPal
Website Payments Pro (Direct
Payment)](#v_store_if_recent_order_credit_card). This is because you may
want to provide different sets of instructions for each payment type.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if the method was not not PayPal Express Checkout.

## Sample Usage

    <v:store:if_recent_order_paypal_express_checkout>
     Please note: your order is being processed by PayPal.
     You will receive 2 receipts via E-Mail, one from us and one from PayPal.
    </v:store:if_recent_order_paypal_express_checkout>
