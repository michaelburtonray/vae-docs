---
layout: docs
title: "<v:store:if_recent_order_money_order>"
---

# `<v:store:if_recent_order_money_order>`

Renders its contents only if the payment method used for the most recent
order was Money Order.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if the method was not not Money Order.

## Sample Usage

    <v:store:if_recent_order_money_order>
     Your order will not be processed until we receive your money order.  
     Please mail your money order to: 123 Main Street, Anytown, USA.
    </v:store:if_recent_order_money_order>
