---
layout: docs
title: "<v:php>"
---

# `<v:php>`

Put PHP code inside this tag to have it run inside the proper Vae
context at render-time.

The variable `$context` will be set to a PHP array containing the
contents of the current context. This is the same array that you would
have gotten back if you had called [`vae_find()`](//) on the current
context's ID. The variable `$id` will be set to the ID of the current
context.

The [VaeML shortcut](/v_shortcuts/) `<v? ?>` provides a shorter way of
writing this tag.

To write output to the page, you should `return` whatever you want
inserted into the page. You cannot use `echo`, `var_dump`, or anything
else that writes output directly. Alternatively, you can use the
`<v?= ?>` shortcut.

## Required Attributes

None.

## Optional Attributes

None.

## Sample Usage

Show only the first 20 characters of each post's name:

{% highlight html %}
<v:collection path="posts">
 <v:php>
  return substr($context['name'], 0, 20);
 </v:php>
</v:collection>
{% endhighlight %}

{% highlight html %}
<v:collection path="posts">
 <v?=substr($context['name'], 0, 20)?>
</v:collection>
{% endhighlight %}

Show the MD5 hash of the current page's title:

{% highlight html %}
<v:php>
 return md5($context['title']);
</v:php>
{% endhighlight %}

{% highlight html %}
<v?=md5($context['title'])?>
{% endhighlight %}

Increment and display global counter:

{% highlight html %}
<v:collection path="posts">
 <v:php>
  return $i++;
 </v:php>
</v:collection>
{% endhighlight %}

    <v:collection path="posts">
     <v?=$i++?>
    </v:collection>
