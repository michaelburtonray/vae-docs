---
layout: docs
title: vae\_store\_destroy\_all\_tax\_rates()
---

# vae\_store\_destroy\_all\_tax\_rates()

The `vae_store_destroy_all_tax_rates()` removes all tax rates. This is
useful to flush the list and rebuild from a data file.

## Usage

`vae_store_destroy_all_tax_rates()`

## Returns

Returns `false` on failure, or `true` on success.

## Sample Usage

    <?php
    // Remove all tax rates
    $return_value = vae_store_destroy_all_tax_rates();
    if ($return_value == false) {
      echo "FAILURE";
    } else {
      echo "SUCCESS";
    }
    ?>
