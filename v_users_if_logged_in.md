---
layout: docs
title: "<v:users:if_logged_in>"
---

# `<v:users:if_logged_in>`

Renders its contents only if the current visitor is logged in.

## Required Attributes

None.

## Optional Attributes

-   `redirect` - if provided, the user will be redirected to this page
    if not logged in.

You may provide a `<v:else>` tag after this tag to specify HTML to
render if the user is not logged in.

## Sample Usage

    <v:users:if_logged_in>
      You are logged in.
    </v:users:if_logged_in>
    <v:else>You are not logged in.</v:else>

This will redirect the user to `/login` if they are not logged in.

    <v:users:if_logged_in redirect="/login">
      You are logged in.
    </v:users:if_logged_in>
