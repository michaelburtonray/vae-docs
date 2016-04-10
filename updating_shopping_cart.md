---
layout: docs
title: Updating Quantities or Removing Products From Shopping Cart
---

# Updating Quantities or Removing Products From Shopping Cart

As with any common eCommerce shopping cart, once the user has items in
their cart, they can remove or modify the quantity of items. The easiest
way to allow item removal is to create a [`<v:checkbox>`](#v_checkbox)
with `path="remove"`. When placed the
[`<v:store:cart:items>`](#v_store_cart_items) tag, a checkbox is
rendered that removes the item from the cart when it is checked and the
page is refreshed. To allow the user to change the quantity, a
[`<v:text_field>`](#v_text_field) with the path `qty` will render a
textbox with this functionality. Here is an example of the markup for a
Vae shopping cart:

{% highlight html %}
<v:store:cart>
 <ul>
  <li>Remove</li>
  <li>Image</li>
  <li>Item Description</li>
  <li>Options</li>
  <li>Qty</li>
  <li>Price</li>
  <li>Total</li>
 </ul>
 <v:store:cart:items>
  <ul>
   <li><v:checkbox path="remove" /></li>
   <li><v:img path="image" /></li>
   <li><v:text path="name" /></li>
   <li><v:text path="option_value" />
   <li><v:text_field path="qty" size="1" /></li>
   <li>$<v:text path="price" number_format="2" /></li>
   <li>$<v:text path="total" number_format="2" /></li>
  </ul>
 </v:store:cart:items>
  <ul>
   <li>
    Subtotal: $<v:store:cart:subtotal /></li>
  </ul>
   <ul>
    <li>
     <input type="submit" value="Update Cart" />
     <a href="/">Continue Shopping</a></li>
    <li><a href="/register.html">Checkout</a></li></ul>
    <v:else>
     Your cart is empty!
     <a href="/">Continue.</a>
    </v:else>
   </v:store:cart>
{% endhighlight %}

> **Warning**
>
> It is crucial that your Update Cart and Checkout buttons be within the
> [`<v:store:cart>`](#v_store_cart) tags, in order to properly interface
> with Vae.
