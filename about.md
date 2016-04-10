---
layout: docs
title: # About Vae
---

# About Vae

> Vae has changed my entire business as a web designer. Before Vae, I
> would build a site for a client and be stuck doing updates into
> eternity. Now I'm able to pass the completed site to the client and
> move onto the next.
>
> — Greg Passuntino, the first Vae Designer Partner Program member

If you're reading this guide, you're probably a web designer or
developer. You know how important it is for every business to have a
website. Every business without a website is *losing business* to
businesses with websites. Even in a recession, the web design industry
is thriving. There is a massive demand for good web designers, because
not only does every business need a website, every business needs the
*best* website.

For a website to be the *best*, it needs to contain relevant and current
information. The website for a concert hall better have a full list of
upcoming shows, complete with their set times, prices, and other
information. It should also have photo galleries from previous shows,
the restaurant menu, reviews, press, and more. Visitors to the concert
hall website expect this information, and if it isn't there, they'll be
going to a different concert hall.

We call all of this information content. By definition, content is
constantly changing. Every day, new photos are taken, and new shows are
added to the lineup. The menu is tweaked, and new reviews are collected.
Web designers should provide their clients the ability to add and update
the content on their websites, and this is exactly what Vae does.

If you're a web designer and you're currently delivering websites with
static content hardcoded into HTML, you are doing your clients a
disservice, creating more work for yourself down the road, and reducing
your value by selling an inferior product. Fortunately, you're here now,
and we're going to have you delivering fresh, dynamic websites in no
time.

And if you're currently using a bulky CMS product, we hope that you'll
see Vae as a breath of fresh air.

Come follow along with us as we show you why Vae is the best way to
build websites for your clients.

# No Assumptions, No Hacking

If you've ever heard the phrase *Content Management System*, you might
associate it with PHP-based open source products, such as Drupal,
Joomla!, Mambo, or Plone. We're sorry. Working with these products
generally means cobbling together pre-built *modules* to inject content
into pre-made design *templates*. Modules and templates are often very
complicated and contain a lot of vendor-specific code. Because of this,
building a module or template from scratch is not usually feasible, so
most designers choose to make changes by hacking existing code. By
basically forcing designers to hack pre-built templates, these products
are making assumptions about how your website will look and operate.

Specifically, they tend to assume that the website will work like a
blog, with a few other widgets for other types of content. Of course, if
you're actually building a blog-type website, these systems are great
(and we have no problem if you go use them). However, if you need to do
something different (like build a calendar of concerts, each of which
has an associated photo gallery), you're going to be doing a lot of
hacking. And hacking Drupal modules is hard. You have to know PHP, and
you have to familiarize yourself with their giant function library and
API.

We designed Vae from the ground up to enable web designers to offer
their clients an interface to manage any type of content, regardless of
how it is organized. We make no assumptions about what your website will
do, be, or look like. There are no Vae templates. There are no Vae
modules. You will never have to edit code that you did not write. A new
Vae website is simply an empty directory, ready for you to add HTML,
images, and CSS. Or Flash, PHP, JSON, XML, or any number of other
things.

You might be wondering, then, how content is integrated into your HTML
code. This is done through VaeML, our awesome content presentation
language. VaeML tags go inside your HTML files just like any other HTML
tag, and are processed server-side. You can also use PHP anywhere on
your site for more advanced processing. But unlike those other CMS
solutions, the PHP code will be 100% written by you.

We'll get into more details on all of this in the coming pages.

# Separation of Content and Layout

Another flaw in most website publishing systems or content management
systems is a tight coupling between website layout and managed content.
Adobe Contribute does not even draw a distinction at all: its
fundamental unit of content is the *page*. If you want to have the same
content displayed on multiple pages, you have to edit it in both places.
This is unacceptable. Building the best website means that you need to
display the same content in multiple ways.

Going back to the concert hall example, you might want to have a full
calendar that lists all upcoming events, a feature section on the
homepage that displays the shows from the current week, and an archive
that lists all previous shows. In Vae, content is organized according to
what type of content it is, not where it is displayed, so these would
all be stored and represented as `Events`. Making one change in Vae will
update all the relevant parts of your website.

In the next chapter, we will look at how Vae organizes content into
structures in much greater detail. But one other important point here is
that a webpage layout is likely to change over time (both during
development and after), but the fundamental types of data you are
storing will remain fairly constant over time. A concert hall will
always have Events. A restaurant will always have a menu. For this
reason, content on sites powered by Vae is resilient to both small site
design changes and complete site overhauls. Your data lives in a
meaningful hierarchy, no matter how it is displayed on your site's
pages.

