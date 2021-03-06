---
layout: docs
title: vae\_store\_cart\_item()
---

# vae\_store\_cart\_item()

The `vae_store_cart_item()` function retrieves an item from the
visitor's shopping cart.

## Usage

`vae_store_cart_items($cart_id)`

-   `$cart_id` - cart ID of the cart item to retrieve.

## Returns

Returns an associative array containing information about this item in
the shopping cart.

## Sample Usage

{% highlight php %}
<?php
// Get barcode of selected item
$item = vae_store_cart_item($id);
$barcode = $item['barcode'];
?>
{% endhighlight %}
