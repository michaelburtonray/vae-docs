---
layout: docs
title: vae\_data\_url()
---

# vae\_data\_url()

Use the `vae_data_url()` function to retrieve the URL prefix for images,
files and videos uploaded to Vae and accessed via the
[`vae_file()`](#php_vae_file), [`vae_image()`](#php_vae_image), or
[`vae_video() functions`](#php_vae_video).

## Usage

`vae_data_url()`

## Returns

Returns the best URL prefix for Vae images, files and videos. This will
either be a CDN host configured to mirror Vae's local cache of images,
files, and videos, or a URL on the local domain.

## Sample Usage

    <?php
    $image = vae_image(vae_find("home/image"));
    $full_url = vae_data_url() . $image;
    echo "<img src='$full_url' />";
    ?>
