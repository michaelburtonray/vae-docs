---
layout: docs
title: "<v:session_dump>{#v_session_dump}"
---

# `<v:session_dump>`{#v_session_dump}

Renders the contents of a PHP session variable. Useful in tandem with
`<v:collection>`'s `store_in_session` attribute or custom PHP code.

Using this tag is better than simply using PHP code (or the `<v:php>`
tag or its `<v? ?>` variant) because it does not prevent Vae from
caching the rendered version of the page and using that cache to serve
future requests (with the proper session value substituted in, of
course). Since serving cached pages can be up to 100 times faster than
rendering pages through the VaeML engine, this can yield great speedup.

## Required Attributes

-   `key` - key name of the PHP session variable to output. For example,
    setting this to `username` would cause the tag to render
    `$_SESSION['username']`.

## Optional Attributes

None.

## Self Closed

This tag is usually self-closed.

## Sample Usage

    Hello, <v:session_dump key="username" />.

Would render something like:

    Hello, Kevin.
