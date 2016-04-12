---
layout: docs
title: Permalinks
---

# Permalinks

Vae can automatically generate permanent links (Permalinks) for entries
in collections. These links will be stored in Vae with each entry and
can be changed at any time. Vae will automatically map these permalinks
to a specific HTML (or Haml or PHP) page for each collection with a
Permalink defined.

To enable Permalinks for a collection, first create a HTML, Haml, or PHP
page that will be the page rendered when the permalink is visited. By
convention, this file is named the singular of the collection name. So
for a collection called `Artists`, you would create a file called
`artist.html`.

Then, in the Edit View for the collection on the [Site &gt; Content
Management tab](#backstage.site.content_management.properties) enter the
name of this page into the box for Permalink HTML Page. Vae will
automatically create a Permalink for each entry in the collection. As an
example, the default permalink for an entry with title Picasso would be
`http://<yourdomain>/artist/picasso`.

When `http://<yourdomain>/artist/picasso` is loaded in a browser, Vae
will render `artist.html` within the context of the *Picasso* entry. Vae
will also set the `id` request parameter to the ID of the Picasso entry.

You may customize the format of Permalinks by setting the Permalink
Format option on the Edit View for the collection on the [Site &gt;
Content Management tab](#backstage.site.content_management.properties).

To link to a page by its Permalink in VaeML, simply use the `<v:a>` tag
without specifying an `href=""`.
