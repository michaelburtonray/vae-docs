---
layout: docs
title: "<v:a>"
---

# `<v:a>`

Outputs an HTML link (`<a>` tag). The link can point to a URL that you
specify, a URL stored in a Vae text field, or the
[Permalink](#permalinks) of an entry. If this tag is used from within a
[`<v:collection>`](#v_collection) block, it will automatically append
the ID and title of the current entry to the link. By appending this ID
to the URL, you will be able to directly access attributes of that entry
on the new page.

This tag is often used to link to detail pages specific to an entry in a
collection. For example, there might be a page that lists all artists
and then uses the `<v:a>` tag to link to pages specific to each artist.

## Required Attributes

The `<v:a>` tag can be used in several different ways.

### Use 1 -- link to the permalink of the current entry

If neither the `href` nor `path` attributes are provided, Vae will
render a link to the permalink for the current entry. If the current
entry does not have a permalink, nothing will be rendered.

### Use 2 -- specify a link destination URL

-   `href` - link `href`. This will become the href attribute of the
    generated `a` tag.

If this tag is used from within a `<v:collection>` block, Vae will
automatically append the ID and title of the current item to the link.
If you want to use a different ID (for example a parent item or child
item), provide the relative path to that item in the `path` attribute.
To disable this behavior entirely, pass in the root path (`path=”/”`).

### Use 3 -- link to a URL specified in a Vae text item

-   `path` - the path to the Vae text item containing a URL. (Uses
    VaeQL syntax)

If this text item is blank, nothing will be rendered. (`<v:a>` won't
render an empty link.)

### Use 4 -- use this link as a Previous or Next link for pagination

-   `id` - give this link a unique ID and set the `previous=` or `next=`
    attribute of a `<v:collection>` tag to the ID of this tag. The
    `<v:collection>` must come before this tag in the page source.

If these aren't set properly, nothing will be rendered. (`<v:a>` won't
render an empty link.) Additionally, Vae won't render the Previous link
if the viewer is on page 1, and we won't render the Next link if the
viewer is on the last page unless the `wrap=` option is set in the
`<v:collection>` tag.

## Optional Attributes

-   `ajax` - ID of the `<div>` container to load this link into
    via AJAX. If this attribute is specified, Javascript code will be
    generated to make this link use AJAX to load its target into the
    specified container.

-   `ajaxbefore` - if using the `ajax` attribute, you may place
    Javascript code here that will be run as soon as the link is
    clicked, but before any of our AJAX code is executed. Return `false`
    from this code snippet to cancel processing.

-   `ajaxsuccess` - if using the `ajax` attribute, you may place
    Javascript code here that will be run after the page has loaded
    via AJAX.

-   `animate` - if using the `ajax` option, this option may be set to
    `slideDown` or `fadeIn` to animate in the new content.

-   `autofollow` - if set to the value of `true` and the `<v:a>` tag is
    within a `<v:collection>` that only has one item, a browser redirect
    will be sent to automatically send the visitor to the link target.
    This is useful when you wish to display a menu of choices when there
    are more than one, but direct the visitor directly to the only
    available choice if there is only one.

-   `jump` - jump to this anchor in the page when the link is clicked.
    Only works if the `ajax` attribute is specified. This is useful for
    ensuring that the container holding your AJAX'd content is visible
    when the link is clicked.

-   `loading` - if using the `ajax` attribute, this option may be set to
    the path of an image that will be used as a loading
    'spinner' indicator.

-   `loadingposition` - if using the `loading` attribute, this option
    may be set to `before` or `after` to control the placement of the
    loading indicator.

-   `oncomplete` - if using the `ajax` attribute, you may place
    Javascript code here that will be run after the page has loaded
    via AJAX.

Since this tag generates an HTML `<v:a>` tag, you may also use any
standard HTML attributes that are valid in the `<v:a>` tag. These will
be passed through unchanged into the generated tag.

## Sample Usage

This snippet of code:

    <v:collection path="locations">
     <p>
      <v:a href="/location">
       <v:text path="name" />
      </v:a>
     </p>
    </v:collection>

Would render something like:

    <p>
     <a href="/location/1">
      New York
     </a>
    </p>
    <p>
     <a href="/location/2">
      London
     </a>
    </p>

If the locations collection has [permalinks](#permalinks) defined, you
could omit the `href=` attribute entirely and Vae will render the
correct permalinks:

    <v:collection path="locations">
     <p>
      <v:a>
       <v:text path="name" />
      </v:a>
     </p>
    </v:collection>

Would render something like this (the exact permalinks would depend on
how you configured Permalinks in the backstage):

    <p>
     <a href="/new-york">
      New York
     </a>
    </p>
    <p>
     <a href="/london">
      London
     </a>
    </p>

Loading pages in via AJAX:

    <v:collection path="locations">
     <v:a ajax="location_area" animate="fadeIn" jump="location_area" loading="/images/spinner.gif" loadingposition="after">
      <v:text path="name" />
     </v:a>
    </v:collection>

    <div id="location_area" style="display: none;">
     <!-- pages will load here -->
    </div>
