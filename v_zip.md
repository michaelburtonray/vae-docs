---
layout: docs
title: "<v:zip>"
---

# `<v:zip>`

Builds a ZIP file containing files stored in Vae.

Unless the `direct` attribute is set, it outputs an HTML link (`a` tag)
that will initiate a download of the ZIP file when clicked on by the
user.

Everything between the opening and closing tag that is not in another
Vae tag is used as the body of the link.

Put [`<v:file>`](#v_file) tags inside this tag to include files in the
ZIP. Any other interior Vae tags will not be rendered.

## Required Attributes

None.

## Optional Attributes

-   `filename` - If set, this will be the filename of the generated
    ZIP file. Default is `Archive`.

-   `direct` - if set to `true`, the ZIP file download will start when
    this page is loaded (and nothing else on the page will be rendered).

## Sample Usage

    <v:zip filename="Your MP3 Downloads">
     Click to download a ZIP of all MP3s
     <v:collection path="mp3s">
      <v:file path="mp3" filename="<v=name>" />
     </v:collection>
    </v:zip>
