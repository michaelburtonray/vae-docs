---
layout: docs
title: "<v:store:if_recent_order_credit_card>"
---

# `<v:store:if_recent_order_credit_card>`

Renders its contents only if the payment method used for the most recent
order was Credit Card.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if the method was not not Credit Card.

## Sample Usage

    <v:store:if_recent_order_credit_card>
     Please note: We take credit card fraud very seriously and manually inspect all orders.
    </v:store:if_recent_order_credit_card>
