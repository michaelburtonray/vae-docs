---
layout: docs
title: # Integrating With a Third-Party for Order Fulfillment {#ecommerce.integrating_third_party_order_fulfillment}
---

# Integrating With a Third-Party for Order Fulfillment {#ecommerce.integrating_third_party_order_fulfillment}

Most of our customers warehouse and ship products themselves. Vae makes
this easy – Vae will automatically generate a packing slip for each
order for you.

However, many of our customers prefer to outsource their warehousing and
shipping to a third party fulfillment service. You send them your
products, and they will warehouse them and ship them directly to your
customers when an order is received.

## Integrating with Bergen Shippers, Fullfillment by Amazon, Shipwire, and Webgistix (Built-In to Vae)

Currently, we fully integrate with the fulfillment operations of Bergen
Logistics. We also have beta support for Webgistix, Shipwire, and
Fulfillment by Amazon. If you are interested in using any of these
services, we will work with you for free to ensure that everything gets
up and running properly.

Each has their own pricing structure, and you should do your own
research to determine which would be best for you. Once you have an
account created with the fulfillment provider, you can set it up in Vae.

If you work with another fulfillment provider that offers an API for
submitting orders, we can work with you to have orders from Vae
automatically sent to your fulfillment house. Please contact us and we
will give you an estimate regarding cost and lead time.

## Integrating with UPS WorldShip, Australia Post eParcel, and Endicia/USPS

If you handle shipping yourself, we also integrate with UPS WorldShip,
Endicia (USPS), and Australia Post's eParcel system so that you don't
have to manually key in shipping labels.

## Using Vae PHP API to build your own fulfillment integration

You could also use Vae's PHP API to build your own fulfillment
integration. It wouldn't be as tightly coupled with the Vae backend, but
since you can retrieve a list of orders, you can do with them what you
like.
