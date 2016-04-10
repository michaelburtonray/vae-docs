---
layout: docs
title: # vae\_destroy()
---

# vae\_destroy()

Use the `vae_destroy()` function to delete (destroy) an entry in a Vae
collection.

## Usage

`vae_destroy($id)`

-   `$id` - ID of the entry to remove.

## Returns

Returns `false` on error, `true` on success. In the event of a failure,
you should call `vae_errors()` to return an array of the error messages.

## Sample Usage

    <?php
    // destroy specified item
    $ret = vae_destroy($_REQUEST['id_to_destroy']);
    if ($ret == true) {
      echo "Success";
    }
    ?>
