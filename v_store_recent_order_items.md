# `<v:store:recent_order_items>`{#v_store_recent_order_items}

Iterates over all items purchased in the most recent order by this
visitor.

Within this tag, the current context will be that of the cart item, with
the following additional fields available:

-   `barcode` - item barcode, if provided

-   `check_inventory` - whether inventory is being checked for this item

-   `digital` - whether the item was a digital download

-   `discount_class` - discount class of the item

-   `id` - item Vae ID

-   `inventory_field` - inventory structure name

-   `name` - item name

-   `notes` - data stored in the cart notes field

-   `option_id` - option ID

-   `option_value` - option value (size, color, etc)

-   `order_id` - order ID

-   `original_price` - if the item was discounted, its original price

-   `price` - unit price

-   `qty` - quantity in cart

-   `shipping_class` - shipping class, if set

-   `tax_class` - tax class, if set

-   `taxable` - whether the item is taxable

-   `total` - total amount for quantity in cart

-   `weight` - item weight, if provided

## Required Attributes

None.

## Optional Attributes

None.

You may use any attributes that are accepted by the `<v:collection>`
tag. You may nest a `<v:divider>` tag inside this tag to specify a
divider that will be shown after a certain number of elements.

## Sample Usage

    We got your order.  You purchased:
    <v:store:recent_order_items>
     Name  : <v:text path="name" />
     Size  : <v:text path="option_value" />
     Qty   : <v:text path="qty" />
     Price : <v:store:item:price />
     Total : <v:store:item:price price_field="total" />
    </v:store:recent_order_items>
