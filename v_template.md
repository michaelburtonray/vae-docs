---
layout: docs
title: "<v:template>"
---

# `<v:template>`

Used to include a template file that will wrap the content of the
current page. Useful for breaking repeated code segments, such as
layouts, headers, and footers, off into their own own file(s).

The template file being included may include one or more
[`<v:yield>`](#v_yield) tags. You may nest zero or more `<v:fragment>`
tags inside this tag to create named fragments of HTML code that will be
rendered at difference places in the template.

## Required Attributes

-   `filename` - path to the template file name. If the file name ends
    in `.html`, `.haml`, or `.php`, you may omit that extension. (Files
    are searched in that order). This filename should be relative to the
    web root.

## Optional Attributes

-   `title` - if set, sets request parameter `title` to the value
    provided here. This is usually used to update the `<title>` tag for
    inside pages.

## Sample Usage

In your template file (for example `__template.html`):

    <html>
     <head>
      <title>My Website</title>
     </head>
     <body>
      <h1>My Website</h1>
      <v:yield />
     </body>
    </html>

In your content file (for example `index.html`):

    <v:template filename="__template">
     <p>Welcome to my website.</p>
    </v:template>

Would render:

    <html>
     <head>
      <title>My Website</title>
     </head>
     <body>
      <h1>My Website</h1>
      <p>Welcome to my website.</p>
     </body>
    </html>

We can also use the `title` attribute to set the title of the page that
will go in the HTML `<title>` tag.

In your template file (for example `__template.html`):

    <html>
     <head>
      <title>
       <v:if param="title">
        <v:text param="title" /> | My Website
       </v:if>
       <v:else>My Website</v:else>
      </title>
     </head>
     <body>
      <h1>My Website</h1>
      <v:yield />
     </body>
    </html>

In your content file (for example `index.html`):

    <v:template filename="__template" title="Features">
     <p>These are the features.</p>
    </v:template>

Would render:

    <html>
     <head>
      <title>Features | My Website</title>
     </head>
     <body>
      <h1>My Website</h1>
      <p>These are the features.</p>
     </body>
    </html>
