---
layout: docs
title: # vae\_cdn\_url() {#php_vae_cdn_url}
---

# vae\_cdn\_url() {#php_vae_cdn_url}

Use the `vae_cdn_url()` function to retrieve the URL prefix for
accessing any file on your site via a CDN (content delivery network).

In order for your website to be CDN-enabled, you must request this from
Vae support. Currently, there is no additional charge for CDN usage,
however it may slightly increase the amount of bandwidth used by your
site, as some bandwidth will be spent sending content to the CDN nodes.

If we have not configured your site for use with one or more CDNs, this
function will return the URL prefix of your domain.

We may eventually return different values each time you call this
function to distribute our traffic across multiple CDN networks in a
round-robin fashion, although we do not do this now.

## Usage

`vae_cdn_url()`

## Returns

Returns the URL prefix for accessing any file on your site via a CDN
(content delivery network). If we have not configured your site for use
with one or more CDNs, this will return the URL prefix of your domain.

## Sample Usage

    <?php
    // Serve this large file faster from the CDN
    echo "<a href='" . vae_cdn_url() . "/assets/my_big_file.zip'>Download File</a>";
    ?>
