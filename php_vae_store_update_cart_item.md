---
layout: docs
title: # vae\_store\_update\_cart\_item()
---

# vae\_store\_update\_cart\_item()

The `vae_store_update_cart_item()` function adds an item to the user's
shopping cart.

## Usage

`vae_store_update_cart_item($cart_id, $data = array())`

-   `$cart_id` - cart ID of the item to update

-   `$data` - PHP associative array with data to update. The following
    keys are accepted: options are: `name`, `option_id`, `option_value`,
    `price`, `qty`, `total`, `weight_field`, but all options are
    accepted here. Be sure to make sure that `price`, `qty`, and `total`
    are synchronized, as Vae will not recompute these for you.

## Returns

Returns `false` on failure, otherwise returns `true`.

## Sample Usage

    <?php 
    // Set the price of all items in the cart to a random price between $2 and $5.
    $items = vae_store_cart_items();
    foreach ($items as $cart_id => $data) {
      $price = rand(2, 5);
      vae_store_update_cart_item($cart_id, array('price' => $price, 'total' => $data['qty'] * $price));
    }
    ?>
