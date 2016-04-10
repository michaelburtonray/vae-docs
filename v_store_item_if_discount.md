---
layout: docs
title: # `<v:store:item:if_discount>`{#v_store_item_if_discount}
---

# `<v:store:item:if_discount>`{#v_store_item_if_discount}

Renders its contents only if the item in the current context is
discounted, either via discounts that are applied via the Vae Discounts
tab or locally to the item by a discount structure.

## Required Attributes

-   `discount_class` - comma-separated list of the discount classes this
    item applies to. Usually this would be the item's ID as well as the
    ID of any categories that it belongs to. If this tag is nested
    inside a `<v:store:add_to_cart>` tag, you may omit this attribute if
    it is also provided in the `<v:store:add_to_cart>` tag.

-   `discount_field` - Name of structure in the current context that
    contains the item discount percentage. If this tag is nested inside
    a `<v:store:add_to_cart>` tag, you may omit this attribute if it is
    also provided in the `<v:store:add_to_cart>` tag.

## Optional Attributes

None.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if the user has not elected to display the prices on the
site in a different currency.

## Sample Usage

    <v:store:add_to_cart discount_field="discount" name_field="name" price_field="price">
     <v:store:item:if_discount>
      Original Price: 
      <v:store:item:price before_discount="true" />
     </v:store:item:if_discount>
     Price:
     <v:store:item:price />
    </v:store:add_to_cart>
