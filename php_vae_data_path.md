---
layout: docs
title: vae\_data\_path()
---

# vae\_data\_path()

Use the `vae_data_path()` function to retrieve the filesystem path to
the folder where Vae stores its local cache of images, files and videos.

## Usage

`vae_data_path()`

## Returns

Returns the filesystem path to the folder where Vae stores its local
cache of images, files and videos.

## Sample Usage

{% highlight php %}
<?php
// get homepage image
$image = vae_image(vae_find("home/image"));
$local_path = vae_data_path() . $image;
{% endhighlight %}

    // stream homepage image directly to browser
    vae_disable_vaeml();
    Header("Content-type: image/jpeg");
    readfile($local_path);
    ?>
