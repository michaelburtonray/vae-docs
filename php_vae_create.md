---
layout: docs
title: vae\_create()
---

# vae\_create()

Use the `vae_create()` function to create a new entry in a Vae
collection.

> **Warning**
>
> Please do not use this function for any purpose that may generate
> abuse, such as contest entries. Overuse of this function can result in
> having your CMS locked and future updates disallowed until you contact
> us. Please reach out and contact us if you're at all unsure about a
> given use for this function.

## Usage - New Syntax

`vae_create($path, $ignored = null, $data)`

-   `$path` - Path to the Vae collection collection you would like to
    add a new row to.

-   `$ignored` - Since you're passing a path as the first parameter,
    this parameter is ignored. Just provide a value of `null` or
    anything else.

-   `$data` - associative array containing the new data, represented as
    key-value pairs

## Usage - Old/Alternate Syntax

`vae_create($collection_id, $parent_row_id = 0, $data)`

-   `$collection_id` - ID of the Vae collection collection you would
    like to add a new row to.

-   `$parent_row_id` - If this collection is not at root level, provide
    the ID of the row that this row should be added under. Otherwise,
    provide a value of `0`.

-   `$data` - associative array containing the new data, represented as
    key-value pairs

## Returns

Returns `false` on error, or the new ID of the created entry on success.
In the event of a failure, you should call `vae_errors()` to return an
array of the error messages.

## Sample Usage

    <?php
    // Create new comment
    $ret = vae_create(1001, $_REQUEST['id'], array('comment' => $_REQUEST['comment']));
    if ($ret == true) {
      echo "Success";
    } else {
      echo "There were some errors:\n";
      foreach(vae_errors() as $error) {
        echo $error . "\n";
      }
    }
    ?>
