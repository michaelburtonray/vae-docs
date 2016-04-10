---
layout: docs
title: "<v:text>"
---

# `<v:text>`{#v_text}

Outputs the text associated with a Vae [text
structure](#structure.text), [text area structure](#structure.textarea),
or [rich text area](#structure.richtext) structure.

## Required Attributes

-   `path` - the path to the Vae text structure you wish to output. Uses
    [VaeQL](#vaeql) syntax.

    OR:

-   `param` - name of a request parameter. If set, will output the value
    stored in that request parameter. The value will be HTML sanitized.

    OR:

-   `placeholder` - renders a placeholder value that will be filled in
    with the real value from an eCommerce order once it is available to
    the system. This attribute is useful for building E-Mail templates
    that are associated with eCommerce orders.

    Valid values for the placeholder attribute are: `id`, which will
    insert the order ID number, `notes` which will be replaced with
    order notes, `password` which will be replaced with the new password
    assigned to a user in a forgot password email, `shipment_company`,
    which will insert the shipping company, `shipment_date`, which will
    insert the date of shipment, and `shipment_tracking_number`, which
    will insert the shipping tracking number,

    OR:

-   `text` - text that will be rendered directly.

## Optional Attributes

-   `after` - text that will be added after the rendered text.

-   `asset_height` - if this is a rich text field with embedded assets
    such as video or images, setting this attribute will scale these
    assets to be no bigger than this many pixels high. If you provide
    `asset_height`, you must also provide `asset_width`.

-   `$asset_quality` \[(optional)\] - set to an integer from 1 to 100 to
    define the JPG quality of embedded image assets. If an embedded
    image asset is not a JPEG, this value is ignored.

-   `asset_width` - similar to `asset_height`, but for width. If you
    provide `asset_width`, you must also provide `asset_height`.

-   `audio_player_vars` - string of ampersand-delimited options to
    customize the audio player that may be displayed if a Rich Text
    structure contains audio files. The available options are listed on
    the [audio player
    website](http://www.macloo.com/examples/audio_player/options.html).

-   `before` - text that will be prepended to the rendered text.

-   `color` - text color to be used when an image is generated from
    the text.

-   `font` - if specified, the font will be rendered into an image using
    the font you specified. The `.ttf` file for this font must be in the
    root directory of your website.

-   `font-size` - font size to be used when an image is generated from
    the text.

-   `kerning` - kerning (inter-character spacing) in pixels to be used
    when an image is generated from the text.

-   `links_to_new_window` - if set to `external`, all external links
    will be rendered to open in a new window when clicked. If set to
    anything else, all links (internal and external) will be rendered to
    open in a new window when clicked.

-   `max-width` - maximum width (in pixels) of the image to be generated
    when an image is generated from the text.

-   `maxlength` - maximum length of the string to be displayed (in
    number of characters). If the text is longer than this, it will be
    clipped and an elipses (`…`) will be inserted.

-   `nohtml` - if set to `true`, all HTML tags will be from the output,
    replacing `<p>` and `<br />` tags with newlines.

-   `number_format` - if present, the text string will be formatted with
    grouped thousands. The value of this attribute will control the
    number of displayed decimal places. For example `number_format="2"`
    would cause the string `10000` to render as `10,000.00`. If the
    `before` or `after` attributes are also present, then those values
    are prepended or appended to the number prior to formatting.

-   `padding` - padding (in pixels) to be used when an image is
    generated from the text.

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

-   `strftime` - if the structure specified by path is a Date or Time
    Structure, you may specify a [strftime format
    string](http://www.php.net/strftime) in this attribute and it will
    be used to format the date. In addition to the standard format
    parameters, Vae also supports a custom `%N` format string that
    provides a "natural" description of the time, such as '3 hours ago'.

-   `transform` - if set to `uppercase`, text will be turned
    into uppercase.

## Self-closed

This tag is usually self-closed.

## Sample Usage

There are a number of possible uses for the `<v:text>` tag. We will try
to cover several of them with sample code.

### Basic Sample

    Our phone number is: <v:text path="contact/phone_number" />

### Formatting Dates

    This article was written on: <v:text path="date" strftime="%B %d, %Y" />

Would render something like this:

    This article was written on: September 26, 2008.

### Rendering text in a specific font

    <v:text text="Thank you <v=name>!" font="HelveticaNeue" font-size="14" kerning="0" color="#000000" padding="5" />

### Rendering a Rich Text Area

    <v:text path="body" asset_width="500" asset_height="500" audio_player_vars="bg=0xFF0000&loop=no" />

### Transforming input

    <v:text text="hello world" maxlendth="8" transform="uppercase" />

Would render:

    HELLO WO ...

Number formatting:

    <v:text after=".9876" before="7" text="100000" number_format="2" />

Would render:

    7,100,000.99
