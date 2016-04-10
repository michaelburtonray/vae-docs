---
layout: docs
title: # vae\_store\_current\_user()
---

# vae\_store\_current\_user()

The `vae_store_current_user()` function retrieves information about the
current user.

## Usage

`vae_store_current_user()`

## Returns

Returns an array containing the information about the current user.

## Sample Usage

    <?php 
    $user = vae_store_current_user();
    echo $user['billing_name'];
    // etc
    ?>
