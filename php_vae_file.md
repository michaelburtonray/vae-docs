---
layout: docs
title: vae\_file()
---

# vae\_file()

Use the `vae_file()` function to retrieve the URL for a file (or an
image/video) uploaded through Vae. This return value is typically used
within the `href=` attribute of an `<a>` tag, when offering to allow
users to download the file. The URL is returned relative to the Vae data
URL, which you can retrieve using the
[`vae_data_url()`](/php_vae_data_url/) function.

Currently, returned URLs do not contain slashes, however, this is not
guaranteed, and may change in the future.

## Usage

`vae_file($file_id)`

-   `$file_id` - ID of the file you wish to retrieve the URL for. This
    is obtained by reading the data returned by [`vae()`](/php_vae/)
    under the path of the File, Image, or Video field you wish to use.

-   `$preserve_filename = false` - if set to `true`, Vae will preserve
    the original filename of the file as the filename part of the
    returned URL. Video field you wish to use.

## Returns

Filename for the local copy of this file, relative to the local Vae data
cache path.

## Sample Usage

{% highlight php %}
<?php
// Render a link to download press packet
$bio = vae_find("bio");
$filename = vae_file($bio['press_packet']);
echo '<a href="' . vae_data_url() . $filename . '">Download our Press Packet</a>';
?>
{% endhighlight %}
