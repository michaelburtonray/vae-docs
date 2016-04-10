---
layout: docs
title: # vae\_store\_create\_tax\_rate()
---

# vae\_store\_create\_tax\_rate()

The `vae_store_create_tax_rate()` function creates a coupon code.

## Usage

`vae_store_create_tax_rate($options)`

-   `$options` - PHP associative array containing the options for the
    tax rate.

    Valid keys are: `description`, `rate`, `country`, `state`, `zip`,
    `include_shipping`, `tax_class`, `minimum_price`. These correspond
    with the options described on the page for creating tax rates.

    All keys are optional except `description` and `rate`, which
    are required.

## Returns

Returns `false` on failure, or `true` on success.

## Sample Usage

    <?php
    // Create tax rate
    $return_value = vae_store_create_tax_rate(array(
      'description' => "NY 8.375% Tax", 
      'rate' => "8.375",
      'include_shipping' => '1',
      'state' => "NY"
    )); 
    if ($return_value == false) {
      echo "FAILURE";
    } else {
      echo "SUCCESS";
    }
    ?>
