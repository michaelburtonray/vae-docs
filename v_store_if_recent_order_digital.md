---
layout: docs
title: # `<v:store:if_recent_order_digital>`{#v_store_if_recent_order_digital}
---

# `<v:store:if_recent_order_digital>`{#v_store_if_recent_order_digital}

Renders its contents only if the user's recent order contained digital
downloads.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if the recent order did not contain digital downloads.

## Sample Usage

    <v:store:if_recent_order_digital>
     Your recent order contained digital downloads.
     To claim them click here ...
    </v:store:if_recent_order_digital>
