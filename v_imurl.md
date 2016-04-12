---
layout: docs
title: "<v:imurl>"
---

# `<v:imurl>`

Outputs the URL for an image uploaded to a Vae image structure. This tag
is rarely used, but is useful if you need to provide a direct link or
prompt a user to download a processed image.

## Required Attributes

-   `path` - the path to the Vae image structure you wish to render.
    Uses [VaeQL](/vaeql/) syntax.

## Optional Attributes

You may use any attributes that are accepted by the `<v:img>` tag.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    The URL of our Employee Photo is:
    <v:imurl path="about_us/photo_of_employees" width="320" height="240" />
