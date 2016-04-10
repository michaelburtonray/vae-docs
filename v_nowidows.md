---
layout: docs
title: "<v:nowidows>"
---

# `<v:nowidows>`

Inserts a nonbreaking space before the last word in a block of text to
prevent it from being displayed on a line by itself.

The name of this tag is a reference to the typography concept of a
widow, which refers to a word on a line of text by itself.

## Required Attributes

None.

## Optional Attributes

None.

## Sample Usage

{% highlight html %}
<v:nowidows>This is my headline</v:nowidows>
{% endhighlight %}

Would render something like:

    This is my&nbsp;headline
