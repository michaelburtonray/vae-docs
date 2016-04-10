---
layout: docs
title: "Accepting Real Money: Integrating an Internet Merchant Account"
---

# Accepting Real Money: Integrating an Internet Merchant Account

## Supported Services

Currently, Vae fully supports the following merchant account services:

-   Braintree Payment
    Solutions (http://www.braintreepaymentsolutions.com/)

-   Authorize.Net (http://www.authorize.net/)

-   Cybersource (http://www.cybersource.com/)

-   PayPal Website Payments Pro

    (https://www.paypal.com/cgi-bin/webscr?cmd=\_wp-pro-overview-outside)
    Braintree offers great rates for stores with high volume (tens of
    thousands of dollars per month and up). Authorize.Net is only sold
    through resellers, which include Wells Fargo, Chase Paymentech, and
    many
    others (http://www.authorize.net/solutions/merchantsolutions/resellerdirectory/).
    Additionally, the following services are supported, but have not yet
    been fully tested with the Vae platform. If you choose to use one, a
    Vae engineer will work with you to ensure that the integration
    goes smoothly.

-   LinkPoint (http://www.linkpoint.com/)

-   SecurePay (http://www.securepay.com/)

-   SkipJack (http://www.skipjack.com/)

-   TransFirst (http://www.transfirst.com/)

-   USA ePay (http://www.usaepay.com/)

-   Verifi (http://www.verifi.com/)

-   ViaKLIX (http://viaklix.com/) If you work with another merchant bank
    that offers an API for submitting transactions, we can work with you
    to have your Vae transactions processed through your merchant bank.
    Please contact us and we will give you an estimate regarding cost
    and lead time.

## Adding the Merchants Backstage

Payment methods can be added via the Store tab and the Settings sub-tab:

![](/images/screenshots/ecommerce/add_payment_method.png)

Clicking Add Payment Method will bring you to The Add Payment Method
screen. This screen allows you to integrate your merchant account with
your Vae store:

![](/images/screenshots/ecommerce/add_payment_screen.png)

> **Tip**
>
> If you'd like to worry about setting up you merchant account later,
> just select the Vae Test Gateway as a payment method, and you'll
> immediately be able to test your store.

## Using Payment Methods In Your Website Design

Once your payment methods are setup, they will appear in the payment
select menu, rendered using the
[`<v:store:payment_methods_select>`](#v_store_payment_methods_select)
tag:

![](/images/screenshots/ecommerce/payment_select.png)
