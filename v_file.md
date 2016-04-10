---
layout: docs
title: "<v:file>{#v_file}"
---

# `<v:file>`{#v_file}

Outputs an HTML link (`<a>` tag) that will initiate a download of a file
(stored in a [File](#structure.file) or [Image](#structure.image)
structure) when clicked on by the user.

Everything between the opening and closing tag is used as the body of
the link (it will go between the opening and closing `<a>` tags that are
generated).

## Required Attributes

-   `path` - the path to the Vae file or image structure. Uses
    [VaeQL](#vaeql) syntax.

## Optional Attributes

-   `filename` - filename that the file will be downloaded as. Do not
    include an extension here, it will be filled in from the content
    as uploaded. For example, if the `filename` attribute was set to
    `PressPhoto` and the photo uploaded was of type `.jpg`, the file
    would download as `PressPhoto.jpg`.

Since this tag generates an HTML `<a>` tag, you may also use any
standard HTML attributes that are valid in the `<a>` tag. These will be
passed through unchanged into the generated tag.

## Sample Usage

    <v:file path="about_us/photo_of_employees" filename="PhotoOfEmployees">
     Click to download our Photo
    </v:file>
