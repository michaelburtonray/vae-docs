---
layout: docs
title: "&lt;v:option_select&gt;"
---

# `<v:option_select>`

Outputs a group of linked HTML select input fields (`<select>` tags)
that will allow the user to select a specific entry by choosing its
attributes individually.

For example, if you had a collection called `styles` that had 2
structures: `size` and `color`, this tag would render two `<select>`
boxes: one for size and one for color. The tag also generates Javascript
to combine the selections into one hidden HTML input field and ensure
that the selected combination is indeed available on your site.

This is commonly used to implement item options on stores.

## Required Attributes

-   `fields` - comma-separated list of the structures that should get
    their own `<select>` tag. In our example from above, this would be
    `size,color`.

-   `name` - name for the HTML hidden `<input>` tag that will be
    generated to hold the selected entry ID. When used in conjunction
    with `<v:store:add_to_cart>`, this should be set to `options`.

-   `path` - path to the collection holding the entries to use to
    populate the select boxes. Uses [VaeQL](/vaeql/) syntax.

## Optional Attributes

-   `default` - value to be displayed in the select boxes before a
    selection is made. Example:
    `--- Select an Option                     ---`.

Since this tag generates some HTML `<select>` tags, you may also use any
standard HTML attributes that are valid in the `<select>` tag. These
will be passed through unchanged into the generated tags.

## Self-closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
<v:store:add_to_cart redirect="/cart" name_field="name" price_field="price" option_field="size,color" options_collection="sizes" weight_field="weight">
 Quantity: <v:text_field name="quantity" value="1" />
 <v:option_select name="options" path="sizes" fields="size,color" />
 <input type="submit" value="Add to Cart" />
</v:store:add_to_cart>
{% endhighlight %}
