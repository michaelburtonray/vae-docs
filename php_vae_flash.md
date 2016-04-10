---
layout: docs
title: # vae\_flash() {#php_vae_flash}
---

# vae\_flash() {#php_vae_flash}

Use the `vae_flash()` function to add a message to the Vae flash bin.
These messages are displayed to the user on the next page that is
loaded, either before a Vae form tag or when `<v:flash />` is called.

This is useful is conjunction with redirects, as the message will be
displayed on the page that is redirected to.

## Usage

`vae_flash($message, $class, $flash = '')`

-   `$message` - Text of the message to display.

-   `$class` - CSS class for the displayed message. Convention is to use
    `msg` for regular messages and `err` for errors.

-   `$flash` - name of the specific flash bucket. You can name your
    flash buckets to put different types of messages in
    different places.

## Returns

Returns `true`.

## Sample Usage

    <?php
    if (!my_available_func($_REQUEST['id'])) {
      vae_flash("Sorry, this item is not available for the time period you requested.", 'err');
      return false;
    }
    ?>
