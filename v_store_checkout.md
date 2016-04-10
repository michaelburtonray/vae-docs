---
layout: docs
title: "<v:store:checkout>"
---

# `<v:store:checkout>`{#v_store_checkout}

Outputs an HTML form (`form` tag) that will complete checkout.

You may use the form validation tools provided by the Vae form tags to
make certain fields required.

## Required Attributes

-   `redirect` - users will be redirected to this page once they click
    the submit button.

-   `register_page` - users will be redirected to this page if they have
    not yet submitted billing and shipping information.

## Optional Attributes

-   `email_confirmation` - path to the [HTML template to use for the
    confirmation E-Mail sent to the
    customer](#customizing_order_emails).

-   `email_received` - path to the [HTML template to use for the order
    received E-Mail sent to the merchant](#customizing_order_emails).

-   `email_shipping` - path to the [HTML template to use for the order
    shipped E-Mail sent to the customer](#customizing_order_emails).

-   `lockout_redirect` - if specified, user will be redirected to this
    page after 3 failed attempts at submitting the form. This is a good
    way to lock out people that may be trying fraudulent credit cards.

-   `shop_page` - users will be redirected to this page if their cart
    doesn't have any items in it.

-   `store_logo` - Full URL to logo to be used on the
    Invoice/Packing slip.

-   `store_name` - Store name to be used on the Invoice/Packing slip.
    Useful if you are maintaining multiple store brands through the same
    Vae account.

Since this tag generates an HTML `<form>` tag, you may also use any
standard HTML attributes that are valid in the `<form>` tag. These will
be passed through unchanged into the generated tag.

### Form Parameters

These are the request (POST) parameters that should be submitted with
the form:

#### General

-   `notes` - any user-provided notes that go along with
    the transaction. These will be logged in the Vae backstage for the
    merchant to see.

#### For Credit Card Transactions

-   `cc_type` - type of credit card being used. Format should be that
    returned by `<v:store:credit_cart_select>`. The options are `visa`,
    `master`, `discover`, `america_express`, `switch`, and `solo`.

-   `cc_number` - credit card number.

-   `cc_month` - credit card expiration date (month). Format: 2 digit
    month (`01-12`).

-   `cc_year` - credit card expiration date (year). Format: 4 digit
    year (i.e. `2010`).

-   `cc_cvv` - credit card verification value.

## Sample Usage

    <v:store:checkout redirect="/order_placed" register_page="/register" shop_page="/">
     <v:store:credit_card>
      Please input your credit card information:
      Credit Card Type: <v:store:credit_card_select name="cc_type" required="true" />
      Credit Card Number (no spaces or dashes): <v:text_field name="cc_number" maxlength="16" />
      Expiration Date (mm/yyyy): <v:text_field name="cc_month" maxlength="2" /> / <v:text_field name="cc_year" maxlength="4" />
      CVV: <v:text_field name="cc_cvv" maxlength="4" />
     </v:store:credit_card>
     <input type="submit" value="Checkout" />
    </v:store:checkout>
