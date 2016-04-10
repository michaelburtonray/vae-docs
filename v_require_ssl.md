---
layout: docs
title: # `<v:require_ssl>`{#v_require_ssl}
---

# `<v:require_ssl>`{#v_require_ssl}

Ensures that a page is being accessed via an SSL connection. If not, the
user will be redirected to the same page, but over `https://`. This is
useful for building form pages that need to accept sensitive data.

This functionality is implicitly invoked by `<v:store:checkout>`, so you
don't need to include this tag on your store checkout pages, but if you
plan to load in the checkout page via AJAX, you should make sure that
whatever page is loading it is on an SSL conncetion. This tag might be
useful in that situation.

## Required Attributes

None.

## Optional Attributes

None.

## Self-Closed

This tag is usually self-closed.

## Sample Usage

To ensure that a page is accessed via an SSL connection, add this to the
source:

    <v:require_ssl />
