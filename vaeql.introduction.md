---
layout: docs
title: VaeQL
---

# VaeQL

VaeQL is our proprietary navigation and query language for specifying
exactly what content you want to display, use, or operate on. The VaeQL
syntax is based on XPath 1.0, a standard language for querying
structured data. If you already know XPath, you'll pick this up quickly.
If not, we'll get you up to speed.

VaeQL adds some helpful features to the XPath 1.0 standard, such as
ability to easily locate an individual item by its ID, predicate
functions that are aware of the environment, support for associations
and reverse associations, and the ability to extend the syntax with
additional functions.

## VaeQL Introduction

VaeQL expressions are similar to the paths that you use when working
with a computer file system. You can move up and down your hierarchy of
data by using `/` to move down and `../` to move up. Let's start with
some examples.

Every Vae structure that you create has a VaeQL name. By default this is
the name of the structure with all non-alphanumeric characters removed
and spaces replaced with underscores. So the default VaeQL name for a
section called `Homepage Gallery` would be `homepage_gallery`. And the
default VaeQL name for a root-level collection called `Projects` would
simply be `projects`.

For example, this chunk of [VaeML](/vaeml/) would display the names of
all the projects:

{% highlight html %}
<v:collection path="projects">
 <v:text path="name" />
</v:collection>
{% endhighlight %}

In the above code sample, `projects` and `name` are paths expressed with
VaeQL. These paths very simple, but VaeQL allows incredible flexibility.
Read on.

## Contexts and Traversal

Unless your specify otherwise, paths are interpreted relative to the
current context. So in the previous example, where we were inside a
collection called `Projects` and wanted to display the text field
`Name`, we only needed to refer to `name` in the VaeQL expression.

To jump out of the current context, you may begin your VaeQL expression
with a slash (`/`). In this example, we jump out of the context of the
collection to get the name of the current president of the company,
which is stored in a different structure:

{% highlight html %}
<v:collection path="projects">
 <v:text path="/overall/current_president" /> is proud to announce our new project:
 <v:text path="name" />
</v:collection>
{% endhighlight %}

Rather than jumping fully out, you can also navigate relative to the
current current. To go up a level in the path, use two dots (`..`). You
may traverse up as many levels as you'd like. In this example, we render
the artist and title of each song together, even though they're in
different collections:

{% highlight html %}
All songs:
<v:collection path="artists">
 <v:collection path="songs">
  <v:text path="../artist_name" /> - <v:text path="song_title" />
 </v:collection>
</v:collection>
{% endhighlight %}

You can also traverse downward (we'll explain the `[1]` and `[2]` in a
bit):

{% highlight html %}
<v:collection path="artists">
 Artist Name: <v:text path="artist_name" />
 Title of first song: <v:text path="songs/song_title[1]" />
 Title of second song: <v:text path="songs/song_title[2]" />
</v:collection>
{% endhighlight %}

## Default Context

Generally, the default context is the top level of your data hierarchy.
However, if the request parameter `$id` is set, the page was accessed
via a [Permalink](/permalinks/), or if an ID is provided in the path to
the page, the default context will be set to the item with that ID.
Linking with `<v:a>` automatically generates links in this form. So for
example, this code in `projects.html` would generate links that have the
project IDs in their path:

{% highlight html %}
<v:collection path="projects">
 <v:a href="/project"><v:text path="name" /></v:a>
</v:collection>
{% endhighlight %}

So in `project.html` you can directly access the fields in the project,
because the default context is set by the ID in the path:

{% highlight html %}
<v:ctext path="name" />
{% endhighlight %}

This will render the name of the Project, even though the context is not
explicitly set anywhere. If you want to back out of the default context,
simply begin your path expression with a slash, like so:

{% highlight html %}
<v:collection path="/projects">
 ...
</v:collection>
{% endhighlight %}

Because there will be different default contexts on different pages, we
generally recommend using a leading slash on all path expressions used
in template files.

## Finding items by ID

VaeQL provides a shortcut that allows you to locate any item by its ID
(which is globally unique across Vae). Simply pass in that ID as the
first part of your path. For example, this snippet will render the name
structure of entry number `12345`:

{% highlight html %}
<v:text path="12345/name" />
{% endhighlight %}

You can pull in data from request (GET or POST) parameters by simply
using a dollar sign (`$`) and the name of the parameter in your path
expression. This will be useful in cases involving finding a specific
item or conducting a search. For example:

{% highlight html %}
<v:text path="$location_id/name" />
{% endhighlight %}

