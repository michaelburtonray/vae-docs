# vae\_image\_grey() {#php_vae_image_grey}

Use the `vae_image_grey()` function to make an image greyscale.

## Usage

`vae_image_grey($image)`

-   `$image` - Filename for the image you would like to make greyscale.
    This is usually obtained by calling [`vae_image()`](#php_vae_image)
    on the image ID (obtained by reading the data returned by
    [`vae()`](#php_vae) under the path of the Image structure you wish
    to use). This should be an image retrieved from Vae (and thus stored
    in the local Vae data cache folder).

## Returns

Filename of the newly generated image.

## Sample Usage

    <?php
    // Display press photo in greyscale
    $bio = vae_find("bio");
    $image_filename = vae_image($bio['press_photo']);
    $grey_image = vae_image_grey($image_filename);
    echo '<img src="' . vae_data_url() . $grey_image . '" alt="My Grey Image" />';
    ?>
