---
layout: docs
title: "No Assumptions, No Hacking"
---

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
