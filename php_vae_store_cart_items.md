---
layout: docs
title: # vae\_store\_cart\_items()
---

# vae\_store\_cart\_items() {#php_vae_store_cart_items}

The `vae_store_cart_items()` function retrieves all the items currently
in the visitor's shopping cart.

## Usage

`vae_store_cart_items()`

## Returns

Returns an array containing all the items currently in the visitor's
shopping cart.

## Sample Usage

    <?php
    // Remove all digital items from the cart
    foreach (vae_store_cart_items() as $cart_id => $item) {
      if ($item['digital']) {
        vae_store_remove_from_cart($cart_id);    
      }
    }
    ?>
