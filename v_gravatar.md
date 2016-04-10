---
layout: docs
title: "<v:gravatar>{#v_gravatar}"
---

# `<v:gravatar>`{#v_gravatar}

Renders a [Gravatar](http://gravatar.com/) image.

## Required Attributes

-   `email` - E-Mail address for the Gravatar you wish to display.

## Optional Attributes

-   `default` - default image to display if there is no Gravatar
    associated with that E-Mail address. Can either be an absolute URL
    to an image, or `wavatar`, `identicon`, or `monsterid` to use an
    automatically generated default.

-   `rating` - a value of `g`, `pg`, `r`, or `x` to specify the types of
    Gravatars you are willing to display. The ratings are similar to the
    MPAA-ratings for movies. If omitted, we use a default value of `g`.

-   `size` - specify an integer here to set the size of the Gravatar
    in pixels. Default is `80`.

## Self Closed

This tag is usually self-closed.

## Sample Usage

    <v:gravatar email="<v=email>" default="wavatar" rating="pg" size="128" />
