---
layout: docs
title: "<v:store:if_discount>"
---

# `<v:store:if_discount>`

Renders its contents only if the user has entered a valid discount code
and is receiving a discount.

## Required Attributes

None.

## Optional Attributes

-   `custom` - if specified, this tag will render its contents if and
    only if the current discount code's `custom` field matches the
    value provided. This is useful for providing copy or instructions
    related to certain types of discounts.

You may provide a [`<v:else>`](/v_else/) tag after this tag to specify
HTML to render if the user is not receiving a discount.

## Sample Usage

    <v:store:if_discount>
     Your discount code has been applied.  The total has been updated to reflect the discount.
    </v:store:if_discount>
