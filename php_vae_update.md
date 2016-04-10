---
layout: docs
title: # vae\_update() {#php_vae_update}
---

# vae\_update() {#php_vae_update}

Use the `vae_update()` function to update data stored in Vae.

> **Warning**
>
> Please do not use this function for any purpose that may generate
> abuse, such as contest entries. Overuse of this function can result in
> having your CMS locked and future updates disallowed until you contact
> us. Please reach out and contact us if you're at all unsure about a
> given use for this function.

## Usage

`vae_update($id, $data)`

-   `$id` - ID of the Vae collection entry you are updating.

-   `$data` - associative array containing the new data, represented as
    key-value pairs

## Returns

Returns `false` on error, `true` on success. In the event of a failure,
you should call `vae_errors()` to return an array of the error messages.

## Sample Usage

    <?php
    // Update number of downloads
    $item = vae_find($_REQUEST['id']);
    $ret = vae_update(
      $_REQUEST['id'], 
      array('number_of_downloads' => ($item['number_of_downloads'] + 1))
    );
    if ($ret == true) {
      echo "Success";
    } else {
      echo "There were some errors:\n";
      foreach(vae_errors() as $error) {
        echo $error . "\n";
      }
    }
    ?>
