---
layout: docs
title: "SEO: Search Engine Optimization"
---

# SEO: Search Engine Optimization

Search Engine Optimization is a very broad topic and encompasses several
types of things you might do to make your website more highly regarded
by search engines. We are not an SEO company and we don't guarantee that
we will get you to the top of Google. However, we are aware of several
best-practices and have built Vae in such a way that makes it easy to
follow these SEO best-practices.

An important thing for SEO is to have clean looking URLs that contain
the relevant keywords for a given page. Vae makes this very easy to
accomplish through its [Permalink](#permalinks) mechanism. However, Vae
also offers some features that allow even non-permalink URLs to be made
clean.

When referencing a page on a Vae site, you may omit the file extension
in the URL. For example, to access the page `about.haml.php`, you can
simply go to `http://<yoursite>.vaesite.com/about`. This shortens your
URLs and makes keywords stand out, which is helpful for SEO.

Additionally, Vae makes it easy to generate RSS feeds through the
`<v:rss>` tag. This tag can also be used to generate feeds for Google
Base (which powers Google Shopping). If your site has a well-defined
structure, you can also use VaeML to generate sitemaps as well. There's
no specific VaeML tag for this, however, a sitemap is just an XML file
that you can build just like any other XML file.
