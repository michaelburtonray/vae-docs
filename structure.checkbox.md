---
layout: docs
title: # Checkbox {#structure.checkbox}
---

# Checkbox {#structure.checkbox}

A Checkbox structure stores a boolean yes-or-no value. Suppose you are
desigining a site for a car dealership who wants to display, for each
car, whether or not it has a V8 engine or a convertable top. Creating a
Checkbox Structure for each of these attributes would allow the client
to quickly indicate whether or not a car has either attribute.

You could then use the `<v:if>` VaeML tag display icons next to the car
listing that indicate whether the car has a V8 or a convertable top.

The Checkbox structure is also often used to allow your clients to
toggle between different display modes, to show and hide navigation
elements, or anywhere else where a yes or no choice makes sense.

  ---------------------------------------- --------------------------------------------------------------------------------------------------
  Common Use Examples:                     Any yes-or-no option.
  Supported [Validations](#validations):   None.
  Related [VaeML](#vaeml) Tags:            The `<v:if>` tag is commonly used to selectively render a page fragment if an option is enabled.
  ---------------------------------------- --------------------------------------------------------------------------------------------------

  : Fast Facts About the Checkbox structure

## Backstage Look and Feel

The Checkbox structure editing widget looks like a checkbox:
