---
layout: docs
title: # Checking Out / Review Order
---

# Checking Out / Review Order {#ecommerce.review_order}

The final step in the ordering process for a customer is reviewing and
ordering what's in their basket. The
[`<v:store:checkout>`](#v_store_checkout) tag provides a form for your
users to complete their purchase. Here is an example of a Checkout
screen markup:

    <ul>
     <li>Item</li>
     <li>Qty</li>
     <li>Price</li>
     <li>Total</li>
    </ul>
    <v:store:cart:items>
     <ul>
      <li><v:img path="image" /></li>
      <li><v:text path="name" /></li>
      <li><v:text_field path="qty"/></li>
      <li>$<v:text path="price" /></li>
      <li>$<v:text path="total" /></li>
    </ul>
    </v:store:cart:items>
    <ul>
     <li>
      Payment Method:
      <v:store:payment_methods_select />
      Shipping Method:<v:store:shipping_methods_select />
      Coupon Code:<v:store:discount><v:text_field name="discount" /><input type="submit" value="Apply Coupon Code" />
      </v:store:discount>
     </li>
     <li>
      Subtotal:$<v:store:cart:subtotal />
      <v:store:if_discount>Discount: $<v:store:cart:discount /></v:store:if_discount>
      Shipping: $<v:store:cart:shipping />
      Tax: $<v:store:cart:tax />
      Total: $<v:store:cart:total />
     </li>
    </ul>

     <li>
      <v:store:user>
     <li>
      <h3>Billing Information<span class="edit">(<a href="/register">edit</a>)</h3>
       Name:<v:text path="billing_name" />
       Company:<v:text path="billing_company" />
       Address:<v:text path="billing_address" />
       Address 2:<v:text path="billing_address_2" />
       City:<v:text path="billing_city" />
       State:<v:text path="billing_state" />
       Country:<v:text path="billing_country" />
       Zip/Postal Code:<v:text path="billing_zip" />
       Phone Number:<v:text path="billing_phone" />
       E-Mail Address:<v:text path="e_mail_address" />
     </li>
     <li><h3>Shipping Information(<a href="/register">edit</a>)</h3>
      Name:<v:text path="shipping_name" />
      Company:<v:text path="shipping_company" />
      Address:<v:text path="shipping_address" />
      Address 2:<v:text path="shipping_address_2" />
      City:<v:text path="shipping_city" />
      State:<v:text path="shipping_state" />
      Country:<v:text path="shipping_country" />
      Zip/Postal Code:<v:text path="shipping_zip" />
      Phone Number:<v:text path="shipping_phone" />
    </v:store:user>
     <v:store:checkout register_page="register.html" redirect="order_placed.html" email_confirmation="/emails/confirmation" email_received="/emails/received" email_shipping="/emails/shipping">
    <v:store:if_credit_card>
     <li>
      <h3>Enter Your Credit Card Information</h3>
       Credit Card Type:</label><v:store:credit_card_select name="cc_type" required="true" /><label>Credit Card Number: <v:text_field name="cc_number" />
       Expiration Date (MM / YYYY): <v:text_field name="cc_month" /> / <v:text_field name="cc_year" /> 
       CVV2: <v:text_field name="cc_cvv" />
     </li>
    </v:store:if_credit_card>
    </ul>

     <input type="submit" value="Submit Order" />
     </v:store:checkout>

## Accepting Coupon Codes

As we have done in our example, you can use the
[`<v:store:discount>`](#v_store_discount) tag to give users the ability
to enter in "coupon codes," which you manage in Vae's Backstage (and we
discuss later in this chapter). Once a value is inputted into You can
then display the amount of money discounted using the
[`<v:store:if_discount`](#v_store_if_discount) and
[`<v:store:cart:discount />`](#v_store_cart_discount) tags. We have
utillized these tags in the example as well.

> **Warning**
>
> `<v:text_field name="discount" />` must be included within the
> [`<v:store:discount>`](#v_store_discount) tags in order for the
> discount code to be submitted to Vae.

## Changing Payment / Shipping Method

Use the
[`<v:store:payment_methods_select />`](#v_store_payment_methods_select)
tag render a menu which will display all the payment methods that your
site has been configured to accept. Similarly, the
[`<v:store:shipping_methods_select`](#v_store_shipping_methods_select)
tag will render a menu for selecting the appropriate shipping method.
