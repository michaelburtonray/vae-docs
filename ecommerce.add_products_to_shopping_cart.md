---
layout: docs
title: # Adding Products to the Shopping Cart
---

# Adding Products to the Shopping Cart

Using the [`<v:store:add_to_cart>`](#v_store_add_to_cart) tag in your
website will allow you to display an item to the customer that they will
then be able to add to their shopping cart. Let's look at an example
snippet of code that utilizes this tag.

    <v:text path="item_name" />
    $<v:text path="price" />
    <v:store:add_to_cart redirect="/cart" inventory_field="inventory" 
        name_field="item_name" price_field="price" weight_field="weight">
     Quantity:
     <input size="2" name="quantity" value="1" type="text" />
     <input type="submit" value="Add to Cart" />
    </v:store:add_to_cart>

This assumes we are in the context of an "Items" Collection (or "Things"
Collection, or whatever it might be called), meaning we would use this
code either on a page that displays an Item, or within
[`<v:collection>`](#v_collection) tags that loop through the Items
Collection. As you can see, by specifying the values of the
[`<v:store:add_to_cart>`](#) attributes (such as `name_field`) to the
appropriate Substructures in our Item Structure, Vae sends the necessary
information about an Item to the user's Cart. In this example, our Cart
page is called Cart.html (or .haml, or .php), so we are redirecting to
`/Cart`.

But what if we want to integrate "styles", as we discussed previously?
To do so, render a select menu with the options for your styles, and add
`options_collection="`\[name of "style" Collection name.\]`"` to your
[`<v:store:add_to_cart>`](#v_store_add_to_cart) tag. Let's do an example
with a style Collection called "sizes".

    <v:if path="sizes">
    Size:    
    <select name="options">
     <v:collection path="sizes[inventory>0]">
      <option value="<v->"><v=size></option>
     </v:collection>
    </select>
    </v:if>
    <v:text path="item_name" /><br>
     $<v:text path="price" /><br>
    <v:store:add_to_cart redirect="/cart" inventory_field="inventory" options_collection="sizes" option_field="size" name_field="item_name" price_field="price" weight_field="weight">
     Quantity: <input size="2" name="quantity" value="1" type="text" />
     <input type="submit" value="Add to Cart" />
    </v:store:add_to_cart>

> **Tip**
>
> The `[inventory>0]` next to `sizes` is a shortcut that weeds out
> out-of-stock Items.
