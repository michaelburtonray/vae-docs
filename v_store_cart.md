---
layout: docs
title: "<v:store:cart>"
---

# `<v:store:cart>`{#v_store_cart}

Outputs an HTML form (`<form>` tag) that will process modifications to
the customer's shopping cart.

## Required Attributes

None.

## Optional Attributes

None.

Since this tag generates an HTML `<form>` tag, you may also use any
standard HTML attributes that are valid in the `<form>` tag. These will
be passed through unchanged into the generated tag.

## Form Parameters

These are the request (POST) parameters that should be submitted with
the form:

-   `qty` - to allow the user to update the quantity of an item in the
    cart, you should create `<v:text_field>` tags for each item with
    `path="qty"`.

-   `remove` - to allow the user to remove an item from the cart, you
    should create `<v:checkbox>` tags for each item with
    `path="remove"`.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if there are no items in the cart.

## Sample Usage

    <v:store:cart>
     <v:store:cart:items>
      Name  : <v:text path="name" />
      Size  : <v:text path="option_value" />
      Price : <v:store:item:price />
      Qty   : <v:text_field path="qty" />
      Remove? <v:checkbox name="remove" />
     </v:store:cart:items>
     <input type="submit" value="Update Cart" />
    </v:store:cart>
    <v:else>
     Your cart is empty!
    </v:else>
