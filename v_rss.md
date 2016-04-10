---
layout: docs
title: "<v:rss>{#v_rss}"
---

# `<v:rss>`{#v_rss}

Generates an RSS feed from one or more collections of data on Vae.
Generally this tag would be put into a file by itself, perhaps called
`rss.xml`.

Tags inside this tag will be rendered in the context of each item and
inserted into the RSS feed. This is useful for adding custom tags. Vae
will automatically add the namespace declaration for Google Base if you
use Google Base tags.

## Required Attributes

-   `title` - title for the RSS feed.

-   `description` - description for the RSS feed.

-   `path` - path to the collection(s) to include in the RSS feed. Uses
    [VaeQL](#vaeql) syntax. Separate multiple paths with a comma.

-   `title_field` - path to the structure within each collection that
    contains the text that should be used for the RSS title field.
    Separate multiple paths with a comma.

-   `description_field` - path to the structure within each collection
    that contains the text that should be used for the RSS
    description field. Separate multiple paths with a comma. If this
    structure is an image, it will be rendered inside an HTML `<img>`
    tag within the RSS Feed.

-   `author_field` - path to the structure within each collection that
    contains the text that should be used for the RSS author field.
    Separate multiple paths with a comma.

## Optional Attributes

-   `order` - Structure to sort entries by. You may also sort by
    multiple structures by separating them with a comma. You may sort by
    a structure in descending order by wrapping the structure name with
    `DESC()`, such as `DESC(name)`. You can reverse the order stored in
    Vae by setting this attribute to `DESC()`.

## Sample Usage

Simple example, feeding the posts from a Blog:

    <v:rss title="My Site" description="My blog feed." path="posts" title_field="title" description_field="content" />

Creating a feed in Google Base format for submitting products to Google:

    <v:rss title="My Site" description="My products." path="products" title_field="name" description_field="description">
     <g:brand>My Brand</g:brand>
     <g:color><v=color></g:color>
     <g:condition>new</g:condition>
     <g:id><v-></g:id>
     <g:image_link><v=image></g:image_link>
     <g:payment_accepted>Visa</g:payment_accepted>
     <g:payment_accepted>MasterCard</g:payment_accepted>
     <g:payment_accepted>AmericanExpress</g:payment_accepted>
     <g:payment_accepted>Discover</g:payment_accepted>
     <g:price><v=price></g:price>
     <g:weight><v=weight></g:weight>
    </v:rss>
