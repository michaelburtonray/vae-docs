# `<v:pagination>`{#v_pagination}

Renders a set of page links for a `<v:collection>` tag that is being
paginated. The CSS class for the current page is set to `current`.

You may nest a [`<v:divider>`](#v_divider) tag inside this tag to
specify a divider that is shown after each page number link or after a
certain number of page number links. Dividers can also wrap the each
page number link.

## Required Attributes

-   `collection` - `id` of the `<v:collection>` tag that is
    being paginated.

## Optional Attributes

-   `ajax` - ID of the `<div>` container to load the page links into
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

-   `loading` - if using the `ajax` attribute, this option may be set to
    the path of an image that will be used as a loading
    'spinner' indicator.

-   `loadingposition` - if using the `loading` attribute, this option
    may be set to `before` or `after` to control the placement of the
    loading indicator.

-   `max_to_show` - Only show this many page numbers at a maximum. For
    example, setting this to `5` could produce output like this if the
    current page was page 6:

        4 5 6 7 8

-   `oncomplete` - if using the `ajax` attribute, you may place
    Javascript code here that will be run after the page has loaded
    via AJAX.

## Sample Usage

    <v:collection paginate="10" id="items">
     ...
    </v:collection>
    <v:pagination collection="items" />

Would render something like:

    ...
    <a href="?items_page=1" class="current">1</a> 
    <a href="?items_page=2">2</a> 
    <a href="?items_page=3">3</a>
