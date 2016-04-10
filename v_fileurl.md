---
layout: docs
title: # `<v:fileurl>`{#v_fileurl}
---

# `<v:fileurl>`{#v_fileurl}

Outputs the URL for a file uploaded to a Vae file or image structure.
This tag is rarely used, but is useful if you need to provide a direct
link or prompt a user to download a file.

## Required Attributes

-   `path` - the path to the Vae file or image. Uses
    [VaeQL](#vaeql) syntax.

## Optional Attributes

None.

## Self Closed

This tag is usually self-closed.

## Sample Usage

    Here is the URL of our business plan: 
    <v:fileurl path="about_us/business_plan" />
