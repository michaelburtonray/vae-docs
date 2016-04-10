---
layout: docs
title: "<v:store:address_delete>"
---

# `<v:store:address_delete>`

Outputs an HTML link (`<a>` tag) that will delete the stored customer
address in the currenct context when clicked on by the user.

## Required Attributes

None.

## Optional Attributes

-   `redirect` - if specified, the user will be redirected to this page
    after deleting the address.

Since this tag generates an HTML `<a>` tag, you may also use any
standard HTML attributes that are valid in the `<a>` tag. These will be
passed through unchanged into the generated tag.

Everything between the opening and closing tag is used as the body of
the link (it will go between the opening and closing `<a>` tags that are
generated).

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
