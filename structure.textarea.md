---
layout: docs
title: # Text Area
---

# Text Area

A Text Area Structure stores muliple lines of unformatted text. It is
good for text blocks that range from a sentence to a few paragraphs. For
anything larger than that, we would recommend the [Rich Text
Area](#structure.richtext).

  ---------------------------------------- -------------------------------------------------------------------------------------
  Common Use Examples:                     Bio, Description, Sizing Chart
  Supported [Validations](#validations):   Presence and length.
  Related [VaeML](#vaeml) Tags:            The `<v:text>` tag is commonly used to render data stored in a Text Area structure.
  ---------------------------------------- -------------------------------------------------------------------------------------

  : Fast Facts About the Text Area structure

If trying to decide between using a [Text](#structure.text) structure
and a Text Area, a good rule of thumb is that text areas are usually
used wherever at least one full sentence would be required.
[Text](#structure.text) structures are generally used for fragments,
such as names and titles.

> **Caution**
>
> By default, HTML entered into a text area is rendered exactly as it is
> input (tags will not be interpreted). This behavior can be altered by
> passing the `raw="true"` parameter to the `<v:text>` tag.

## Backstage Look and Feel

The Text Area structure editing widget looks like a larger text input
box:

An entry with a Text Area structure visible in list view looks like
this:
