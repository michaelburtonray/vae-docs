---
layout: docs
title: vae\_store\_orders()
---

# vae\_store\_orders()

The `vae_store_orders()` function returns an array of up to 50 orders
that have been placed on this website. Optional finders are provided to
help filter to the result set.

## Usage

`vae_store_orders($finders = array())`

-   `$finders` - optional PHP associative array with criteria to filter
    the list by. Accepted values include the following:

    -   `date` - set to a date in YYYY-MM-DD format to only return
        orders from this date.

    <!-- -->
    -   `discount_code` - only return orders using this discount\_code.

    <!-- -->
    -   `fulfilled` - set `0` to show only unfulfilled orders or set to
        `1` to only show fulfilled orders.

    <!-- -->
    -   `ids` - set to an ID or a comma-separated list of IDs to only
        return orders with matching ID(s).

    <!-- -->
    -   `start` - set to an ID to only return orders with larger ID(s)

    <!-- -->
    -   `status` - set one of `Cancelled`, `Backordered`,
        `Waiting for Payment`, `Ordered`, `Processing`, or `Shipped` to
        only return orders with this status.

## Returns

Returns an associative array of orders that match your finder criteria.

## Sample Usage

    <?php
    // Process all unprocessed orders
    $orders = vae_store_orders(array('status' => 'Ordered', 'fulfilled' => 0));
    foreach ($orders as $id => $order) {
      // Process order, then call ...
      vae_store_update_order($id, array('status' => 'Processing', 'fulfilled' => 1));
    }
    ?>