You can also restrict your ID search to certain fields by putting them
before the ID. For example, this code would render the text in the name
structure of the entry with ID stored in parameter `$location_id`, but
only if that entry is part of the `locations` collection:

{% highlight html %}
<v:text path="/locations/$location_id/name" />
{% endhighlight %}

## Searching: Predicate expressions

Predicate expressions are the real powerhouse of VaeQL. You can search
and filter to only return results that match specific requirements.
Predicate expressions are built by putting conditions in square brackets
(`[]`) at the end of the path.

In this example, we search for items with a price of less than \$5:

{% highlight html %}
<v:collection path="items[price<5]">
 ...
</v:collection>
{% endhighlight %}

You may specify multiple expressions. Just stack them up. This would
search for items with a price of less than \$5 and a color of `White`.

{% highlight html %}
<v:collection path="items[price<5][color='White']">
 ...
</v:collection>
{% endhighlight %}

You may also use request parameters inside predicate expressions:

{% highlight html %}
<v:collection path="items[price<$max_price]">
 ...
</v:collection>
{% endhighlight %}

## Predicate Functions

In addition to all the normal functions provided by XPath, VaeQL also
provides a few functions of our own that are useful for searching:

-   `now()` - returns the current day. Useful for finding current vs.
    past events.

-   `clubtime()` - like `now()`, but treats the time from midnight-3AM
    as the previous day. Good for creating band or nightclub websites.

-   `date($date)` - special function that selects entries where the date
    value is within a certain year, month, or day. If `$date` is just a
    number, it is interpreted as a year and all entries from that year
    are returned. If `$date` is formatted like `2010-01`, it is treated
    as a month. If `$date` is formatted like `2010-07-23`, it is treated
    as a day.

-   `loggedin()` - returns the ID of the currently logged in user.

-   `path()` - returns the URL path of the current page.

-   `top()` - returns the ID of the current context.

Here is an example of searching for events that are upcoming:

{% highlight html %}
<v:collection path="events[date>now()]">
 ...
</v:collection>
{% endhighlight %}

## Associations

VaeQL automatically wires up Association fields (single or multi) for
ease of use. You can traverse into and up from an association just as
you would any other field. For example, if you had a collection called
`Properties` that had an association to an `Agent`, you can grab the
agent's name just by traversing:

{% highlight html %}
<v:collection path="properties">
 Property name: <v:text path="name" />
 Offered by: <v:text path="agent/name" />
</v:collection>
{% endhighlight %}

Once you traverse into an association you are inside of that context.
This means that if you traverse back up, you will go back up to the
parent of the associated structure, not back into your original context.
For example, say that `Agents` is actually a children of another
collection called `Branches`. You could do this:

{% highlight html %}
<v:collection path="properties">
 Property name: <v:text path="name" />
 Offered by: <v:text path="agent/name" />
 From this branch: <v:text path="agent/../name" />
</v:collection>
{% endhighlight %}

Multiple-item associations work the same way, except that since there
are many associated entries, you will want to treat them like a
collection:

{% highlight html %}
<v:collection path="properties">
 Similar properties:
 <v:collection path="similar_properties">
  <v:text path="name" />
 </v:collection>
</v:collection>
{% endhighlight %}

Single-item associations can also be used in reverse. Going back to our
`Properties` and `Agents` example, this is how you would list all
properties offered by an Agent:

{% highlight html %}
<!-- in Agent context -->
Agent name: <v:text path="name" />
<v:collection path="properties">
 Property name: <v:text path="name" />
</v:collection>
{% endhighlight %}

Note that in this case, there is no structure `properties` defined on
`agent`. VaeQL checks for that first, and since it doesn't exist, checks
to see if there is another collection called `properties` with an
association to the current agent – which is the case here.

## VaeQL Notes

Although we use [VaeML](/vaeml/) for all these examples, the syntax is
the same in our [PHP integration API](/php/). The only difference is that
`vae()` or `vae_find()` are not aware of context.

### Differences from XPath 1.0

VaeQL is largely compatible with XPath 1.0. The `|` operator for
combining nodesets is not guaranteed to work. It may work in certain
instances. If you notice any other differences, please bring them to our
attention, but we cannot guarantee that the XPath 1.0 behavior is
correct.

### External Resources

Here is an [outside tutorial on XPath](http://www.w3schools.com/Xpath/).
Although this covers generic XPath, and not our enhanced VaeQL syntax,
it is a great reference for XPath axes, which we generally support.