By the same token, Vae is completely agnostic to the display
technologies used by your site. You could use the same Vae content in a
Flash site, an HTML site, and an iPhone application. You could even do
these all from the same account.

## Example content organization on Vae

Let's take a moment to examine a sample content organization on Vae.

Consider a record label's website. What kind of data might they have to
keep track of? Perhaps the Artists signed to that label, those Artist's
albums, information about the artist, information about their albums,
and some general information about the record label.

One way to structure this would be:

-   Welcome Message (rich text)

-   Contact Information (rich text)

-   Artists

    -   Name (text)

    -   Bio (text area)

    -   Albums

        -   Title (text)

        -   Cover Art (image)

        -   Price (text)

        -   Weight (text)

        -   Inventory (text)

In the root level of this website, we have a `Welcome Message` Section,
a `Contact Information` Section, and an `Artists` Collection. We'll
learn about collections and sections in the next chapter, but for now,
just know that they can hold content.

The `Artists` collection that contains a Text Structure called `Name`, a
Text Area Structure called `Bio`, and a Collection called `Albums`. It's
important to notice that `Artists` is a Collection which contains
another Collection, `Albums`. Vae allows you to easily mirror a
real-life data hierarchy on your website.

Finally, `Albums` is a Collection which contains a Text Structure called
`Title`, an Image Structure called `Cover                     Art`, a
Text Structure called `Price`, a Text Structure called `Inventory`, and
a Text Structure called `Weight`. Those last three attributes will be
good to keep track of if we decide to set up eCommerce on on the record
label's website.

Of course, this is just the beginning of the content that we might want
to manage. Imagine other content that you might have for each artist,
for example MP3s, Press, Tour Dates, or Blog Posts. In Vae, managing
that content is as simple as setting up the necessary structures.

# Web Professionals Required

As a company, we frequently come under pressure from investors and
friends to make the Vae platform more accessible to nontechnical
designers. They want us to offer templates, pre-built sites, and wizards
to make it easier for individuals to create their own websites using Vae
without having to learn HTML.

These people don't get it. Vae was designed to make it easy to create
the best websites, and the best websites are always custom-built -- to
the exact specifications of each and every client. We believe that every
website should be designed by a professional web designer that is
intimately familar with HTML, CSS, FTP, and any other technologies that
may be necessary. Template-based websites will never be good enough for
us.

As such, we assume that anyone using Vae will be a good web designer who
has this knowledge. If you do not understand HTML, CSS, and a little
Javascript, Vae is probably not for you. Go develop these skills and
come back to us. Call us perfectionists, but we only want to be
associated with designers that are the cream of the crop.

We don't have any CSS editors, "visual style editors", templates, or
wizards. We give you full access to HTML, CSS, and PHP and a powerful
content presentation language called VaeML. Setting up content
management takes work, but in time it will be second nature and you will
be an even better designer than you were before.

# A Sampling of Vae Sites

Seeing is believing, so let's take a moment to check out some of the
different sites that have been built on Vae. Later, we'll circle back
and explore how some of them are managing their content, and how they've
integrated the content into their HTML code by using VaeML.

Here are 9 sites that we like a lot:

-   [Allido Records](http://www.allidorecords.com/)

-   [American Dictation](http://www.americandictation.com/)

-   [Bobble](http://www.waterbobble.com/)

-   [Colossal Media](http://www.colossalmedia.com/)

-   [Hint Fashion Magazine](http://www.hintmag.com/)

-   [Impose Magazine](http://www.imposemagazine.com/)

-   [Olsenboye](http://www.olsenboye.com/)

-   [Peeptoe Shoes](http://www.peeptoeshoes.com.au/)

-   [Sam Edelman](http://www.samedelman.com/)

We picked these sites because they display a wide variety of ways that
Vae can be used. Some are magazines/blogs, others are online stores.
Some have both. The Bobble site uses Flash, and the Sam Edelman site
uses video. Hint Magazine showcases our built-in integration with Disqus
for commenting, and American Dictation is a great example of how to
build an SEO-friendly online store.

Just to reiterate, these websites look nothing alike. But they (and
hundreds of others) are all being managed with 's content mangament and
eCommerce facilities.
