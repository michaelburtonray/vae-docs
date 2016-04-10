---
layout: docs
title: # vae\_store\_discount\_code()
---

# vae\_store\_discount\_code()

The `vae_store_discount_code()` retrieves information about the
currently applied discount code. When called with an argument, it sets
the currently applied discount code.

## Usage -- Retrieve Current Discount Code

`vae_store_discount_code()`

## Returns

Returns an associative array containing the information about the
currently applied discount code.

The array keys will include: `code`, `description`, `fixed_amount`,
`percentage_amount`, `free_shipping`, `min_order_amount`,
`min_order_items`, `discount_shipping`, `number_available`, `start_at`,
`stop_at`, `max_per_customer`. These correspond with the options
described on the page for creating coupon codes.

## Sample Usage

    <?php
    // Display message if using a really good discount code
    $code = vae_store_discount_code();
    if ($code['percentage_amount'] > 50) {
      echo "Wow, you're getting a great deal.";
    }
    ?>

## Usage -- Apply a Discount Code

`vae_store_discount_code($code)`

-   `$code` - discount code to apply.

## Returns

Returns `false` on failure, or `true` on success.

## Sample Usage

    <?php
    // Apply discount code 'WELCOME'
    $return_value = vae_store_discount_code("WELCOME");
    if ($return_value == false) {
      echo "FAILURE";
    } else {
      echo "SUCCESS";
    }
    ?>
