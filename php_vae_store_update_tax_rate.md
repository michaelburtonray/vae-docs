---
layout: docs
title: # vae\_store\_update\_tax\_rate() {#php_vae_store_update_tax_rate}
---

# vae\_store\_update\_tax\_rate() {#php_vae_store_update_tax_rate}

The `vae_store_update_tax_rate()` function updates a tax rate.

## Usage

`vae_store_update_tax_rate($rate_id, $options)`

-   `$rate_id` - numeric ID of the tax rate.

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
    // Change tax rate to apply to shipping charges
    $return_value = vae_store_update_tax_rate($id, array(
      'include_shipping' => '1'
    ));
    if ($return_value == false) {
      echo "FAILURE";
    } else {
      echo "SUCCESS";
    }
    ?>
