---
layout: docs
title: "<v> shortcuts"
---

# `<v>` shortcuts

These are not VaeML tags; they are shortcuts that you can also use
inside VaeML pages. These shortcuts are especially powerful because they
can be used inside attributes of other VaeML tags.

## `<v=path>` - Access data

The `<v=path>` shortcut returns the value of that path (relative to the
current context), regardless of what type of structure that path
represents. (Uses [VaeQL](#vaeql) syntax).

For example, `<v=contact/phone_number>` is equivalent to
`<v:text path="contact/phone_number" />`, if `content/phone_number` is
stored as a text field.

For images, files, or video, the `<v=path>` shortcut will return the
local URL for that image, file, or video. For example,
`<v=contact/company_photo>` is equivalent to
`<v:imurl path="contact/company_photo" />`.

For collections, the `<v=path>` shortcut will return the ID of the
collection. For associations, the `<v=path>` shortcut will return the ID
of the associated entry.

This shortcut is especially handy because it can also be used inside
other HTML tags or attributes. It should also be used inside tags that
don't support rendering HTML elements inside them (such as `<title>`).

### Specifying image or video sizes

You can specify image or video sizes through the `<v=path>` shortcut as
well.

To resize an image to specific pixel dimensions for width and height,
simply separate them by commas, like this: `<v=image,640,480>`. To
resize to a named crop or video size, just specify its name like this:
`<v=image,Square>`.

### Sample Code

    <!-- use the data in a text field as the ALT text for an image -->
    <img src="help.gif" alt="<v=/help/button_caption>" />

    <!-- use an uploaded image as the background for a <div> -->
    <div style="background: url(<v=/styles/background_image,480,360>);"></div>

## `<v~> and <v~path>` - Permalinks

The `<v~>` shortcut returns the permalink of the current entry. The
`<v~path>` shortcut returns the permalink of the entry pointed to by the
supplied path.

### Sample Code

    <v:collection path="artists">
     The permalink to this artist is <v~>.
     The permalink to this artist's first album is <v~albums[1]>.
    </v:collection>

## `<v->` - Current entry ID

The `<v->` shortcut returns the ID of the current entry.

This is very useful for integrating with Javascript libraries or custom
Javascript code. You can use it to put your items inside uniquely
numbered `<div>` tags.

### Sample Code

    <v:collection path="items">
     <div id="item_<v->">
      This is an item.
     </div>
    </v:collection>

## `<v? ?>` - Execute PHP code

The `<v? ?>` executes PHP code within the current context. This is just
a wrapper around `<v:php>` and works just like `<v:php>`. The variable
`$context` is populated with the data from the current context.

You may also use an equals sign at the beginning of the shortcut
(`<v?=                 ?>`) to directly display the output of a PHP
function. This works just like the native PHP `<?= ?>` shortcut tag.

### Sample Code

    <v:collection path="items">
     <!-- show the first 20 characters of the name -->
     <v?=substr($context['name'], 0, 20)?>
    </v:collection>
