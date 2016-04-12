---
layout: docs
title: PHP Integration
---

# PHP Integration

You can use Vae PHP integration to access your Vae content through the
PHP programming language.

PHP integration may be used on any page named with a `.php` extension or
inside any VaeML page inside the `<v:php>` VaeML tag. The API is
available in all pages automatically and you do not need to include any
special tags or include any libraries.

## PHP Integration API

The PHP Integration API is a collection of PHP functions that allow you
to access and update your Vae data. Vae's PHP integration provides
access to all of your data, but not necessarily with the same ease or
finesse as VaeML.

We think that almost anything is doable within VaeML, but we provide the
PHP Integration API as a fallback to ensure that we can handle any
situation.

If you are reading this guide straight through, it is probably worth
skimming through each function to see all the things that are possible
in the PHP Integration API. Beyond that, it is mostly useful as a
reference.

## Building Vae Extensions with PHP

The Vae PHP Integration API also provides some functions that enable you
to build extensions to the VaeML parser. You can actually create your
own VaeML tags, VaeQL functions, and callback hooks that run when
different events happen.

This is done by calling by registering a PHP function with Vae that will
get called at the appropriate time (when a tag is ready to be rendered,
the VaeQL function needs to be run, or a specific event happened).

To register code to execute when an event happens, use
`vae_register_hook()`. To define a new VaeML tag, use
`vae_register_tag()`.

We used to support another function called `vae_register_func()` to
register a function that could be used in VaeQL, but it is no longer
necessary. All PHP functions are now made available to VaeQL
automatically.
