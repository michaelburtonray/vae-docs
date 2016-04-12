---
layout: docs
title: Collecting Sales Tax
---

# Collecting Sales Tax

## Defining Tax Rates

Under the Store tab, click the Settings sub-tab and then the Tax Rates
link to manage your store's sales tax rules. On the initial screen you
can create and remove rules. Click on the Edit button to set that rule's
properties. Here's the Edit Tax Rate screen:

![](/images/screenshots/ecommerce/tax_rate_edit.png)

Here's an example rule that taxes users with a shipping address in
Florida:

![](/images/screenshots/ecommerce/tax_rate_rule_edit.png)

## Using Tax Classes To Only Charge Tax On Certain Types of Items

Say you are creating a clothing store using Vae, and the government has
just applied a special tax to all sweaters. You could markup the price
of all sweaters to accomodate for this special case, or just use a Tax
Class. Tax Classes are a way to define a group items that needs a
special tax rule. In your markup, just add the `tax_rate` attribute to
your [`<v:store:add_to_cart>`](/v_store_add_to_cart/), and use that value
when creating a new tax rule. So, if our Tax Class were to be called
"sweaters", our tag would look like:
`<v:store:add_to_cart tax_rate="sweaters">`. In the Backstage, you'd
then create a rule that applies to the "sweaters" Tax Class:

![](/images/screenshots/ecommerce/tax_sweaters.png)
