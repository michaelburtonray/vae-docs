---
layout: docs
title: Real-Time Shipping Calculations
---

# Real-Time Shipping Calculations

Vae can automatically calculate shipping costs at checkout, as long as
the the `weight_field` has been properly set in the
[`<v:store:add_to_cart>`](/v_store_add_to_cart/) tag. To add this
functionality, you will need to add your desired shipping methods under
the Store / Settings tab:

![](/images/screenshots/ecommerce/add_shipping_method.png)

The Adding Shipping Methods screen will allow you to customize your
shipping options:

![](/images/screenshots/ecommerce/add_shipping_screen.png)

Once you've added your payment methods, Vae will automatically
communicate with the appropriate web services to calculate the shipping
costs. The user can select their desired shipping using the menu
rendered from the
[`<v:store:shipping_methods_select>`](/v_store_shipping_methods_select/)
tag:

![](/images/screenshots/ecommerce/shipping_method_select.png)
