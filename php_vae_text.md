---
layout: docs
title: # vae\_text() {#php_vae_text}
---

# vae\_text() {#php_vae_text}

The `vae_text()` function renders the text you specify in a given font,
size, and color.

This works by building a PNG on the server, so you do not need to use
Flash or Javascript at all in the website.

## Usage

`vae_text($text, $font_name = "", $font_size = "22", $color = "#000000",                 $kerning = 1, $padding = 5, $max_width = 10000)`

-   `$text` - The text you would like to render.

-   `$font_name` - Name of the TrueType font to use for rendering.
    Should be named `$font_name.ttf` and placed in your document root.

-   `$font_size` - Pixel size to use. Default is `22`.

-   `$color` - Color of the rendered text.

-   `$kerning` - number of pixels to place between letters. Default is
    `1`.

-   `$padding` - number of pixels to use as padding in the entire
    rendered image. Default is `5`.

-   `$max_width` - Maximum width in pixels. If specified, if the image
    would need to be wider than this, it will be split onto
    multiple lines.

## Returns

Filename of the generated image.

## Sample Usage

    <?php
    // Render text in the Tahoma font
    echo '<img src="' . vae_data_url() . vae_text("This text is in Tahoma", "Tahoma", "18", "#FF0000") . '" />';
    ?>
