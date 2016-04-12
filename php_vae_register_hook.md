---
layout: docs
title: vae\_register\_hook()
---

# vae\_register\_hook()

Use the `vae_register_hook()` function to register code that will run
when certain Vae events are triggered. For VaeML tag-based events, your
function can halt the default Vae processing by returning `false`.

## Usage

`vae_register_hook($event, $callback_function)`

-   `$event` - Name of the event you wish to hook into. A list of
    available hooks can be found below.

-   `$callback_function` - name of a PHP function you have defined that
    will be called when your event occurs. For VaeML tag-based events,
    return `true` to continue processing as normal, or `false` to halt
    normal processing.

## Returns

Returns `true`.

## Available Events

Any VaeML tag that submits data back to the server, such as
`<v:formmail>`, `<v:store:add_to_cart>`, and `<v:store:checkout>` may be
specified as a hook. Your code will run before the default code runs.
Specify just the tag name, such as `formmail` or `store:checkout`

Other available events are:

-   `content:created` - fires when an entry of content is created. ID of
    the new entry is passed in as a parameter.

-   `content:destroyed` - fires when an entry of content is deleted. ID
    of the old entry is passed in as a parameter.

-   `content:published` - fires when an entry of content is published.
    ID of the entry is passed in as a parameter.

-   `content:unpublished` - fires when an entry of content
    is unpublished. ID of the entry is passed in as a parameter.

-   `content:updated` - fires when an entry of content is updated. ID of
    the updated entry is passed in as a parameter.

-   `customer:created` - fires when a Customer is created. ID of the new
    customer is passed in as a parameter.

-   `customer:destroyed` - fires when a Customer is deleted. ID of the
    old customer is passed in as a parameter.

-   `customer:updated` - fires when a Customer is updated. ID of the
    updated customer is passed in as a parameter.

-   `store:cart:updated` - fires after an item is added to the cart or
    the cart is updated.

-   `store:checkout:success` - fires after checkout completes and
    payment has been processed.

## Sample Usage

In your \_\_vae.php file:

{% highlight php %}
<?php
// Make sure that we are available on the requested day
function check_add() {
  if (!available($_REQUEST['id'], $_REQUEST['notes'], true)) {
    vae_flash("Sorry, we are not available for those dates.  Please try different dates.", 'err');
    return false;
  }
  return true;
}
vae_register_hook("store:add_to_cart", 'check_add'); 
?>
{% endhighlight %}

In your \_\_vae.php file:

{% highlight php %}
<?php
// Send welcome E-Mail to new customers
function customer_created($user_id) {
  $c = vae_customer($user_id);
  $text = "Hello, thanks for becoming a customer!";
  $html = "Hello, <b>thanks</b> for becoming a customer!";
  vae_multipart_mail("My Website <mywebsite@vaeplatform.test>", $c['e_mail_address'], "Welcome to My Website", $text, $html);
  return true;
}
vae_register_hook("customer:created", array('callback' => 'customer_created'));
?>
{% endhighlight %}
