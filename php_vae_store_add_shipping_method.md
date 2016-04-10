---
layout: docs
title: vae\_store\_add\_shipping\_method()
---

# vae\_store\_add\_shipping\_method()

The `vae_store_add_shipping_method()` function adds a shipping method to
the site. All options available from the built-in shipping methods are
also available. This function is usually called in `__vae.php`. If you
need to calculate the cost, you may call this function inside a
`store:cart:updated` hook. This function only needs to be called once
per visitor session, but calling it multiple times is ok. Subsequent
calls for the same method name will update the cost and options.

## Usage

`vae_store_add_shipping_method($options)`

-   `$options` - PHP associative array containing the options for the
    shipping method.

    Valid keys are: `title`, `cost`, `domestic_only`,
    `international_only`, `class`, `destination_country`. These
    correspond with the options described on the page for enabling the
    built-in shipping methods.

    All keys are optional except `title` and `cost`.

## Returns

Returns `false` on failure, or `true` on success.

## Sample Usage

    <?php
    // In __vae.php:
    // Add custom ground freight shipping method for Plasma TVs
    $return_value = vae_store_add_shipping_method(array(
      'title' => "PilotAir Custom Freight",
      'cost' => '175.00',
      'shipping_class' => 'plasma_tv',
      'domestic_only' => 1
    )); 
    if ($return_value == false) {
      echo "FAILURE";
    } else {
      echo "SUCCESS";
    }
    ?>
