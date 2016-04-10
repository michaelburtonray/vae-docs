---
layout: docs
title: # vae\_customer()
---

# vae\_customer() {#php_vae_customer}

Use the `vae_customer()` function to retrieve information about a
customer by customer ID.

## Usage

`vae_customer($id)`

-   `$id` - ID of the customer to retrieve.

## Returns

Returns a PHP associative array containing information about that
customer.

## Sample Usage

    <?php
    // Fetch a customer by ID
    $customer = vae_customer($_REQUEST['customer_id']);
    echo $customer['name']; 
    ?>
