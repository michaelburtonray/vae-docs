---
layout: docs
title: # Validations
---

# Validations

Vae provides validations that can be enabled on strucures that ensure
that they are properly completed by your users. There are four types of
validations: Require a Value, Require Numericality, Require Uniqueness,
and Maximum and Minimum Length. We may add more validations in the
future; if you have any suggestions please [contact
us](http://vaeplatform.com/contact).

Validations can be enabled when creating or editing a structure on the
Site &gt; Content Management tab. Simply check the appropriate
checkboxes or enter a value into the appropriate field to turn
validations on or off.

## Require A Value

When the Require a Value validation is enabled, Vae will require that
this structure is not left blank when creating a new entry or editing an
existing entry. For example, when creating a store, you might want to
require that all the items in the store do not have a blank price field.

## Require Numericality

When the Require Numericality validation is enabled, Vae will require
that any value entered into this field is numeric. It will not prevent a
blank value from being entered. If you need that functionality, use the
Require a Value validation in conjunction with Require Numericality.

Decimals are permitted. Require Numericality is often used for prices
and weights.

## Require Uniqueness

When the Require Uniqueness validation is enabled, Vae will ensure that
a value is not represented twice in the same Collection. This feature is
often used with Collections that hold items for a store. Using Require
Uniqueness on a stored SKU number makes sure that the same item doesn't
get added twice.

## Maximum and Minimum Length

When the Minimum Length or Maximum Length validation is enabled, Vae
will ensure that a Structure's value is within the minimum and maximum
lengths specified. This might be useful, for example, to limit the title
of blog posts to, say, 30 characters. Or, if you know that all UPC
barcodes are 10-13 digits, you can set `10` as a minimum length and `13`
as a maximum length to ensure that a valid UPC barcode is entered.
