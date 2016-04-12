---
layout: docs
title: vae\_store\_update\_coupon\_code()
---

# vae\_store\_update\_coupon\_code()

The `vae_store_update_coupon_code()` function updates a coupon code.

## Usage

`vae_store_update_coupon_code($code_id, $options)`

-   `$code_id` - numeric ID of the coupon code. This is not the code
    string itself. Obtain this ID by calling
    [`vae_store_find_coupon_code()`](/php_vae_store_find_coupon_code/).

-   `$options` - PHP associative array containing the options for the
    coupon code.

    Valid keys are: `code`, `description`, `fixed_amount`,
    `percentage_amount`, `free_shipping`, `min_order_amount`,
    `min_order_items`, `country`, `discount_shipping`,
    `number_available`, `start_at`, `stop_at`, `max_per_customer`. These
    correspond with the options described on the page for creating
    coupon codes.

    All keys are optional except `code`, which is required.

## Returns

Returns `false` on failure, or `true` on success.

## Sample Usage

    <?php
    // Add 10 to the number available of this coupon code
    $coupon = vae_store_find_coupon_code($code);
    $return_value = vae_store_update_coupon_code($coupon['id'], array(
      'number_available' => $coupon['number_available'] + 10
    ));
    if ($return_value == false) {
      echo "FAILURE";
    } else {
      echo "SUCCESS";
    }
    ?>
