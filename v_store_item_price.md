---
layout: docs
title: "<v:store:item:price>"
---

# `<v:store:item:price>`

Displays the price of an item, factoring in discounts that are applied
via the Vae Discounts tab or locally to the item by a discount
structure. If a [display currency](/v_store_currency_select/) has been
set, this tag will also convert the price to the display currency.

## Required Attributes

-   `price_field` - Name of structure in the current context that
    contains the item price. If this tag is nested inside a
    `<v:store:add_to_cart>` tag, you may omit this attribute if it is
    also provided in the `<v:store:add_to_cart>` tag.

## Optional Attributes

-   `before_discount` - if set to `true`, the price will be displayed
    before any discounts are applied.

-   `discount_class` - comma-separated list of the discount classes this
    item applies to. Usually this would be the item's ID as well as the
    ID of any categories that it belongs to. If this tag is nested
    inside a `<v:store:add_to_cart>` tag, you may omit this attribute if
    it is also provided in the `<v:store:add_to_cart>` tag.

-   `discount_field` - Name of structure in the current context that
    contains the item discount percentage. If this tag is nested inside
    a `<v:store:add_to_cart>` tag, you may omit this attribute if it is
    also provided in the `<v:store:add_to_cart>` tag.

## Sample Usage

    <v:store:add_to_cart discount_field="discount" name_field="name" price_field="price">
     <v:store:item:if_discount>
      Original Price: 
      <v:store:item:price before_discount="true" />
     </v:store:item:if_discount>
     Price:
     <v:store:item:price />
    </v:store:add_to_cart>
