---
layout: docs
title: "<v:section>{#v_section}"
---

# `<v:section>`{#v_section}

Renders the text and tags inside relative to a new path context. This is
useful when an entire page or section of a page pertains to a particular
entry in a collection, as it helps you avoid having to specify the full
path to that entry every time.

## Required Attributes

-   `path` - the path to be set as the new context. Uses [VaeQL](#vaeql)
    syntax

## Optional Attributes

None.

## Sample Usage

The following two samples will output the same thing:

    <v:text path="locations/1/name" />
    <v:text path="locations/1/address" />
    <v:text path="locations/1/city" />,
    <v:text path="locations/1/state" />
    <v:text path="locations/1/zip" />

    <v:section path="locations/1">
     <v:text path="name" />
     <v:text path="address" />
     <v:text path="city" />,
     <v:text path="state" />
     <v:text path="zip" />
    </v:section>

The second one is a lot easier to read and avoids repetition within your
code.
