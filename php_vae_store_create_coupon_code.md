---
layout: docs
title: # vae\_store\_create\_coupon\_code()
---

# vae\_store\_create\_coupon\_code() {#php_vae_store_create_coupon_code}

The `vae_store_create_coupon_code()` function creates a coupon code.

## Usage

`vae_store_create_coupon_code($options)`

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
    // Create coupon code
    $return_value = vae_store_create_coupon_code(array(
      'code' => $voucher_code, 
      'description' => "$" . $amount . " Voucher, " . $order['billing_name'], 
      'number_available' => 1, 
      'fixed_amount' => $amount
    )); 
    if ($return_value == false) {
      echo "FAILURE";
    } else {
      echo "SUCCESS";
    }
    ?>
