---
layout: docs
title: "<v:if_time>"
---

# `<v:if_time>`{#v_if_time}

Renders its contents only if the current time is either before or after
a set time. Times are computed relative to the time zone associated with
your site, which can be set in the Site tab.

## Required Attributes

-   None.

## Optional Attributes

-   `after` - will render if the current time is after this time. Format
    for times is `MM/DD/YYYY HH:MM:SS`

-   `before` - will render if the current time is before this time.
    Format for times is `MM/DD/YYYY HH:MM:SS`

You may use both attributes to specify that the content will be rendered
if the time is between two times.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if the time is outside the specified range.

## Sample Usage

    <v:if_time before="4/12/2010 23:59:59">
     It is 4/12 or earlier!
    </v:if_time>
    <v:else>It is 4/13 or after!/v:else>
