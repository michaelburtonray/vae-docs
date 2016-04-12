---
layout: docs
title: "&lt;v:store:if_logged_in&gt;"
---

# `<v:store:if_logged_in>`

Renders its contents only if the user has logged in using their [store
account](/backstage.customers/).

## Required Attributes

None.

## Optional Attributes

You may provide a [`<v:else>`](/v_else/) tag after this tag to specify
HTML to render if the user is not logged in.

## Sample Usage

{% highlight html %}
<v:store:if_logged_in>
 You are logged in.  
 <a href="/account">My Account</a>
</v:store:if_logged_in>
<v:else>
 Log in: 
 <v:store:login>
  ...
 </v:store:login>
</v:else>
{% endhighlight %}
