---
layout: docs
title: vae\_image() and vae\_sizedimage()
---

# vae\_image() and vae\_sizedimage()

Use the `vae_image()` or `vae_sizedimage()` function to generate a URL
for an image uploaded through Vae. The value returned by these functions
is typically used within the `src=` attribute of an `<img>` tag. The URL
is returned relative to the Vae data URL, which you can retrieve using
the [`vae_data_url()`](/php_vae_data_url/) function.

Currently, returned URLs do not contain slashes, however, this is not
guaranteed, and may change in the future.

## Usage

`vae_image($image_id, $width = "", $height = "", $image_size_name = "", $grow                 = false, $quality = "")`

-   `$image_id` - ID of the image you wish you display. This is obtained
    by reading the data returned by `vae()` under the path of the Image
    structure you wish to use.

-   `$width` and `$height` \[(optional)\] - the image will be
    scaled (resized) to this maximum width and height, preserving
    aspect ratio.

-   `$image_size_name` \[(optional)\] - if you set up a specific image
    resizing task in Vae (such as cropping), simply pass in the name of
    that image size task here to obtain the image as sized by that task.

-   `$grow` \[(optional)\] - set to `true` if you would like the image
    to be enlarged to fit the specified size in the event that it is
    smaller than the specified width and height. If this is set to
    `false` (default), Vae will never enlarge images to meet your width
    and height specifications.

-   `$quality` \[(optional)\] - set to an integer from 1 to 100 to
    define the JPG quality of the image. If the image is not a JPEG,
    this value is ignored.

OR

`vae_sizedimage($image_id, $image_size_name)`

-   `$image_id` - ID of the image you wish you display. This is obtained
    by reading the data returned by `vae()` under the path of the Image
    structure you wish to use.

-   `$image_size_name` - if you set up a specific image resizing task in
    Vae (such as cropping), simply pass in the name of that image size
    task here to obtain the image as sized by that task.

## Returns

Filename of the local copy of this image, relative to the local Vae data
cache path.

## Sample Usage

    <?php
    // Display our press photo as a scaled image, a cropped image, 
    // and a cropped image that has been scaled down
    $bio = vae("bio");
    $scaled_image = vae_image($bio['press_photo'], 320, 240);
    $cropped_image = vae_sizedimage($bio['press_photo'], "Square");
    $cropped_and_scaled_image = vae_image($bio['press_photo'], 50, 50, "Square");
    echo '<img src="' . vae_data_url() . $scaled_image . '" alt="Scaled Press Photo" />';
    echo '<img src="' . vae_data_url() . $cropped_image . '" alt="Cropped Press Photo" />';
    echo '<img src="' . vae_data_url() . $cropped_and_scaled_image . '" alt="Cropped and Scaled Press Photo" />';
    ?>
