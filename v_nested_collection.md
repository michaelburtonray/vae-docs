---
layout: docs
title: "<v:nested_collection>"
---

# `<v:nested_collection>`

Iterates over a Vae Nested Collection and renders the text and tags
inside once for every entry, including child entries.

You may nest a [`<v:divider>`](#v_divider) tag inside this tag to
specify a divider that is shown after each entry or after a certain
number of entries. Dividers can also wrap the entry content.

You may nest a [`<v:nested_divider>`](#v_nested_divider) tag inside this
tag to specify a divider that is shown after each nesting level or after
a certain number of nesting levels. Nested dividers can also wrap the
nested entry content.

## Required Attributes

-   `path` - path to the collection you would like to render. Uses
    [VaeQL](#vaeql) syntax.

## Optional Attributes

-   `filter` - specify text representing a search query. Only entries
    matching the search query will be returned.

-   `filter_input` - specify the name of a GET or POST parameter
    containing a search query. Only entries matching the search query
    will be returned.

-   `order` - If set to the the name of a structure in this collection,
    the collection will be sorted by that structure. You may also sort
    by multiple structures by separating them with a comma. You may sort
    by a structure in descending order by wrapping the structure name
    with `DESC()`, such as `DESC(name)`. You may sort by the number of
    entries in a child collection by wrapping the child collection name
    with `COUNT()`, such as `COUNT(comments)`. You can reverse the order
    stored in Vae by setting this attribute to `DESC()`. You can display
    elements in a random order by setting this attribute to `RAND()`.

## See Also

`<v:divider>`, `<v:nested_divider>`.

## Sample Usage

List all categories (including children) without hierarchy:

    <v:nested_collection path="categories">
     <v:text path="name" />
    </v:collection>

List all categories in a hierarchical list:

    <v:nested_collection path="categories">
     <v:text path="name" />
     <v:divider><li><v:yield /></li></v:divider>
     <v:nested_divider><ul><v:yield /></ul></v:nested_divider>
    </v:collection>
