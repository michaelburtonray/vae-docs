---
layout: docs
title: # vae\_store\_update\_order\_status()
---

# vae\_store\_update\_order\_status()

Use the `vae_store_update_order_status()` function to update the status
of an order that has been placed on the website.

## Usage

`vae_store_update_order_status($id, $status)`

-   `$id` - Order ID

-   `$status` - Order Status. One of `Cancelled`, `Backordered`,
    `Waiting for Payment`, `Ordered`, `Processing`, `Shipped`.

## Returns

Returns `true`.

## Sample Usage

    <?php
    // Process all unprocessed orders
    foreach ($orders as $id => $order) {
      if ($order['status'] == "Ordered") {
        // Process order
        vae_store_update_order_status($id, "Processing");
      }
    }
    ?>
