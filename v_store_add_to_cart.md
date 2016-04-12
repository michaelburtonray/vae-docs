---
layout: docs
title: "&lt;v:store:add_to_cart&gt;"
---

# `<v:store:add_to_cart>`

Outputs an HTML form (`<form>` tag) that will add an item to the
customer's shopping cart.

You may use the [form validation tools](/vaeml_form_validation/) provided
by the Vae form tags to make certain fields required.

## Required Attributes

### Product name

This will be used in the shopping cart, and on the order confirmation
email, invoice, and packing slip as the name of the item.

Only one of the following options is required:

-   `name` - Pass in a value here and it will be used as the item name.

-   `name_field` - Name of structure that contains the item name.

### Product price

This will be used in the shopping cart, and on the order confirmation
email, invoice, and packing slip as the unit price of the item.

Only one of the following options is required:

-   `price` - Pass in a value here and it will be used as the
    item price.

-   `price_field` - Name of structure that contains the item price.

-   `price_input` - Name of a request parameter to get the price from.
    Good for donation boxes where you will let the user choose a price.

## Optional Attributes

-   `clear_cart` - if set to `true`, the cart will be cleared if this
    form is submitted (so this would be the only item in the cart). This
    is useful for implementing special items that need to be
    purchased separately.

-   `digital` - if set to `true`, this item will be treated as a
    digital download. This means that it will always have a quantity of
    `1` and will not be factored into shipping calculations. You are
    responsible for provisioning the digital delivery and download.

-   `disable_inventory_check` - if set to `true`, Vae will not enforce
    inventory checks on this item. If the item has an inventory of 0 or
    less, the name will have the phrase `(Pre-order)` applied to it in
    the backstage when viewing this order.

-   `discount_class` - comma-separated list of the discount classes this
    item applies to. Usually this would be the item's ID as well as the
    ID of any categories that it belongs to.

-   `discount_field` - if set to the name of a structure that exists
    under the item's context, the price will be discounted by the
    percentage stored in this field.

-   `inventory_field` - if set to the name of a structure that exists
    under the item's context or inside the options collection, we will
    check inventory against this structure. People will not be allowed
    to purchase more than this number, and when purchases happen,
    inventory will be deducted to keep your stock levels current.

-   `multiple` - if set, this tag can add multiple items to the cart
    at once. Set this to the name of a request parameter that you will
    be an array of the item IDs to be added to cart. For example, if
    this was set to `item_id`, and the request came in with parameters
    `item_id[1]=101&item_id[2]=405`, items `101` and `405` would be
    added to cart. You may also provide notes, options, and quantity by
    making those parameters also arrays with the same keys.

-   `notes` - if set, this value will be used for the 'Notes' field of
    the cart line item. This can be retrieved in the cart and is
    displayed on the order confirmation email, invoice, and
    packing slip. This is commonly used for building in extended
    functionality, such as the name to go on a ticket, notes for a
    donation, or special instructions that pertain to this item.

-   `notes_input` - if set, any value in the request parameter of this
    name (GET or POST) will be used for the 'Notes' field of the cart
    line item.

-   `option_field` - if this item has multiple options, such as sizes or
    colors, give the name of the structure inside that collection that
    should be used as the display name. For example if the options
    collection was `sizes` and it contained a text field called `size`,
    you would use `size` here. To combine multiple structures, separate
    them with commas, such as `size`,`color`.

-   `option_value` - provide a value here to manually pass in the
    option value. Useful if the item is not actually stored in the CMS.

-   `options_collection` - if this item has multiple options, such as
    sizes or colors, give the name of that collection here

-   `redirect` - users will be redirected to this page once they click
    the submit button.

-   `shipping_class` - if you are using shipping classes, this will set
    the shipping class for this particular line item.

-   `tax_class` - if you are using tax classes, this will set the tax
    class for this particular line item.

-   `weight` - if set to a numeric value, this value will be used as the
    weight of this item during shipping calculations.

