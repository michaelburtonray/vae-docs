---
layout: docs
title: # vae\_watermark()
---

# vae\_watermark() {#php_vae_watermark}

Use the `vae_watermark()` function to add a watermark to an image.

## Usage

`vae_watermark($image, $watermark_image, $vertical_align = "bottom",                 $horizontal_align = "right", $vertical_padding = 5, $horizontal_padding =                 5)`

-   `$image` - Filename for the image you would like to add a
    watermark to. This is usually obtained by calling
    [`vae_image()`](#php_vae_image) on the image ID (obtained by reading
    the data returned by [`vae()`](#php_vae) under the path of the Image
    structure you wish to use). This should be an image retrieved from
    Vae (and thus stored in the local Vae data cache folder).

-   `$watermark_image` - Filename for the watermark image you'd like
    to use. We recommend 24-bit PNG images for watermarking, as these
    preserve transparency. Please specify the path relative to your
    web root.

-   `$vertical_align` – Specifies where you would like the watermark to
    be placed. Values can be either `top`, `middle`, or `bottom`.
    Default is `bottom`.

-   `horizontal_align` – Specifies where you would like the watermark to
    be placed. Values can be either `left`, `center`, or `right`.
    Default is `right`.

-   `$vertical_padding` – Specifies how many pixels of vertical padding
    to place between the watermark and the edge of the full image.
    Default is 5.

-   `$horizontal_padding` – Specifies how many pixels of horizontal
    padding to place between the watermark and the edge of the
    full image. Default is 5.

## Returns

Filename of the newly generated watermarked image.

## Sample Usage

    <?php
    // Display watermarked version of press photo
    $bio = vae_find("bio");
    $image_filename = vae_image($bio['press_photo']);
    $watermarked_image = vae_watermark($image_filename, "watermarks/my_logo.png", "bottom", "right", 5, 5);
    echo '<img src=" . vae_data_url() . $watermarked_image . '" alt="My Watermarked Image" />';
    ?>
