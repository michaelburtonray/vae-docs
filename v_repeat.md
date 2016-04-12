---
layout: docs
title: "<v:repeat>"
---

# `<v:repeat>`

Renders the code inside multiple times. Useful for avoiding repeated
blocks of code in your VaeML files.

## Required Attributes

-   `times` - number of times to repeat the inside code block.

## Optional Attributes

None.

## Sample Usage

To split the links collection across three columns, use something like
this:

{% highlight html %}
<v:repeat times="3">
 <div class="column">
  <v:collection path="links" groups="3">
   <!-- show my links -->
  </v:collection>
 </div>
</v:repeat>
{% endhighlight %}

It would render as follows:

{% highlight html %}
<div class="column">
 <!-- show my links -->
 <!-- show my links -->
</div> 
<div class="column">
 <!-- show my links -->
 <!-- show my links -->
</div>
<div class="column">
 <!-- show my links -->
 <!-- show my links -->
</div>
{% endhighlight %}
