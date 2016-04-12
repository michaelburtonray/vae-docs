---
layout: docs
title: "<v:facebook_comments>"
---

# `<v:facebook_comments>`

Renders a [Facebook Comment
Box](http://developers.facebook.com/docs/reference/plugins/comments)
which allows Facebook users to comment on your page.

Including this tag automatically includes Facebook's Javascript SDK and
XFBML capabilities onto your page.

## Required Attributes

-   `appid` - Facebook App ID as assigned by Facebook. You need to
    register your website with Facebook to get this ID.

## Optional Attributes

-   `paginate` - how many comments to show per page. If omitted, we use
    a default value of `10`.

-   `path` - if specified, Vae will associate the comments with the
    entry specified in path. If omitted and there is a current context,
    the comments will be associated with the current context. Set this
    to `/` to ignore any current associate comments with the current
    page URL.

-   `width` - width in pixels of the Facebook comments frame area.
    Default is `450`.

## Self Closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
<v:facebook_comments appid="12345" paginate="15" width="450" />
{% endhighlight %}
