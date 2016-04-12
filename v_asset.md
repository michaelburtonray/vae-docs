---
layout: docs
title: "<v:asset>"
---

# `<v:asset>`

Combines Javascript and/or stylesheet files into one compressed download
and renders the appropriate `<link>` or `<script>` code for the combined
download in the document `<head>`.

An easy way to speed up page loads is to only send one compressed
Javascript and stylesheet file per page. This tag automates the process,
automatically generating a new compressed file every time an asset is
changed.

If you are loading the page via the [Vae Local Development
Environment](/vae_local/), Vae will not combine the Javascript and
stylesheet assets, but rather render individual `<link>` or `<script>`
tags for each asset. This should assist with debugging.

## Required Attributes (only one of the following is required):

-   `src` - the relative path to the asset in your website root.

-   `framework` - if set to the name of a Javascript framework, we will
    automatically link up the newest version of that framework for you.
    Acceptable values are: `dojo`,`jquery`, `jqueryui`, `mootools`,
    `prototype`, `swfobject`, and `yui`.

    To require a specific version, simply add a slash and the
    version required. You may specify the major version number, release
    number, or full version. Examples: `jquery/1`, `jquery/1.2`,
    `jquery/1.2.5`. We use the Google AJAX API Content Delivery Network,
    because we have found it to be very fast (and the bandwidth
    is free!).

## Optional Attributes

-   `debug` - if set to `true` or any other value, will render the
    `<link>` or `<script>` tag for this asset without combining it into
    the combined file. Useful for debugging.

-   `href` - alias for the `src` attribute.

-   `media` - specify which media types the stylesheet will be used for.
    Accepts any value that is valid for the `media` attribute of the
    HTML `<link>` tag, including `screen`, `print`, and `all`.

## Self Closed

This tag is usually self-closed.

## Sample Usage

This code:

{% highlight html %}
<html>
 <head>
  <v:asset framework="jquery/1" />
  <v:asset src="/javascripts/main.js" />
  <v:asset src="/javascripts/sifr.js" />
  <v:asset src="/javascripts/jquery.lightbox.js" />
  <v:asset src="/stylesheets/main.sass" />
  <v:asset src="/stylesheets/homepage.sass" />
  <v:asset src="/stylesheets/projects.sass" />
  <v:asset src="/stylesheets/lightbox.css" />
 </head>
 ...
</html>
{% endhighlight %}

Would render something like:

    <html>
     <head>
      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
      <script type="text/javascript" src="/__data/combined.js"></script>
      <link type="text/css" rel="stylesheet" href="/__data/combined.css" />
     </head>
     ...
    </html>
