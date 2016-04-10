---
layout: docs
title: # `<v:facebook_like>`{#v_facebook_like}
---

# `<v:facebook_like>`{#v_facebook_like}

Renders a [Facebook Like
Button](http://developers.facebook.com/docs/reference/plugins/like) and
displays the Facebook photos of people who have Liked your content.

To customize how your site shows up when users share your page with the
Like button, you can add meta data to the headers of your web pages:

-   `og:title` - The title of your page; if not specified, the title
    element will be used.

-   `og:site_name` - The name of your web site, e.g., "CNN" or "IMDb".

-   `og:image` - The URL of the best picture for this page. The image
    must be at least 50px by 50px and have a maximum aspect ratio
    of 3:1.

You do not need a Facebook Developer or App account to use this tag.

## Required Attributes

-   None.

## Optional Attributes

-   `action` - set to either `like` or `recommend` to set the
    button text. If omitted, we use a default value of `like`.

-   `colorscheme` - set to either `light` or `dark` to set the
    color scheme. If omitted, we use a default value of `light`.

-   `layout` - set to either `standard` or `button_count` to set the
    display layout. If omitted, we use a default value of `standard`.

-   `path` - if specified, Vae will use the permalink of the entry
    specified in path as the URL to like. If omitted and the current
    context has a permalink, that will be used. Set this to `/` to
    ignore any current contexts and use the current page URL.

-   `width` - width in pixels of the Facebook frame area. Default is
    `450`.

## Self Closed

This tag is usually self-closed.

## Sample Usage

    <v:facebook_like width="450" />
