---
layout: docs
title: vae\_loggedin()
---

# vae\_loggedin()

Use the `vae_loggedin()` function to determine if the client is logged
in to the Vae backstage.

## Usage

`vae_loggedin()`

## Returns

Returns `true` if user is logged in, `false` otherwise.

## Sample Usage

{% highlight php %}
<?php
// Only proceed if user is logged in
if (!vae_loggedin()) return vae_redirect("/");
?>
{% endhighlight %}
