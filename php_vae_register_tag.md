---
layout: docs
title: vae\_register\_tag()
---

# vae\_register\_tag()

Use the `vae_register_tag()` function to register your own
[VaeML](#vaeml) tag. You define a function that will render your tag and
we will call it when needed by a page.

## Usage

`vae_register_tag($name, $options)`

-   `$name` - Name for the tag you are registering. You do not need to
    including the leading `v:`. For example, to create the tag
    `<v:calendar_widget>`, you would specify a value of
    `calendar_widget` here. Note that you can redefine built-in Vae tags
    if you so choose!

-   `$options` - PHP associative array containing the following
    components:

    -   `handler` - PHP function that will be run to render the tag. You
        may optionally omit if you are defining a `callback`.

    -   `callback` - if set, this specifies that this tag will render a
        form and submit data back to the server. The value that goes
        here is the name of the PHP function that you have defined that
        should be run when data is posted to the server. If your handler
        returns `true` or you do not specify a handler, this tag will
        automatically render as a `<form>` tag that posts back in such a
        way that this callback will be invoked on receipt of the `POST`.

    -   `html` - if your tag returns a standard HTML tag, specify that
        tag here and all options that are valid for that tag will be
        considered valid for your tag.

    -   `params` - array of the attributes that are accepted for
        your tag. Or, set this to `collection` to accept all the
        parameters that are normally accepted by `<v:collection>`.

    -   `required` - array specifying which parameters are required.

## Returns

Returns `true`.

## How to define your functions

### Handler Functions

Handler functions are called with 5 parameters, which by convention are
named as follows:

-   `$a` - associative array of the attributes provided to the tag.

-   `$tag` - an associative array which describes the tag. Includes the
    following members:

    -   `attrs` - same as `$a`

    -   `index` - unique ID of this rendering instance of this tag. If
        this tag is called within a collection tag, each time the tag is
        rendered will have a different index

    -   `innerhtml` - HTML code inside this tag

    -   `tags` - array of tags nested inside this tag

-   `$context` - the current VaeQL context. Should be used in any calls
    to [`vae()`](#php_vae) or [`vae_find()`](#php_vae) that you make.

-   `$callback` - array that you can use to save data that will be made
    available to your callback function.

-   `$render_context` - contains information about the current VaeML
    rendering context. This should be passed to vae\_render\_tags() if
    you need to call that function.

Use the [vae\_render\_tags()](#php_vae_render_tags) function to render
inner tags.

The return value of this handler function will be used as the rendered
contents of your tag.

### Callback functions

Callback functions are called with a single parameter – `$tag`. It is
the same as above, but also contains an entry called `callback` that
contains the values stored in `$callback` in the handler function. The
handler function is always run on callbacks, before the callback tag is
invoked.

Generally, you will call [vae\_redirect()](#php_vae_redirect) in your
callbacks to direct the visitor somewhere. A common convention is to
`return vae_redirect($tag['attrs']['redirect']);` at the end of your
callback. If you return any other value, it will be sent to the browser.

## Sample Usage

Here are a few different sample tags.

### Basic Example: TodaysDate

This will create a tag `<v:todays_date>` that renders today's date.

{% highlight php %}
<?php
vae_register_tag('todays_date', array(
  'handler' => 'todays_date'
));
function todays_date($a, $tag, $context, &$callback, $render_context) {
  return strftime("%B %d, %Y");
}
?>
{% endhighlight %}

Example HTML file:

{% highlight html %}
Today's date is: <v:todays_date />.
{% endhighlight %}

### Basic Example: StripeRow

This will render table rows with alternating CSS classes to achieve a
“striped background” effect.

{% highlight php %}
<?php
vae_register_tag('tr_striped', array(
  'handler' => 'tr_striped'
));
function tr_striped($a, $tag, $context, &$callback, $render_context) {
  global $stripe;
  $class = (($stripe % 2) ? 'bg1' : 'bg2');
  $stripe++;
  return "<tr class='$class'>" . vae_render_tags($tag, $context, true, $render_context) . "</tr>";
}
?>
{% endhighlight %}

Example HTML file:

{% highlight html %}
<table>
  <tr class='bg2'><td>1</td></tr>
  <tr class='bg1'><td>2</td></tr>
  <tr class='bg2'><td>3</td></tr>
  <tr class='bg1'><td>4</td></tr>
  <tr class='bg2'><td>5</td></tr>
</table>
{% endhighlight %}

Of course, you can now use `<v:tr_striped>` inside `<v:collection>`
tags, which is where it would truly be valuable.

### Intermediate Example: IfCurrentDomain

This will render code only if the current domain name matches a
specified domain name. This is useful if you have multiple domain names
leading into your site.

{% highlight php %}
<?php
vae_register_tag('if_current_domain', array(
  'handler' => 'if_current_domain',
  'params' => array("domain"), 
  'required' => array("domain")
));
    
function if_current_domain($a, $tag, $context, &$callback, $render_context) {
  $does_domain_match = ($_SERVER['HTTP_HOST'] == $a['domain']);
  // passing a third parameter into vae_render_tags() tells Vae to 
  // only render it the third parameter is true.  Otherwise, 
  // render the contents of <v:else>
  return vae_render_tags($tag, $context, $does_domain_match, $render_context);
}
?>
{% endhighlight %}

Now in your HTML files, you can use:

{% highlight html %}
<v:if_current_domain domain="acmewidgets.com">
  Welcome to ACME Widgets, Inc.
</v:if_current_domain>
<v:else>You are at one of our other domains.</v:else>
{% endhighlight %}

### Server-side processing: BetterFormmail

This will create a replacement for the `<v:formmail>` tag.

{% highlight php %}
<?php
vae_register_tag('better_formmail', array(
  'callback' => 'better_formmail_callback',  
  'html' => 'form', 
  'params' => array("redirect","to"), 
  'required' => array("to")
));
{% endhighlight %}

{% highlight html %}
function better_formmail_callback($tag) {
  $mail = "Hey you!  Someone submitted a form at " . strftime("%B %d, %Y at %H:%M") . ":\n\n";
  foreach ($_POST as $k => $v) {
    $mail .= $k . " - " . $v . "\n";
  }  
  mail($tag['attrs']['to'], "BetterFormmail", $mail, "From: BetterFormmail <me@email.com>");
  if ($tag['attrs']['redirect']) return vae_redirect($tag['attrs']['redirect']);
  return vae_redirect($_SERVER['PHP_SELF']);
}
?>
{% endhighlight %}

Now in your HTML files, you can use:

    <v:better_formmail to="me@email.com" redirect="thanks.html">
      Enter your name to join our newsletter: 
      <v:text_field path="name" />
      <input type="submit" value="Join Newsletter" />
    </v:better_formmail>
