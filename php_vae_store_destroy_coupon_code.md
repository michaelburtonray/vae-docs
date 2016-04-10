---
layout: docs
title: # vae\_store\_destroy\_coupon\_code()
---

# vae\_store\_destroy\_coupon\_code()

The `vae_store_destroy_coupon_code()` removes a coupon code.

## Usage

`vae_store_destroy_coupon_code($code_id)`

-   `$code_id` - numeric ID of the coupon code. This is not the code
    string itself. Obtain this ID by calling
    [`vae_store_find_coupon_code()`](#).

## Returns

Returns `false` on failure, or `true` on success.

## Sample Usage

    <?php
    // Remove a coupon code
    $coupon = vae_store_find_coupon_code($code);
    $return_value = vae_store_destroy_coupon_code($coupon['id']);
    if ($return_value == false) {
      echo "FAILURE";
    } else {
      echo "SUCCESS";
    }
    ?>
