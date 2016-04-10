---
layout: docs
title: vae\_permalink()
---

# vae\_permalink()

Use the `vae_permalink()` function to retrieve the
[permalink](#permalinks) for a given entry ID.

## Usage

`vae_permalink($id)`

-   `$id` - Will retrieve the permalink for this Entry ID.

## Returns

If the ID is found, returns the permalink for that enetry. Otherwise
returns an empty string.

## Sample Usage

    <?php
    // Link user to Article's permalink
    $permalink = vae_permalink($article_id);
    echo "<a href='$permalink'>Permalink</a>"; 
    ?>
