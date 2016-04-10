---
layout: docs
title: # `<v:nested_divider>`{#v_nested_divider}
---

# `<v:nested_divider>`{#v_nested_divider}

This tag is used to insert HTML code between or around the hierarchy
levels in the [`<v:nested_collection>`](#v_nested_collection) tag. There
are 2 ways to use this tag. If the tag contains a `<v:yield>` tag, the
contents of this tag will wrap each level in the tree, with the
`<v:yield>` tag denoting where the rendered HTML from each entry will
go. If this tag does not contain a `<v:yield>` tag, the content between
the `<v:nested_divider>` and `</v:nested_divider>` will be inserted as a
divider between levels.

By default the divider will appear after/around each level, but you can
pass in the `every` attribute to specify how often the divider should be
displayed.

Note that you may include multiple `<v:nested_divider>` within a
[`<v:nested_collection>`](#v_nested_collection) tag The individual
`<v:nested_divider>` tags may have different values for the `every`
attribute.

> **Warning**
>
> This tag only works inside of a
> [`<v:nested_collection>`](#v_nested_collection) tag.

## Required Attributes

None.

## Optional Attributes

-   `every` - if set to a number *x*, the divider will be rendered after
    every *x* entries in the collection are rendered.

## Sample Usage

    <v:nested_collection path="categories">
     <v:text path="name" />
     <v:divider><li><v:yield /></li></v:divider>
     <v:nested_divider><ul><v:yield /></ul></v:nested_divider>
    </v:collection>
