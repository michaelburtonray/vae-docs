---
layout: docs
title: "<v:store:if_check>"
---

# `<v:store:if_check>`

Renders its contents only if currently selected payment method is Check.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](/v_else/) tag after this tag to specify
HTML to render if the currently selected method is not Check.

## Sample Usage

    <v:store:if_check>
     Your order will not be processed until we receive your check.  
     We will give you further instructions once you complete the checkout process.
    </v:store:if_check>
