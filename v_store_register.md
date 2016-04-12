---
layout: docs
title: "<v:store:register>"
---

# `<v:store:register>`

Outputs an HTML form (`<form>` tag) that will save a customer's billing
information, shipping information, and E-Mail address.

You may use the [form validation tools](/vaeml_form_validation/) provided
by the Vae form tags to make certain fields required.

## Required Attributes

-   `redirect` - users will be redirected to this page once they have
    successfully entered all their information.

## Optional Attributes

-   `formmail` - set to an E-Mail address and all the data from the form
    will be E-Mail address specified. This uses the same mechanism as
    the [`<v:formmail>`](/v_formmail/) tag.

-   `from` - if using the `formmail` attribute, specify a value here and
    we will make the E-Mail that is sent come from this address.

-   `from_field` - if using the `formmail` attribute, specify a value
    here and we will make the E-Mail that is sent come from the address
    specified in this form field. Good for making the E-Mail look like
    it came from the person who sent the form.

-   `newsletter` - supply a [newsletter
    code](/backstage.newsletter.list/) here and the user will
    automatically be subscribed to that newsletter when registering.

-   `newsletter_confirm` - if specified, the user will only be
    subscribed to the newsletter specified in the newsletter code if
    this request variable is passed on. This is usually used to make a
    checkbox that the user can check to opt-in.

Since this tag generates an HTML `<form>` tag, you may also use any
standard HTML attributes that are valid in the `<form>` tag. These will
be passed through unchanged into the generated tag.

## Form Parameters

These are the request (POST) parameters that should be submitted with
the form:

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

## Sample Usage

    <v:store:register redirect="checkout.html">
     - Billing Information: -
     Name:            <v:text_field path="billing_name" required="name" />
     Company:         <v:text_field path="billing_company" />
     Address:         <v:text_field path="billing_address" required="true" />
     Address 2:       <v:text_field path="billing_address_2" />
     Country:         <v:country_select path="billing_country" required="true" />
     City:            <v:text_field path="billing_city" required="true" />
     State/Province:  <v:state_select path="billing_state" required="uscanada" />
     Zip/Postal Code: <v:text_field path="billing_zip" required="uscanada" />
     Phone:           <v:text_field path="billing_phone" required="true" />
     - Shipping Information: -
     Name:            <v:text_field path="shipping_name" required="name" />
     Company:         <v:text_field path="shipping_company" />
     Address:         <v:text_field path="shipping_address" required="true" />
     Address 2:       <v:text_field path="shipping_address_2" />
     Country:         <v:country_select path="shipping_country" required="true" />
     City:            <v:text_field path="shipping_city" required="true" />
     State/Province:  <v:state_select path="shipping_state" required="uscanada" />
     Zip/Postal Code: <v:text_field path="shipping_zip" required="uscanada" />
     Phone:           <v:text_field path="shipping_phone" required="true" />
     - Contact Information: -
     E-Mail Address:  <v:text_field path="e_mail_address" required="email" />
     Confirm E-Mail:  <v:text_field path="confirm_e_mail_address" required="email" />
     <input type="submit" value="Register" />
    </v:store:register>
