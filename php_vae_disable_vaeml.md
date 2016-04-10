---
layout: docs
title: # vae\_disable\_vaeml() {#php_vae_disable_vaeml}
---

# vae\_disable\_vaeml() {#php_vae_disable_vaeml}

Use the `vae_disable_vaeml()` function to disable all VaeML in a file.
This function is useful when your PHP script is outputting non-text
data, such as images or raw files, or if your PHP script does not
contain any VaeML code. It may be called at any point in the script, but
for best performance, call it as soon as possible.

## Usage

`vae_disable_vaeml()`

This function accepts no arguments.

## Returns

This function always returns `true`.

## Sample Usage

Let's say we have some PHP code reading a file that generates JPGs.

    <?php
    Header("Content-type: image/jpeg");
    readfile("image.jpg");
    ?>

If our file contained some combination of characters that happen to form
some VaeML—for example, [`<v->`](#v_shortcuts)—we'd be in trouble. Using
`vae_disable_vaeml()` in this situation would save you from any
unexpected errors:

    <?php 
    vae_disable_vaeml();
    Header("Content-type: image/jpeg");
    readfile("image.jpg");
    ?>
