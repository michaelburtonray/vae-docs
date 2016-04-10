---
layout: docs
title: # vae\_asset()
---

# vae\_asset()

Use the `vae_asset()` function to generate a URL for an asset uploaded
through a Vae Rich Text structure.

## Usage

`vae_asset($asset_id, $width = "", $height = "")`

-   `$image_id` - ID of the asset you wish to retrieve. This is obtained
    by parsing the data returned by `vae()` under the path of the Rich
    Text structure you wish to use.

-   `$width` and `$height` \[(optional)\] - the image will be
    scaled (resized) to this maximum width and height, preserving
    aspect ratio.

## Returns

Filename of the local copy of this asset, relative to the local Vae data
cache path.

## Sample Usage

    <?php
    // Render the first image in the Biography
    $bio = vae("bio");
    preg_match("/<img([^>]*)\/VAE_HOSTED_IMAGE\/([0-9]*)([^>]*)>/", $bio, $matches);
    $asset_id = $matches[2];
    $image = vae_asset($asset_id, 320, 240);
    echo '<img src="' . vae_data_url() . $image . '" alt="First Image Asset from Bio" />';
    ?>
