---
layout: docs
title: Customizing Order Confirmation E-Mails
---

# Customizing Order Confirmation E-Mails

If you take a look at the [`<v:store:checkout>`](#v_store_checkout) tag
in our example code, you will see the attribute
`email_confirmation="/emails/confirmation"`. This tells Vae where to
look for files the user's email confirmation is based off of. In our
case, we need to put the email confirmation files within a folder called
`emails`. You will need to create two files: one HTML and one plain
text. Users who disable HTML on their email clients will see the plain
text version, while everyone else will see the HTML email. For our
example, these files will be called confirmation.html and
confirmation.txt.html.

In both the HTML and plain text file, you can use Vae's
[`<v:store:user>`](#v_store_user) and
[`<v:store:cart:items>`](#v_store_cart_items) tags to inject user and
order information into your email. Most designers send a summary of the
items ordered, the cost, payment method used, shipping method used, and
the shipping address.
