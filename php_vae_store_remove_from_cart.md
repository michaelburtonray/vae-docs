---
layout: docs
title: # vae\_store\_remove\_from\_cart()
---

# vae\_store\_remove\_from\_cart()

The `vae_store_remove_from_cart()` function retrieves all the items
currently in the visitor's shopping cart.

## Usage

`vae_store_remove_from_cart($cart_id)`

-   `$cart_id` - cart ID of the item to be removed.

## Returns

Returns `true`.

## Sample Usage

    <?php
    foreach (vae_store_cart_items() as $cart_id => $item) {
      if ($item['digital']) {
        vae_store_remove_from_cart($cart_id);    
      }
    }
    ?>
