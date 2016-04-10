---
layout: docs
title: # vae\_store\_register()
---

# vae\_store\_register()

The `vae_store_register()` function registers the current website user
as a customer. This will add them to the Customers tab in the backstage
as well as attach an E-Mail address, billing address, and shipping
address with the current session. This function should be called before
`vae_store_checkout()` in a PHP-based checkout flow.

## Usage

`vae_store_register($options = array())`

-   `$options` - PHP associative array containing the information about
    the custmer. This field accepts the same named inputs as the form
    elements that go inside the `<v:store:register>` tag. We also list
    them in the next section.

## Accepted Options

These are options that may be provided in the `$options` array.

### Billing Information

Always required, except company, address 2, and state (for
non-US/Canada).

-   `billing_name` - billing name.

-   `billing_company` - billing company (optional).

-   `billing_address` - billing address.

-   `billing_address_2` - billing address 2 (optional).

-   `billing_city` - billing city.

-   `billing_state` - billing state/province (required for US/Canada).

-   `billing_zip`- billing ZIP/postal code.

-   `billing_country` - billing country.

-   `billing_phone` - billing phone number.

-   `e_mail_address` - E-Mail Address.

#### Shipping Information

Not required if you are not shipping.

-   `shipping_name` - shipping name.

-   `shipping_company` - shipping company (optional).

-   `shipping_address` - shipping address.

-   `shipping_address_2` - shipping address 2 (optional).

-   `shipping_city` - shipping city.

-   `shipping_state` - shipping state/province (required for US/Canada).

-   `shipping_zip` - shipping ZIP/postal code.

-   `shipping_country` - shipping country.

-   `shipping_phone` - shipping phone number.

#### Creating an Account

Not required.

-   `password` - password for the account.

## Returns

Returns `true` on success and `false` on failure.

## Sample Usage

    <?php 
    // Register a user          
    vae_store_register(array(
      'billing_name' => "Test Tester",
      'billing_company' => "Action Verb",
      'e_mail_address' => "test@actionverb.com"
    ));
    ?>
