---
layout: docs
title: # vae\_store\_destroy\_tax\_rate()
---

# vae\_store\_destroy\_tax\_rate()

The `vae_store_destroy_tax_rate()` removes a tax rate.

## Usage

`vae_store_destroy_tax_rate($tax_rate_id)`

-   `$tax_rate_id` - numeric ID of the tax rate. This is not the
    description string itself.

## Returns

Returns `false` on failure, or `true` on success.

## Sample Usage

    <?php
    // Remove a tax rate
    $return_value = vae_store_destroy_tax_rate($id);
    if ($return_value == false) {
      echo "FAILURE";
    } else {
      echo "SUCCESS";
    }
    ?>
