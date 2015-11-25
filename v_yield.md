# `<v:yield>`{#v_yield}

Used in a template file to mark the part of the file that will be filled
in by the original content page or page fragment. See the documentation
for the [`<v:template>`](#v_template) tag for more information about
templates.

Additional `<v:yield>` tags may exist within the same file if they are
used with a `for` attribute, which includes specific
[fragments](#v_fragment) from the original content page.

The `<v:yield>` tag is also used on newsletter templates. Within
newsletter templates, the attributes `asset_width` and `asset_height`
are available to scale image assets inside the newsletter.

## Required Attributes

None.

## Optional Attributes

-   `asset_height` - maximum height for image assets within this
    template (available for newsletter templates only).

-   `asset_width` - maximum width for image assets within this template
    (available for newsletter templates only).

-   `for` - the fragment from the page to be rendered. If this value is
    set, only the specified fragment will be rendered, not the the
    entire content page.

    If the `for` attribute is not specified within a `<v:yield>` tag,
    all non-fragment portions of the content page are rendered.

## Inner Content

If no content is available to render, the tags and text nested inside
this tag will be rendered. This tag can be self-closed if you do not
wish to provide a default value to use when no content is available to
be rendered.

## Sample Usage

### Example \#1 (Without 'for' attribute)

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

### Example \#2 (With 'for' attribute)

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
      <meta name="description" value="Pricing and Signup info" />
     </head>
     <body>
      <h1>My Website</h1>
      <p>Welcome to my website.</p>
     </body>

## Example \#3 (Specifying a Default Value)

If no fragment `contact` existed in your content file, and the following
code was in your template file:

    <v:yield for="contact">
     Contact us at support@actionverb.com
    </v:yield>

The default value specified would be rendered:

    Contact us at support@actionverb.com

If no default value had been set, this would have rendered blank.
