---
layout: docs
title: vae\_store\_total\_weight()
---

# vae\_store\_total\_weight()

The `vae_store_total_weight()` function overrides the total weight for
items in the cart. This function is useful because it enables you to
manually divide the items in your order into separate boxes.

## Usage

`vae_store_total_weight($weight)`

-   `$weight` - May be a number representing the total weight of the
    cart or an array of numbers representing separate packages that will
    be shipped separately. If the array option is used, the shipping
    charges for each box will be calculated and then summed together to
    produce a total shipping cost.

## Returns

Returns `false` on failure, or `true` on success.

## Sample Usage

    <?php
    // In __vae.php:
    // Calculate the exact weight based on what gets ordered
    vae_register_hook("store:cart:updated", "configure_weights");
    function configure_weights() {
      // ...
      // some magic calculations
      // ...
      $return_value = vae_store_total_weight($array_of_box_weights); 
      if ($return_value == false) {
        echo "FAILURE";
      } else {
        echo "SUCCESS";
      }
    }
    ?>
