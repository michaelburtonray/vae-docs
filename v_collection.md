---
layout: docs
title: "<v:collection>"
---

# `<v:collection>`{#v_collection}

Iterates over a Vae Collection and renders the text and tags inside once
for every entry. This tag is very flexible: you can paginate, search,
and sort the collection directly in this tag.

You may nest a [`<v:divider>`](#v_divider) tag inside this tag to
specify a divider that is shown after each entry or after a certain
number of entries. Dividers can also wrap the entry content.

## Required Attributes

-   `path` - path to the collection you would like to render. Uses
    [VaeQL](#vaeql) syntax.

## Optional Attributes

-   `all` - if using pagination, you can set this to the ID of a `<v:a>`
    element that will be used as a link that will show all entries on
    one page, bypassing the pagination.

-   `default_page` - applies if you are using pagination on
    this collection. If set to a number, that page number will be the
    default page shown. If set to `last()`, the last page will be the
    default page shown.

-   `filter` - specify text representing a search query. Only entries
    matching the search query will be returned.

-   `filter_input` - specify the name of a GET or POST parameter
    containing a search query. Only entries matching the search query
    will be returned.

-   `groups` - If you want display to different parts of the same
    collection on a page (for example half in a left column and half in
    a right column), set this attribute to the number of places you are
    putting the collection. See the samples below for more information.

-   `max_pages` - If using pagination, and this attribute is set to a
    number, no more than this many pages will be generated.

-   `next` - if using pagination, this is the ID of a `<v:a>` element
    that will be used as the link to navigate to the next page.

-   `order` - If set to the the name of a structure in this collection,
    the collection will be sorted by that structure. You may also sort
    by multiple structures by separating them with a comma. You may sort
    by a structure in descending order by wrapping the structure name
    with `DESC()`, such as `DESC(name)`. You may sort by the number of
    entries in a child collection by wrapping the child collection name
    with `COUNT()`, such as `COUNT(comments)`. You can reverse the order
    stored in Vae by setting this attribute to `DESC()`. You can display
    elements in a random order by setting this attribute to `RAND()`.

-   `output_order` - If set to `reverse`, the elements in your
    collection will be rendered in reverse order. Note that if you are
    using pagination, this will only render the items on the current
    page in reverse. No other pages will be affected. Items will be on
    the same page that they would have been without this attribute set.

-   `page_select` - if using `pagination`, this is the ID of a
    `<v:select>` element that will be used as the link to navigate to
    other pages. This element must come after the collection in
    the page. You only need to specify an `id` attribute in the
    `<v:select>` tag.

-   `paginate` - show no more than this many items per page.

-   `per_row` - this attribute allows `<v:collection>` to easily build a
    table by filling rows across. Set this attribute to the number of
    columns that should be in the table. `<tr>` tags will be generated
    automatically, but the contents of this tag should begin and end
    with a `<td>` and `</td>` tag. Please see the example literal.

-   `previous` - if using pagination, this is the ID of a `<v:a>`
    element that will be used as the link to navigate to the
    previous page. This element must come after the collection in
    the page. You only need to specify an `id` attribute in the
    `<v:a>` tag.

-   `skip` - if set to a number, that many items will be skipped before
    listing any contents.

-   `store_in_session` - If set, a comma-delimited list of the
    [permalinks](#permalinks) of all items that match this path and
    filter, in the sorted order, will be stored in the session under
    this name. Useful in combination with `<v:session_dump>`.

-   `unique` - If set to the the name of a structure in this collection,
    only unique values of that entry will be returned. You may require a
    unique combination of values in multiple structures by listing each
    structure separated by a comma.

-   `wrap` - if set to `true` and using pagination, the Next link on the
    last page will link to the first page and the Previous page on the
    first page will link to the last page. In other words, it
    wraps around.

## See Also

`<v:if_paginate>`, `<v:pagination>`.

## Sample Usage

Basic Sample:

    <v:collection path="locations">
     <p><v:text path="name" /></p>
    </v:collection>

Sample using the `groups` attribute:

    <table>
     <tr> 
     <td>
      This column will show the first half of the locations:
      <v:collection path="locations" groups="2">
       <p><v:text path="name" /></p>
      </v:collection>
     </td>
     <td>Something else</td>
     <td>
      This column will show the second half of the locations:
      <v:collection path="locations" groups="2">
       <p><v:text path="name" /></p>
      </v:collection>
      </td>
     </tr>
    </table>

Sample using the `per-row` attribute:

    <table>
     <v:collection path="locations" per-row="3">
      <td><v:text path="name" /></td>
     </v:collection>
    </table>

Sample search results page:

    <v:collection path="locations" filter_input="query">
     <p><v:text path="name" /></p>
    </v:collection>

Sample with sorting:

    <v:collection path="locations" order="country,state,city,name,DESC(date_added)">
     <p><v:text path="name" /></p>
    </v:collection>

Samples with pagination:

    <v:collection path="locations" paginate="10" page_select="page_selector">
     <p><v:text path="name" /></p>
    </v:collection>
    <v:select id="page_selector" />

    <v:collection path="locations" paginate="10" id="locations_collection">
     <p><v:text path="name" /></p>
    </v:collection>
    <v:pagination collection="locations_collection"  />

    <v:collection path="locations" paginate="10" previous="previous_link" next="next_link" wrap="true">
     <p><v:text path="name" /></p>
    </v:collection>
    <v:a id="previous_link">Previous Page</v:a>
    <v:a id="next_link">Next Page</v:a>
