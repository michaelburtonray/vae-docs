---
layout: docs
title: # vae\_render\_tags()
---

# vae\_render\_tags() {#php_vae_render_tags}

Use the vae\_render\_tags() function to render the tags inside a `VaeML`
tag.

## Usage

`vae_render_tags($tag, $context, $condition, $render_context)`

-   `$tag` - VaeML tag containing the child tags that should
    be rendered.

-   `$context` - Current VaeQL context. Generally the current `$context`
    variable is passed through.

-   `$condition` - Defaults to `true`. If `false`, will instead render
    the contents of the associated `<v:else>` tag, if one exists.

-   `$render_context` - Current VaeML context. Generally the current
    `$render_context` variable is passed through.

## Returns

Returns the rendered contents of the tags.

## Sample Usage

See the page for `vae_register_tag()` for several samples.
