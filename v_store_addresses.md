---
layout: docs
title: # &lt;v:store:addresses&gt;
---

# &lt;v:store:addresses&gt;

Iterates over all addresses stored in the profile for the currently
logged-in customer. Typically used to build a My Account page that
allows users to delete a stored address.

Within this tag, the current context will be that of the address. Use
the `<v:debug>` tag to see the available structures.

## Required Attributes

None.

## Optional Attributes

None.

## Sample Usage

    <v:store:addresses>
     <v:text path="address_type" />
     <v:text path="name" />
     <v:text path="company" />
     <v:text path="address" />
     <v:text path="address_2" />
     <v:text path="city" />
     <v:text path="state" />
     <v:text path="zip " />
     <v:text path="country" />
     <v:text path="phone" />
     <v:store:address_delete>Delete</v:store:address_delete>
    </v:store:addresses>
