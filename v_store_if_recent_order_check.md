---
layout: docs
title: "<v:store:if_recent_order_check>"
---

# `<v:store:if_recent_order_check>`

Renders its contents only if the payment method used for the most recent
order was Check.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](/v_else/) tag after this tag to specify
HTML to render if the method was not not Check.

## Sample Usage

    <v:store:if_recent_order_check>
     Your order will not be processed until we receive your check.  
     Please mail your check to: 123 Main Street, Anytown, USA.
    </v:store:if_recent_order_check>
