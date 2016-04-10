---
layout: docs
title: "<v:store:if_tax>{#v_store_if_tax}"
---

# `<v:store:if_tax>`{#v_store_if_tax}

Renders its contents only if there is tax due for the current
cart/shipping address.

## Required Attributes

None.

## Optional Attributes

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if there is no tax due.

## Sample Usage

    <v:store:if_tax>
     Tax due: $<v:store:cart:tax />
    </v:store:if_tax>
