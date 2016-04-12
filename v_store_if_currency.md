---
layout: docs
title: "<v:store:if_currency>"
---

# `<v:store:if_currency>`

Renders its contents only if the user has [elected to display the prices
on the site in a different currency](/v_store_currency_select/).

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](/v_else/) tag after this tag to specify
HTML to render if the user has not elected to display the prices on the
site in a different currency.

## Sample Usage

    <v:store:if_currency>
     Although you have been viewing prices in your home currency (<v:store:currency />), 
     be aware that we process all charges in United States Dollars and the currency 
     conversion will be handled by your credit card issuing bank.  There may be a 
     conversion fee or surcharge.
    </v:store:if_currency>
