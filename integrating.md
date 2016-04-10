---
layout: docs
title: # Integrating Vae Content Into Your Website {#integrating}
---

# Integrating Vae Content Into Your Website {#integrating}

Now that you have learned how to publish your website [via FTP or
Subversion](#accessing_your_webspace), it is time to integrate your Vae
content into the website. There are two main ways to integrate your
content into your website: [VaeML](#vaeml), and [PHP integration](#php).
VaeML is our proprietary content presentation language that uses easy
HTML-like tags to markup the presentation of your content. It is very
similar to HTML and should be a quick learn for anyone who is already
familiar with HTML.

For greater control or for more powerful control, you may also integrate
your content using PHP. Vae exposes all of your data via a rich PHP API.
You may also mix and match integration styles by using the `<v:php>`
VaeML tag to bring in PHP code within a VaeML document.

We will explain VaeML first, and then discuss [VaeQL](#vaeql), our
proprietary query language that allows you to navigate your content
according to the structure you created. We end with a discussion of our
PHP integration.
