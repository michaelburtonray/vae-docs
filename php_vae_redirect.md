---
layout: docs
title: # vae\_redirect() {#php_vae_redirect}
---

# vae\_redirect() {#php_vae_redirect}

Use the `vae_redirect()` function to register a URL that the user will
be redirected to AFTER the script finishes processing.

## Usage

`vae_redirect($url)`

-   `$url` - URL that the user will be redirected to.

## Returns

Returns `true`.

## Sample Usage

    <?php
    // Send user back to shop page
    return vae_redirect("/shop"); 
    ?>
