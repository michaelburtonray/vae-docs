---
layout: docs
title: # `<v:img>`{#v_img}
---

# `<v:img>`{#v_img}

Outputs an HTML `<img>` tag that will display the image uploaded to a
Vae [Image structure](#structure.image).

## Required Attributes

-   `path` - the path to the image structure that you would like
    to render. Uses [VaeQL](#vaeql) syntax.

## Optional Attributes

-   `filter` - set to `reflect` to apply an Apple-like reflection to
    the image. You may provide parameters for the reflection size (in
    pixels or percent) and opacity (in percent) by specifying them as
    optional function parameters, like this: `reflect(30px,35)`. That
    would create a 30 pixel reflection with 35% opacity.

    Or set this to `grey` to make the image greyscale.

-   `height` - maximum height for the image. If the uploaded image has
    height larger than this, the image will be proportionately resized
    to generate the image for this location.

-   `image_size` - If you have defined a specific Image Size for this
    image structure in the backstage, provide the name of the specific
    image size you created here and the image will be returned as
    cropped and scaled to that exact size.

-   `protect` - if set to `true` we will render a `<div>` tag with the
    `background-image` property set to display the image. This is
    provides a way to make it slightly tougher for your images to be
    downloaded and copied from your website. Of course, nothing will
    stop your users from being able to take a screenshot or view the
    source of the page, but some protection can be better than none.

-   `$quality` \[(optional)\] - set to an integer from 1 to 100 to
    define the JPG quality of the image. If the image is not a JPEG,
    this value is ignored.

-   `watermark` - path to image file to use to watermark this image. If
    the image file is a transparent PNG, the transparency will
    be preserved.

-   `watermark_align` - how to align the watermark horizontally.
    Acceptable values are `left`, `center`, or `right`. Default:
    `right`.

-   `watermark_horizontal_padding` - amount (in pixels) of horizontal
    padding to apply to the watermark.

-   `watermark_vertical_align` - how to align the watermark vertically.
    Acceptable values are `top`, `middle`, or `bottom`. Default:
    `bottom`.

-   `watermark_vertical_padding` - amount (in pixels) of vertical
    padding to apply to the watermark.

-   `width` - maximum width for the image. If the uploaded image has
    width larger than this, the image will be proportionately resized to
    generate the image for this location.

Since this tag generates an HTML `<img>` tag, you may also use any
standard HTML attributes that are valid in the `<img>` tag. These will
be passed through unchanged into the generated tag.

## Self Closed

This tag is usually self-closed.

## Sample Usage

Scaled:

    <v:img path="about_us/photo_of_employees" width="320" height="240" alt="Our Employee Photo" title="Our Employee Photo" />

Cropped:

    <v:img path="about_us/photo_of_employees" image_size="Square" />

Watermarked:

    <v:img path="about_us/photo_of_employees" image_size="Square" watermark="/images/logo.png" watermark_align="left" watermark_vertical_align="bottom" watermark_horizontal_padding="10" watermark_vertical_padding="10" />

Filtered:

    <v:img path="about_us/photo_of_employees" image_size="Square" filter="reflect(10%)" />
