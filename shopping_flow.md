---
layout: docs
title: The Shopping Flow in VaeML
---

# The Shopping Flow in VaeML

## Shopping Cart

The Vae shopping Cart is rendered using the
[`<v:store:cart>`](#v_store_cart) tag. As with every other Vae
component, how your page layout is not dictate by the Vae system.
Instead, you will need to familiarize yourself with a few more Vae tags.
In this section, you will be walked through the process of how to solve
a couple of common problems designers need to solve when implimenting a
shopping cart page.

## Collecting Registration (Billing and Shipping) Info

Vae's [`<v:store:register>`](#v_store_register) allows designers to
create a registration form that takes very little time to fill out.
Because of this, few designers choose allow users to create accounts
where their personal information will be stored. However, if you do have
a website with lots of repeat customers, your users might value the
ability to sign in and checkout quickly.

## Order Confirmation

After submitting the order, most designers redirect users to an "order
placed" page. In our example, we set
[`<v:store:checkout>`](#v_store_checkout) tag's redirect value to
order\_placed.html. This is usually a simple page that says something
like, "Congratulations! Your order has been received." You might then
have a link back to your site's homepage.
