---
layout: docs
title: "<v:store:if_bank_transfer>"
---

# `<v:store:if_bank_transfer>`

Renders its contents only if currently selected payment method is Bank
Transfer.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](/v_else/) tag after this tag to specify
HTML to render if the currently selected method is not Bank Transfer.

## Sample Usage

    <v:store:if_bank_transfer>
     Your order will not be processed until we receive your bank transfer.  
     We will give you further instructions once you complete the checkout process.
    </v:store:if_bank_transfer>
