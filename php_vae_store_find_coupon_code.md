---
layout: docs
title: vae\_store\_find\_coupon\_code()
---

# vae\_store\_find\_coupon\_code()

The `vae_store_find_coupon_code()` obtains an associative array
representing a coupon code.

## Usage

`vae_store_find_coupon_code($code)`

-   `$code` - code text of the coupon code.

## Returns

Returns `false` on failure, or an associative array describing the
coupon code on success. The keys of the associative array will include:
`id`, `code`, `description`, `fixed_amount`, `percentage_amount`,
`free_shipping`, `min_order_amount`, `min_order_items`, `country`,
`discount_shipping`, `number_available`, `start_at`, `stop_at`,
`max_per_customer`. These correspond with the options described on the
page for creating coupon codes.

## Sample Usage

    <?php
    // Get info about a coupon code
    $coupon = vae_store_find_coupon_code($code);
    if ($coupon['fixed_amount']) {
      echo "This coupon provides a fixed discount of " . $coupon['fixed_amount'];
    }
    ?>
