# vae\_store\_cart\_item() {#php_vae_store_cart_item}

The `vae_store_cart_item()` function retrieves an item from the
visitor's shopping cart.

## Usage

`vae_store_cart_items($cart_id)`

-   `$cart_id` - cart ID of the cart item to retrieve.

## Returns

Returns an associative array containing information about this item in
the shopping cart.

## Sample Usage

    <?php
    // Get barcode of selected item
    $item = vae_store_cart_item($id);
    $barcode = $item['barcode'];
    ?>
