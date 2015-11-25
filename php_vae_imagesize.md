# vae\_imagesize() {#php_vae_imagesize}

Use the `vae_imagesize()` function to determine the pixel size of an
image stored in your Vae data folder.

## Usage

`vae_imagesize($local_filename)`

-   `$local_filename` - Local filename of the image you would like to
    measure, relative to the local Vae data cache path (i.e. as returned
    by [`vae_image()`](#php_vae_image). This is usually obtained by
    calling [`vae_image()`](#php_vae_image) on the image ID (obtained by
    reading the data returned by [`vae()`](#php_vae) under the path of
    the Image structure you wish to use).

## Returns

Two-element array containing the width and height of the image.

## Sample Usage

    <?php
    // Fetch image and compute image size
    $bio = vae("bio");
    $image_filename = vae_file($bio['press_photo']);
    $image_size = vae_imagesize($image_filename);

    // Display Image
    echo '<img src="' . $image_filename . '" alt="My Image" />';

    // Create a <div> the same size as our image
    echo '<div style="width: ' . $image_size[0] . '; height: ' . $image_size[1] . ';">My Div</div>';
    ?>
