---
layout: docs
title: "<v:store:if_field_overridden>"
---

# `<v:store:if_field_overridden>`

Renders its contents only if the specified structure in the item context
is overridden in the context of its options.

## Required Attributes

-   `field` - name of the structure to check if it is overridden.

-   `options_collection` - name of the options collection.

## Optional Attributes

None.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if the field is not overridden.

## Sample Usage

    <v:store:if_field_overridden field="price" options_collection="sizes">
     Price varies by item size.
     <v:collection path="sizes">
      Price for size <v:text path="size" />: $<v:text path="price" />
     </v:collection> 
    </v:store:if_field_overridden>
    <v:else>
     Price for all sizes: $<v:text path="price" />
    </v:else>
