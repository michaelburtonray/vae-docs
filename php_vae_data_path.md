# vae\_data\_path() {#php_vae_data_path}

Use the `vae_data_path()` function to retrieve the filesystem path to
the folder where Vae stores its local cache of images, files and videos.

## Usage

`vae_data_path()`

## Returns

Returns the filesystem path to the folder where Vae stores its local
cache of images, files and videos.

## Sample Usage

    <?php
    // get homepage image
    $image = vae_image(vae_find("home/image"));
    $local_path = vae_data_path() . $image;

    // stream homepage image directly to browser
    vae_disable_vaeml();
    Header("Content-type: image/jpeg");
    readfile($local_path);
    ?>
