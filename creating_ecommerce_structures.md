---
layout: docs
title: eCommerce
---

# eCommerce

When we set out to create an eCommerce engine, we built on the rest of
the Vae platform. Actions are initiated through [VaeML](/vaeml/) tags and
items are just entries in a [Collection](/structure.collection/). You can
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
> check the Require a Numeric Value? [Checkbox](/structure.checkbox/)
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
can call it whatever you want) is a [Collection](/structure.collection/)
under the Item Structure that holds possible configurations for an item.

![](/images/screenshots/ecommerce/styles.png)

Since each configuration will have it's own inventory, make sure you put
your Inventory structure under the Styles Structure, and not directly
under the Items Structure, if you are using styles.
