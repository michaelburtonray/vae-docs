---
layout: docs
title: "&lt;v:date_selection&gt;"
---

# `<v:date_selection>`

Renders a set of date links that represent the date range associated
with a set of entries. This is commonly used to build archive sections
for blogs that show posts by year, month, or day. The CSS class for the
currently selected date range is set to `current`.

You may nest a [`<v:divider>`](/v_divider/) tag inside this tag to
specify a divider that is shown after each date link or after a certain
number of date links. Dividers can also wrap the each dater link.

## Required Attributes

-   `path` - path of the data to use to obtain the date range. If you
    set this to point to a collection of blog posts, only days, months,
    or years that have actual posts will be rendered.

-   `date_field` - name of the Date structure within each entry pointed
    to by `path`.

## Optional Attributes

-   `href` - page to link to. Defaults to the current page.

-   `param` - URL parameter to contain the date value. Defaults to
    `date`.

-   `strftime` - provide a [strftime format
    string](http://www.php.net/strftime) in this attribute and it will
    be used to format the date displayed in the link as well as set the
    granularity of the date ranges. If you display a day value, links
    will be generated for each day there is an entry. If you display
    only a month and year, links will be generated for each month where
    there is an entry. If you display only a year, links will be
    generated for each year. In addition to the standard format
    parameters, Vae also supports a custom `%N` format string that
    includes the count of matching entries for this date range. Defaults
    to `%B %Y` which renders a link for each month in the format
    `January 2009`.

## Sample Usage

{% highlight html %}
<v:date_selection path="posts" date_field="date" />
{% endhighlight %}

Would render something like:

{% highlight html %}
<a href="?date=2008-08">August 2008</a> <a href="?date=2008-07">July 2008</a>
{% endhighlight %}

Here's how you would then display the post from the selected date range:

{% highlight html %}
<v:collection path="posts[date=DATE($date)]">
</v:collection>
{% endhighlight %}
