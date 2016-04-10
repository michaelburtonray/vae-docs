---
layout: docs
title: # vae\_store\_checkout() {#php_vae_store_checkout}
---

# vae\_store\_checkout() {#php_vae_store_checkout}

The `vae_store_checkout()` function completes the checkout action for
the current website user. This function should be called after
`vae_store_register()` in a PHP-based checkout flow.

## Usage

`vae_store_checkout($options = array())`

-   `$options` - PHP associative array containing the information needed
    for checkout This field accepts the same named inputs as the form
    elements that go inside the `<v:store:checkout>` tag. We also list
    them in the next section.

## Accepted Options

These are options that may be provided in the `$options` array.

-   `email_confirmation` - path to the [HTML template to use for the
    confirmation E-Mail sent to the
    customer](#customizing_order_emails).

-   `email_received` - path to the [HTML template to use for the order
    received E-Mail sent to the merchant](#customizing_order_emails).

-   `email_shipping` - path to the [HTML template to use for the order
    shipped E-Mail sent to the customer](#customizing_order_emails).

-   `notes` - any user-provided notes that go along with
    the transaction. These will be logged in the Vae backstage for the
    merchant to see.

-   `payment_method` - payment method to use. Defaults to the first
    available payment method on your website. This should be the same
    string returned as the option value in a
    `<v:store:payment_methods_select>` tag.

-   `cc_type` - type of credit card being used. Format should be that
    returned by `<v:store:credit_card_select>`. The options are `visa`,
    `master`, `discover`, `america_express`, `switch`, and `solo`.

-   `cc_number` - credit card number.

-   `cc_month` - credit card expiration date (month). Format: 2 digit
    month (`01-12`).

-   `cc_year` - credit card expiration date (year). Format: 4 digit
    year (i.e. `2010`).

-   `cc_cvv` - credit card verification value.

## Returns

Returns `true` on success and `false` on failure.

## Sample Usage

    <?php 
    // checkout a user          
    vae_store_checkout(array(
      'billing_name' => "Test Tester",
      'billing_company' => "Action Verb",
      'e_mail_address' => "test@actionverb.com"
    ));
    ?>
