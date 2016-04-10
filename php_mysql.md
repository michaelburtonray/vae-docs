---
layout: docs
title: # PHP and MySQL
---

# PHP and MySQL

We support the latest version of [PHP](http://www.php.net/) and
[MySQL](http://www.mysql.com/) on all Vae accounts (although we strongly
discourage use of MySQL on Vae). Pages ending with the `.php` extension
will automatically be parsed as PHP.

You can create and delete MySQL Databases under the [Site &gt; MySQL
tab](#backstage.site.mysql) in the backstage.

You may use [VaeML](#vaeml) tags in PHP, but they will not be processed
until the entire PHP script has run. This is actually very powerful,
because it means that you can use PHP to *generate* VaeML code. Be
careful though, because generating VaeML in this way can make our
caching mechanisms less effective and slow down your website. Experiment
for yourself.

You may also use PHP within VaeML by using the `<v:php>` tag. When
included in a `<v:php>` tag, the code is executed after the rest of the
page is rendered by PHP, and the variable `$context` is populated with
data from the current page context. PHP code inside `<v:php>` tags can
access global variables set by your regular PHP code. There is also a
short form of &lt;v:php&gt; that is similar to the PHP short form tags.
More information is available on the `<v:php>` page.
