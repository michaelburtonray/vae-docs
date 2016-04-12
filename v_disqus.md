---
layout: docs
title: "&lt;v:disqus&gt;"
---

# `<v:disqus>`

Renders a [Disqus](http://disqus.com/) discussion area. You must first
[register your site with Disqus](http://disqus.com/comments/register/).
Note the Site Shortname, as you will need this for the tag. You do not
need to do any integration beyond the signup process and putting this
tag in your page.

## Required Attributes

-   `shortname` - Disqus Site Shortname as assigned by Disqus. This is
    set when you register your site with Disqus.

## Optional Attributes

-   `css` - Disqus uses an iframe to do all posting, including
    commenting and authentication. Set this to the full URL to a CSS
    stylesheet to use that stylesheet within the iframe.

## Self Closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
Comment on this article:
<v:disqus shortname="vaeplatform" />
{% endhighlight %}
