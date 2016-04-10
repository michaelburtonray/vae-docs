---
layout: docs
title: # vae\_image\_reflect() {#php_vae_image_reflect}
---

# vae\_image\_reflect() {#php_vae_image_reflect}

Use the `vae_image_reflect()` function to apply an Apple-like reflection
effect to an image.

## Usage

`vae_image_reflect($image, $reflection_size = "30%", $opacity = 35)`

-   `$image` - Filename for the image you would like to add a
    reflection to. This is usually obtained by calling
    [`vae_image()`](#php_vae_image) on the image ID (obtained by reading
    the data returned by [`vae()`](#php_vae) under the path of the Image
    structure you wish to use). This should be an image retrieved from
    Vae (and thus stored in the local Vae data cache folder).

-   `$reflection_size` - Size of the reflection. Specify either in
    pixels (example `10px`) or as a percentage of the image height
    (example `30%`). Default is `30%`.

-   `$opacity` – Opacity of the reflection, as a percentage. Default is
    `35`.

## Returns

Filename of the newly generated image with a reflection.

## Sample Usage

    <?php
    // Display press photo with reflection effect
    $bio = vae_find("bio");
    $image_filename = vae_image($bio['press_photo']);
    $reflected_image = vae_image_reflect($image_filename, 30, 35);
    echo '<img src="' . vae_data_url() . $reflected_image . '" alt="My Reflected Image" />';
    ?>