-   `weight_field` - if set to the name of a structure that exists under
    the item's context or inside the options collection, this value will
    be used as the weight of this item during shipping calculations.

Since this tag generates an HTML `<form>` tag, you may also use any
standard HTML attributes that are valid in the `<form>` tag. These will
be passed through unchanged into the generated tag.

### Form Parameters

These are the request (POST) parameters that should be submitted with
the form:

-   `options` - to allow the user to choose an option from the options
    collection, pass in the ID of the chosen option in the request
    parameter `options`. The `<v:option_select>` tag provides an easy
    way to render a group of select boxes that correspond to the
    available options.

    Alternatively, you can create a standard HTML `<select>` tag and
    populate it with the available options. For extreme flexibility, you
    can also create a hidden input field called `options` and use your
    own Javascript to populate it.

-   `quantity` - to allow the user to specify a `quantity`, create a
    text field called `quantity`.

If you are using the `multiple` option, simply define these parameters
as arrays and have their keys match the keys you are using for the
parameter that holds the item IDs.

Alternatively, to allow the user to specify a quantity for each of the
available options (without using multiple), create a text field called
`quantity` inside the `<v:collection>` tag for the options. You do not
need to specify an `options` request parameter in this case.

## Sample Usage

Bare bones (not tied into CMS structures):

{% highlight html %}
<v:store:add_to_cart redirect="/cart" name="$5 Donation" price="5.00">
 <input type="submit" value="Add to Cart" />
</v:store:add_to_cart>
{% endhighlight %}

Item from CMS:

{% highlight html %}
<v:store:add_to_cart redirect="/cart" name_field="name" price_field="price" inventory_field="inventory">
 Quantity: <v:text_field name="quantity" value="1" />
 <input type="submit" value="Add to Cart" />
</v:store:add_to_cart>
{% endhighlight %}

Item with options:

{% highlight html %}
<v:store:add_to_cart redirect="/cart" name_field="name" price_field="price" option_field="size" options_collection="sizes" weight_field="weight">
 Quantity: <v:text_field name="quantity" value="1" />
 <v:option_select name="options" path="sizes" fields="size" />
 <input type="submit" value="Add to Cart" />
</v:store:add_to_cart>
{% endhighlight %}

Item with options – choose a separate quantity for each option:

{% highlight html %}
<v:store:add_to_cart redirect="/cart" name_field="name" price_field="price" option_field="size" options_collection="sizes" weight_field="weight">
 <v:collection path="sizes">
  How many of size <v:text path="size" />:
  Quantity: <v:text_field name="quantity" />
 </v:collection>
 <input type="submit" value="Add to Cart" />
</v:store:add_to_cart>
{% endhighlight %}

Digital item:

{% highlight html %}
<v:store:add_to_cart redirect="/cart" digital="true" name_field="name" price_field="price">
 <input type="submit" value="Add Album To Cart" />
</v:store:add_to_cart>
{% endhighlight %}

Donation box:

{% highlight html %}
<v:store:add_to_cart redirect="/cart" name="Donation" price_input="amount">
 Donation Amount: <v:text_field name="amount" value="" />
 <input type="submit" value="Add to Cart" />
</v:store:add_to_cart>
{% endhighlight %}

Multiple items:

{% highlight php %}
<v:store:add_to_cart multiple="id" name_field="name" price_field="price" notes_input="notes" redirect="/cart">
 <?php for ($i = 0; $i < 6; $i++) { ?>
  Item: 
  <select name="id[<?=$i?>]">
   <option value="">--select item--</option>
   <v:collection path="/items">
    <option value="<v->">
     <v:text path="name" /> ($<v:text path="price" number_format="2" />)
    </option>
   </v:collection>
  </select>
  Monogram text:
  <v:text_field name="notes[<?=$i?>]" validate="true" />
 <? } ?>
 <input type="submit" value="Add Items to Cart" />
</v:store:add_to_cart>
{% endhighlight %}
