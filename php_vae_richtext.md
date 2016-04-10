---
layout: docs
title: # vae\_richtext()
---

# vae\_richtext()

The `vae_richtext()` function applies proper formatting to the data
stored in a Rich Text structure.

## Usage

`vae_richtext($path_rich_text_structure, array('audio_player_vars' =>                 $audio_player_vars, 'asset_height' => $asset_height, 'asset_width' => $asset_width,                 'asset_quality' => $asset_quality, 'section' => $section)`

## Required Arguments

This function requires the path to a [Rich Text Area
Structure](#structure.richtext) as its first argument.

## Optional Arguments

This function also accepts an optional associative array which modifies
its output.

-   `asset_height` - if this is a rich text field with embedded assets
    such as video or images, setting this attribute will scale these
    assets to be no bigger than this many pixels high. If you provide
    `asset_height`, you must also provide `asset_width`.

-   `asset_width` - similar to `asset_height`, but for width. If you
    provide `asset_width`, you must also provide `asset_height`.

-   `asset_quality` - set to an integer from 1 to 100 to define the JPG
    quality of the image. If the image is not a JPEG, this value
    is ignored.

-   `audio_player_vars` - string of ampersand-delimited options to
    customize the audio player that may be displayed if a Rich Text
    structure contains audio files. The available options are listed on
    the [audio player
    website](http://www.macloo.com/examples/audio_player/options.html).

-   `links_to_new_window` - if set to `external`, all external links
    will be rendered to open in a new window when clicked. If set to
    anything else, all links (internal and external) will be rendered to
    open in a new window when clicked.

-   `nohtml` - if set to `true`, all HTML tags will be from the output,
    replacing `<p>` and `<br                         />` tags
    with newlines.

-   `section` - If the structure specified in the path attribute is a
    Rich Text Area, specify a number here to only render a certain
    section of the content. Content in a Rich Text Area may be divided
    by creating dividers in the editor widget in the backstage. The
    content before the first divider is considered section `0`, after
    the first divider but before the second divider is section `1`, etc.

    So, specifying `section="0"` will render just the first section. You
    may also add a plus sign (`+`) to render a section and all sections
    after it. So `section="1+"` would show the first section and all
    other sections as well.

## Returns

This function returns HTML that will render as a formatted rich text
area.

## Sample Usage

Suppose you had a Rich Text Area Structure 'About Us' which was a Child
of a Section named 'Homepage'. The following would return a rich text
area containing the contents of the 'About Us' Rich Text Area Structure.

    <v:php>
        return vae_richtext(vae_find("/homepage/about_us"));
    </v:php>

This would create formatted HTML with contents from the 'About Us' Rich
Text Area Structure.
