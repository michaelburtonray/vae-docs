---
layout: docs
title: # vae\_errors()
---

# vae\_errors()

Use the `vae_errors()` function to retrieve any error messages from a
previous call that failed where the documentation of that call tells you
to look in `vae_errors()` for error messages.

## Usage

`vae_errors()`

## Returns

Returns an array of the error messages from the most recent call that
can produce errors.

## Sample Usage

    <?php
    // Update number of downloads
    $item = vae_find($_REQUEST['id']);
    vae_update(
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
