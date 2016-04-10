---
layout: docs
title: # vae\_store\_add\_item\_to\_cart()
---

# vae\_store\_add\_item\_to\_cart()

The `vae_store_add_item_to_cart()` function adds an item to the user's
shopping cart.

## Usage

`vae_store_add_item_to_cart($id, $option_id = null, $quantity = 1, $options =                 array(), $notes = "")`

-   `$id` - Vae ID of the item to add

-   `$option_id` - Vae ID of the option for the item, if the item has
    multiple options (such as size or color), or `null`.

-   `$quantity` - Quantity to set in the cart for this item

-   `$options` - PHP associative array with the same options as accepted
    by `<v:store:add_to_cart>`. Some of the more common options are:
    `inventory_field`, `name`, `name_field`, `option_field`, `price`,
    `price_field`, `weight_field`, but all options are accepted here.
    Also, the option `update_if_exists` should be set to `true` if you
    want to emulate the `<v:store:add_to_cart>` behavior where items can
    only be added to your cart a single time.

    If left off, the following default set is used:
    `array('name_field' ⇒                         'name', 'price_field' ⇒ 'price')`.

-   `$notes` - Notes to be set in the cart for this item

## Returns

Returns `false` on failure, otherwise returns the cart ID of the added
item.

## Sample Usage

    <?php 
    // Add the submitted item to the shopping cart
    vae_store_add_item_to_cart(
      $_REQUEST['id'], 
      $_REQUEST['option'], 
      $_REQUEST['quantity'], 
      array(
       'inventory_field' => 'inventory',
       'name_field' => 'name',
       'price_field' => 'price',
       'weight_field' => 'weight'
      ),
      $_REQUEST['notes']);
    ?>
