---
layout: docs
title: Separation of Content and Layout
---

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
