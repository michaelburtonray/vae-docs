---
layout: docs
title: Global PHP Includes
---

# Global PHP Includes

If you are using PHP, it is often useful to write PHP code that is used
across your website. With Vae, you can put this shared code into a file
called `__vae.php` in the root of your website.

If this file exists, it will be automatically included and made
available for every page -- both PHP pages and HTML pages being parsed
by VaeML.

If you are using PHP to extend the VaeML engine, your extension code and
hooks should also go inside this file, as it will be the only code
loaded in the event of certain hook callbacks.
