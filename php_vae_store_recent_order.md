# vae\_store\_recent\_order() {#php_vae_store_recent_order}

The `vae_store_recent_order()` function retrieves either an array
containing all the items that were just purchased or an array containing
all data from the most recent order.

## Usage

`vae_store_recent_order($all_data = false)`

-   `$all_data` - If `true`, the function will return an array
    containing all data from the most recent order. If `false`, the
    function will return array containing all the items that were
    just purchased.

## Returns

Returns either an array containing all the items that were just
purchased or an array containing all data from the most recent order.

## Sample Usage

    <?php
    // Get all items from the recent order and display each item name
    $items = vae_store_recent_order();
    foreach ($items as $cart_id => $item) {
      echo $item['name'];
    }

    // Get all data from the recent order and display billing name
    $order = vae_store_recent_order(true);
    echo $order['billing_name'];
    ?>
