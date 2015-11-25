# `<v:store:cart:total>`{#v_store_cart_total}

Renders the total for the current shopping cart including shipping,
discounts, and tax.

## Required Attributes

None.

## Optional Attributes

-   `currency` - if set to `true`, the amount will be displayed in the
    [currently selected currency](#v_store_currency_select). If omitted,
    the amount will be displayed in the site's operating currency.

### Self-closed

This tag is usually self-closed.

## Sample Usage

    Your total including shipping, tax, and discounts for all the items in this cart is $<v:store:cart:total />.
