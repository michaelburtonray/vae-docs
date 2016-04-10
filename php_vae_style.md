---
layout: docs
title: # vae\_style()
---

# vae\_style()

Use the `vae_style()` function to sanitize and process text from a Text
or Text Area structure. It converts newlines to `<br />` tags,
hyperlinks URLs, encodes HTML entities, and strips excess whitespace.

## Usage

`vae_style($text)`

-   `$text` - text to sanitize and process.

## Returns

Returns sanitized and processed text.

## Sample Usage

    <?php
    // Display cleaned version of Biography
    $content = vae_find("homepage");
    echo vae_style($content['bio']); 
    ?>
