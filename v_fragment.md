---
layout: docs
title: "<v:fragment>"
---

# `<v:fragment>`

This tag has 2 uses.

Use 1. Used within [`<v:template>`](#v_template) tags to define a named
fragment of HTML code, which will be rendered in a specific location in
a template file. Specifically, the text and tags within this tag will be
displayed where there is a [`<v:yield>`](#v_yield) tag with a matching
`for` attribute in the template file.

In this sense, fragments are useful because they make it possible to
inject content into different parts of a template file.

> **Warning**
>
> The `<v:fragment>` must be a direct child of `<v:template>`. For
> instance, if a `<v:fragment>` tag is placed within `<v:if>` tags, the
> fragment will not be found by a `<v:yield>` tag.

Use 2. When used with the `cache` attribute, it will cache the rendered
contents of everything inside the fragment. This allows you to speed up
your site by avoiding re-rendering common elements, such as menus.

## Required Attributes - Use 1 (templates)

-   `for` - the name of the fragment, which should match the `for`
    attribute in a `<v:yield>` tag of the template file.

## Required Attributes - Use 2 (caching)

-   `cache` - key for the cached fragment. This should be set to
    something that describes the fragment, such as `menu`.

## Sample Usage - Use 1 (templates)

In your template file (for example `__template.html`):

    <html>
     <head>
      <title>My Website</title>
      <v:yield for="header" />
     </head>
     <body>
      <h1>My Website</h1>
      <v:yield />
     </body>
    </html>

In your content file (for example `index.html`):

    <v:template filename="__template">
     <v:fragment for="header">
      <meta name="description" content="Pricing and Signup info" />
     </v:fragment>
     <p>Welcome to my website.</p>
    </v:template>

Would render:

    <html>
     <head>
      <title>My Website</title>
      <meta name="description" content="Pricing and Signup info" />
     </head>
     <body>
      <h1>My Website</h1>
      <p>Welcome to my website.</p>
     </body>
    </html>

## Sample Usage - Use 2 (caching)

In multiple files (or a template file):

    <v:fragment cache="menu">
     Put your menu here
    </v:fragment>
