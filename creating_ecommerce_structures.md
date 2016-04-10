---
layout: docs
title: eCommerce
---

# eCommerce

When we set out to create an eCommerce engine, we built on the rest of
the Vae platform. Actions are initiated through [VaeML](#vaeml) tags and
items are just entries in a [Collection](#structure.collection). You can
even statically define items in your VaeML. If you're already familiar
with creating websites using Vae, setting up the eCommerce portion of
your site should be easy. In fact, there are not any special eCommerce
structures that you need to learn about.

In this chapter, we will cover all aspects of the Vae eCommerce system,
which is a complete system that includes a shopping cart, real-time
payment acceptance, and a powerful backstage interface for fulfilling
orders and viewing analytics. We begin with the actual implementation of
the store, and then discuss settings and third-party integration.

## Creating the Structures for a Typical Store

One of the coolest part about eCommerce on Vae is that designers have
extreme flexibility to build the store data structures in a way that
makes sense for each specific website. With that said, we have to do
some sort of tutorial, so we will go through how a typical store on Vae
is structured. This is by no means the only way, and we will show you
later how you can get crazy.

### Items Structure

Your Items Structure, the place where information about the items that
are for sale in your store is stored, should be a fairly simple
Collection Structure. Each entry in your collection will hold
information about one item that will be available in your store. A
clothing store might have each entry of their Items Collection store the
name of the item, the item's weight, a picture, a price, and a
description. Here's a screenshot of what a drilldown might look like for
the Items Structure in a store:

![](/images/screenshots/ecommerce/items_structure.png)

> **Warning**
>
> With any field that necessitates a numeric value be entered, such as
> price, weight, or inventory (described below), it is best practice to
> check the Require a Numeric Value? [Checkbox](#structure.checkbox)
> when creating the Structure. This will prevent future bugs that you
> might find puzzling.
>
> ![](/images/screenshots/ecommerce/require_numeric_check.png)

### Inventory Structure

In order to keep track of how many items are available for sale in your
store, Vae gives you the ability to update how many items you have in
stock, while automatically decrementing that number everytime an item is
sold. When structuring your website in the Backstage, you simply need to
create a text field, where you will input then input the amount of items
in stock.

### Styles Structure

But what are you to do if you are selling several that come in different
configurations? For example, if we were to be selling t-shirts, we might
have to account for different sizes or colors. One option would be to
create each possible configuration as an entry in the Items Collection.
However, this might be confusing to maintain. A more organized method of
dealing with this situation is by making a Styles Structure. Styles (you
can call it whatever you want) is a [Collection](#structure.collection)
under the Item Structure that holds possible configurations for an item.

![](/images/screenshots/ecommerce/styles.png)

Since each configuration will have it's own inventory, make sure you put
your Inventory structure under the Styles Structure, and not directly
under the Items Structure, if you are using styles.

## The Shopping Flow in VaeML

### Shopping Cart {#shopping_cart}

The Vae shopping Cart is rendered using the
[`<v:store:cart>`](#v_store_cart) tag. As with every other Vae
component, how your page layout is not dictate by the Vae system.
Instead, you will need to familiarize yourself with a few more Vae tags.
In this section, you will be walked through the process of how to solve
a couple of common problems designers need to solve when implimenting a
shopping cart page.

### Collecting Registration (Billing and Shipping) Info {#store_registering}

Vae's [`<v:store:register>`](#v_store_register) allows designers to
create a registration form that takes very little time to fill out.
Because of this, few designers choose allow users to create accounts
where their personal information will be stored. However, if you do have
a website with lots of repeat customers, your users might value the
ability to sign in and checkout quickly.

### Order Confirmation {#order_confirmation}

After submitting the order, most designers redirect users to an "order
placed" page. In our example, we set
[`<v:store:checkout>`](#v_store_checkout) tag's redirect value to
order\_placed.html. This is usually a simple page that says something
like, "Congratulations! Your order has been received." You might then
have a link back to your site's homepage.

## Customizing Order Confirmation E-Mails

If you take a look at the [`<v:store:checkout>`](#v_store_checkout) tag
in our example code, you will see the attribute
`email_confirmation="/emails/confirmation"`. This tells Vae where to
look for files the user's email confirmation is based off of. In our
case, we need to put the email confirmation files within a folder called
`emails`. You will need to create two files: one HTML and one plain
text. Users who disable HTML on their email clients will see the plain
text version, while everyone else will see the HTML email. For our
example, these files will be called confirmation.html and
confirmation.txt.html.

In both the HTML and plain text file, you can use Vae's
[`<v:store:user>`](#v_store_user) and
[`<v:store:cart:items>`](#v_store_cart_items) tags to inject user and
order information into your email. Most designers send a summary of the
items ordered, the cost, payment method used, shipping method used, and
the shipping address.
