---
layout: docs
title: "Full Site Tutorial: Vae Records"
---

# Full Site Tutorial: Vae Records

## Backstage Setup

Once you login into the designer portal, you can quickly add a new
website using the provided form:

![](assets/images/screenshots/example_site/add_site.png)

After filling in the site creation information, Vae might take a moment
to get everything set up for you. Once it's finished, click the big red
button to begin adding content.

![](assets/images/screenshots/example_site/add_site_confirmation.png)

### Organizing Your Data

The next screen you'll be taken to is Vae's Backstage:

![](assets/images/screenshots/example_site/organizing_data.png)

Vae's Backstage is the place where you organize all of your data. You
can also tweak lots of settings here. Eventually, your clients will use
this to update the content you create. We keep the content creation and
structuring simple. Create a Collection to hold multiple entries (like a
CD catalog), a Section for a single entry (like a welcome message), or
an External structure to reference another site (like WordPress).

![](assets/images/screenshots/example_site/organizing_data2.png)

After you create a Structure, you can give it sub-Structures. Sometimes
it helps to think of these like columns in a table. In the picture,
we're creating a record label's website, so we've created a Collection
called Artists, which contains a Collection called CDs. We've done this
because we want to keep track of all the artists that are signed to the
record label, along with the CDs each artist has created.

Say instead we were creating a website for a photographer client. In
such a situation we might make a Collection called Photographs, which
would contain Collections with names like "Indoor" and "Outdoor", which
would then (stay with me!) contain collections like "Black and White"
and "Color", which would each contain an Image Stucture that would store
the actual photographs. Whew! You can make your structures as complex or
as simple as you like. It's our hope that even when creating a website
that necessitates the most involved structuring, setting it up should be
intuitive.

The drill down on the left side of the page lets you navigate these
structures.

![](assets/images/screenshots/example_site/drilldown.png)

#### Adding Data

Once you're Structures are set up, adding content can be accomplished by
clicking on the Content tab. While the Site tab is where you structure
your website's content, the Content tab is soley dedicated to adding,
removing, and deleting the content itself. Ideally, this tab is all your
client will ever need to access.

![](assets/images/screenshots/example_site/content_tab.png)

Collections will always be hyperlinks, with the number of entries in the
Collection indicated in parentheses. Clicking a Collection reveals all
the entries for that Collection. Keep track of the tabs on the top of
your screen if you get lost!

![](assets/images/screenshots/example_site/content_tab_listing.png)

### Coding

If you type your websites URL into a browser before modifying your index
file, you'll see:

![](assets/images/screenshots/example_site/coding_index_placeholder.png)

We create a temporary placeholder index file in your webspace. FTP into
`yoursitename.vaeplatform.com` to begin designing your front end. If you
ever forget your FTP info, you can find it the Vae / FTP tab.

#### Adding VaeML

One of the most important tags to get acquainted with Vae is the
[`<v:collection>`](#v_collection) tag. It allows you to iterate through
an entire collection, rendering the requested contents of every entry in
the Collection. Once you are within a [`<v:collection>`](#v_collection)
tag, you can operate in that context. For example, in the picture, we
are iterating through the Artists collection. For each Artist, we will
print out that Artist's Name and Biography.

Additionally, we will link to that Artist's individual Artist page using
the [`<v:a>`](#v_a) tag. Setting the [`<v:a>`](#v_a) tag's href value to
"artist" will actually render a hyperlink with the href value of
"artist" and the current item's ID and title appended to it. Through the
magic of Vae, we can then create one single `artist.html` page, which
displays the appropriate Artist's information, based on what hyperlink
is clicked to get to the artist.html page.

    <h1>Welcome to Vae Records!</h1>
    <v:collection path="artists">
     <div class="artist_desc">
      <h3><v:a href="/artist"><v:text path="artist_name"/></v:a></h3>
      <v:text path="artist_bio"/>
     </div>
    </v:collection>

This will render as:

![](assets/images/screenshots/example_site/vaeml_output.png)

Here's the `artist.html` page from our example. This time, we're using
the `<v:collection>` tag to iterate through the current artist's CD
collection. Vae knows what context to operate in based on the hyperlink
that directs the user to this page, so we don't have to do any logic to
find the correct Artist. You should notice that the idea of "context" is
an important concept in Vae. Just as we can reference Items in a
Collection when we are writing code within the `<v:collection>` tag, we
can use the same principles when creating an HTML page that is linked to
using a `<v:a>` tag, which provides the context.

    <h1>Welcome to Vae Records!</h1>
    <h2><v:text path="artist_name"/></h2>

    Check out our CDs!
    <v:collection path="cds">
     <div class="albumListing">
      <v:a href="/CD"><v:img path="cover_art" image_size="cover_size" /></v:a>
      <div class="albumText">
       <v:a href="/CD"><v:text path="album_title"/></v:a>
      </div>
     </div>
    </v:collection>

Outputs...

![](assets/images/screenshots/example_site/vaeml_output_artisthtml.png)

Each of these links point to the `CD.html` page, but each provides a
different context, allowing unique content to be rendered from one file.
Here's the code for `CD.html`:

    <h1>Welcome to Vae Records!</h1>
    <h2><v:text path="artist_name"/></h2>

    Check out our CDs!
    <v:collection path="cds">
     <div class="albumListing">
      <v:a href="/CD"><v:img path="cover_art" image_size="cover_size" /></v:a>
      <div class="albumText">
       <v:a href="/CD"><v:text path="album_title"/></v:a>
      </div>
     </div>
    </v:collection>

Which outputs:

![](assets/images/screenshots/example_site/vaeml_output_cdhtml.png)

Context, it is worth reiterating, is important because it is capable of
saving you a TON of time. With just the code we just wrote, we can now
flesh out our entire website. Add more artists and CDs, and they'll
instantly appear on our site. Modify Artist or CD information, and again
your changes are instantly visible. Imagine how much time it would have
taken to create a new page for every artists, and a new one for every
CD. This site is quite simple, and it still could have taken a great
deal more time to create, and even more to maintain, had we not used
Vae.

#### Let's Add eCommerce

Another thing Vae does effeciently is eCommerce. A likely scenario for
our record label is a Add to Basket button next to each CD listing,
along with a cart and checkout page. No problem! To the bottom of our
`CD.html` file, we'll add the following:

    <v:store:add_to_cart redirect="/cart" inventory_field="inventory" name_field="album_title" price_field="price" weight_field="weight">
     Quantity:
     <input size="2" name="quantity" value="1" type="text" />
     <input type="submit" value="Add to Basket"/>
    </v:store:add_to_cart>

So now our CD listings sport a nice Add to Basket button, which will
take us to the `cart.html` page, once we create it. We're utilizing the
the [`<v:store:add_to_cart>`](#v_store_add_to_cart) tag to create the
add to cart form. The attributes we specified -- `inventory_field`,
`name_field`, `price_field`, and `weight_field` -- are Child Structures
we setup in the Backstage under the CD Structure. An explanation for
each can be found in the
[`<v:store:add_to_cart>`](#v_store_add_to_cart)documented. They are all
[Text](#structure.text) Structures. Here's the rendered page:

![](assets/images/screenshots/example_site/vaeml_output_cdhtml_addtocart.png)

Clicking on Add to Basket should take us to a cart page, which contains
code for us to view all the items in our cart.

     <v:store:cart>
      <table>
       <tr>
        <th>Remove</td>
        <th>Item</td>
        <th>Qty</td>
        <th>Price</td>
        <th>Total</td>
       </tr>
       <v:store:cart:items>
        <tr>
         <td><v:checkbox name="remove" /></td>
         <td><v:text path="name" /></td>
         <td><v:text_field path="qty" size="2" /></td>
         <td>$<v:text path="price" number_format="2" /></td>
         <td>$<v:text path="total" number_format="2" /></td>
        </tr>
       </v:store:cart:items>
      </table>
      
      <div><strong>Subtotal:</strong> $<v:store:cart:subtotal /></div>
       <div>
        <input type="submit" value="Update Cart" border="0" />
       </div>
       <div>
        <input type="button" onclick="window.location.href='/register';" value="Checkout &gt;" />
       </div>
      </div>
      <p><a href="/">Continue Shopping</a></p>
      <v:else>
       <p>Your cart is empty!</p>
       <p><a href="/">Continue Shopping</a></p>
      </v:else>
     </v:store:cart>

We're making use of the [`<v:store:cart>`](#v_store_cart) and
[`<v:store:cart:items>`](#v_store_cart_items) in this example, to
display all the items we've added to our cart, and allow the user to
modify the contents of their cart:

![](assets/images/screenshots/example_site/vaeml_output_carthtml.png)

Once the user clicks the Checkout &gt; button, they will be redirected
to the registration page. We set this to be `registration.html`. The
registration page is where users will input their billing shipping
information.

    <div id="main">
      <h2>Enter Your Information:</h2>
      <v:store:register redirect="checkout.html">
      <div class="registration_info">
       <h3>Billing Information:</h3>
       <table>
        <tr>
         <td>Name:</td>
         <td><v:text_field path="billing_name" required="name" />
        </tr>
        <tr>
         <td>Company:</td>
         <td><v:text_field path="billing_company" />
        </tr>
        <tr>
         <td>Address:</td>
         <td><v:text_field path="billing_address" required="true" />
        </tr>
        <tr>
         <td>Address 2:</td>
         <td><v:text_field path="billing_address_2" />
        </tr>
        <tr>
         <td>City:</td>
         <td><v:text_field path="billing_city" required="true" />
        </tr>
        <tr>
         <td>State/Province:</td>
         <td><v:state_select path="billing_state" required="uscanada" />
        </tr>
        <tr>
         <td>Country:</td>
         <td><v:country_select path="billing_country" required="true" />
        </tr>
        <tr>
         <td>Zip/Postal Code:</td>
         <td><v:text_field path="billing_zip" required="uscanada" />
        </tr>
        <tr>
         <td>Phone:</td>
         <td><v:text_field path="billing_phone" required="true" />
        </tr>
        <tr>
         <td>E-Mail Address:</td>
         <td><v:text_field path="e_mail_address" required="email" />
        </tr>
        <tr>
         <td>Confirm E-Mail Address:</td>
         <td><v:text_field path="confirm_e_mail_address" required="email" />
        </tr>
       </table>
      </div>
      <div class="registration_info">
       <p>Same as billing? <a href="#" onclick="shipping_billing(); return false;">Click here</a>.</p>
       <table cellspacing="0">
        <tr>
         <td>Name:</td>
         <td><v:text_field path="shipping_name" required="true" />
        </tr>
        <tr>
         <td>Company:</td>
         <td><v:text_field path="shipping_company" />
        </tr>
        <tr>
         <td>Address:</td>
         <td><v:text_field path="shipping_address" required="true" />
        </tr>
        <tr>
         <td>Address 2:</td>
         <td><v:text_field path="shipping_address_2" />
        </tr>
        <tr>
         <td>City:</td>
         <td><v:text_field path="shipping_city" required="true" />
        </tr>
        <tr>
         <td>State/Province:</td>
         <td><v:state_select path="shipping_state" required="uscanada" />
        </tr>
        <tr>
         <td>Country:</td>
         <td><v:country_select path="shipping_country" required="true" />
        </tr>
        <tr>
         <td>Zip/Postal Code:</td>
         <td><v:text_field path="shipping_zip" required="uscanada" />
        </tr>
        <tr>
         <td>Phone:</td>
         <td><v:text_field path="shipping_phone" required="true" />
        </tr>    
       </table>
       <input type="submit" value="Continue" />
      </div>
     </div>
     </v:store:register>

Here we're making use of the [`<v:store:register>`](#v_store_register)
tag to create our registration form:

![](assets/images/screenshots/example_site/vaeml_output_registerhtml.png)

After registering their information, we'll then take the user to a
standard checkout page. Here's the code for the top of the page, where
we'll list out the items that the user is purchasing, using the
[`<v:store:cart:items>`](#v_store_cart_items) tag.

    <h2>Checkout:</h2>
     <table>
      <tr>
       <th>Item</td>
       <th>Qty</td>
       <th>Price</td>
       <th">Total</td>
      </tr>

      <v:store:cart:items>
       <tr>
        <td><v:text path="name" /></td>
        <td><v:text path="qty" size="2" /></td>
        <td>$<v:text path="price" number_format="2" /></td>
        <td>$<v:text path="total" number_format="2" /></td>
       </tr>
      </v:store:cart:items>
     </table>

     <table>
      <tr><td>Subtotal:</td>
       <td>$<v:store:cart:subtotal /></td>
      </tr>
      <tr>
       <td>Shipping:</td>
       <td>$<v:store:cart:shipping /></td>
      </tr>
      <v:store:if_discount>
      <tr>
        <td>Discount:</td>
        <td>($<v:store:cart:discount />)</td>
      </tr>
      </v:store:if_discount>
      <tr>
       <td><strong>Total:</strong></td>
       <td><strong>$<v:store:cart:total /></strong></td>
      </tr>
     </table>   
     

Next we'll display the shipping select menu, using the
[`<v:store:shipping_methods_select>`](#v_store_shipping_methods_select)
tag.

     <v:store:if_shippable>
      Shipping Method: <v:store:shipping_methods_select />
     </v:store:if_shippable>
     <v:store:if_discount>
      Special Offer code applied.  Your discount will appear over there
      <v:else>

       <v:store:discount>
        If you have a Special Offer Code, enter it here and click Apply: <v:text_field name="discount" />
        <input type="submit" value="Apply" />
       </v:store:discount>
      </v:else>
     </v:store:if_discount>

Next we'll have the user confirm their shipping/billing information.
We'll use the [`<v:store:user>`](#v_store_user) tag to do this.

     <h3>Review Shipping and Billing Information: <a href="register.html">(edit)</a></h3>
     <v:store:user>
      <table>
       <tr>
        <td>
         <strong>Billing</strong>
         <table width="100%">
          <tr>
           <td>Name:</td>
           <td><v:text path="billing_name" /></td>
          </tr>
          <tr>
           <td>Company:</td>
           <td><v:text path="billing_company" /></td>
          </tr>
          <tr>
           <td>Address:</td>
           <td><v:text path="billing_address" /></td>
          </tr>
          <tr>
           <td>Address 2:</td>
           <td><v:text path="billing_address_2" /></td>
          </tr>
          <tr>
           <td>City:</td>
           <td><v:text path="billing_city" /></td>
          </tr>
          <tr>
           <td>State:</td>
           <td><v:text path="billing_state" /></td>
          </tr>
          <tr>
           <td>Country:</td>
           <td><v:text path="billing_country" /></td>
          </tr>
          <tr>
           <td>Zip/Postal Code:</td>
           <td><v:text path="billing_zip" /></td>
          </tr>
          <tr>
           <td>Phone Number:</td>
           <td><v:text path="billing_phone" /></td>
          </tr>
          <tr>
           <td>E-Mail Address:</td>
           <td><v:text path="e_mail_address" /></td>
          </tr>
         </table>
        </td>
        <td>
         <strong>Shipping</strong>
         <table>
          <tr>
           <td>Name:</td>
           <td><v:text path="shipping_name" /></td>
          </tr>
          <tr>
           <td>Company:</td>
           <td><v:text path="shipping_company" /></td>
          </tr>
          <tr>
           <td>Address:</td>
           <td><v:text path="shipping_address" /></td>
          </tr>
          <tr>
           <td>Address 2:</td>
           <td><v:text path="shipping_address_2" /></td>
          </tr>
          <tr>
           <td>City:</td>
           <td><v:text path="shipping_city" /></td>
          </tr>
          <tr>
           <td>State:</td>
           <td><v:text path="shipping_state" /></td>
          </tr>
          <tr>
           <td>Country:</td>
           <td><v:text path="shipping_country" /></td>
          </tr>
          <tr>
           <td>Zip/Postal Code:</td>
           <td><v:text path="shipping_zip" /></td>
          </tr>
          <tr>
           <td>Phone Number:</td>
           <td><v:text path="shipping_phone" /></td>
          </tr>
         </table>
        </td>
       </tr>
      </table>

Finally, we'll utilize [`<v:store:checkout>`](#v_store_checkout) and
[`<v:store:if_credit_card>`](#v_store_if_credit_card) to provide an
entry form for users to input their credit card information.

     <v:store:checkout redirect="order_placed.html" register_page="register.html">
      <v:store:if_credit_card>
       <h3>Enter Credit Card Information:</h3>
       <table>
        <tr>
          <td>Credit Card Type:</td>
          <td><v:store:credit_card_select name="cc_type" required="true" /></td>
        </tr>
        <tr>
         <td>Credit Card Number (no spaces or dashes):</td>
         <td><v:text_field name="cc_number" maxlength="16" /></td>
        </tr>
        <tr>
         <td>Expiration Date (mm/yyyy):</td>
         <td><v:text_field name="cc_month" size="4" maxlength="2" /> / <v:text_field name="cc_year" size="4" maxlength="4" /></td>
        </tr>
        <tr>
         <td>CVV2:</td>
         <td><v:text_field name="cc_cvv" size="4" maxlength="4" /></td>
        </tr>
       </table>
      </v:store:if_credit_card>
      <input type="submit" value="Submit Order" />
      </v:store:checkout>

The rendered content would look something like this:

![](assets/images/screenshots/example_site/vaeml_output_checkouthtml.png)

The last page our users will see is a confirmation page, which we've
called `order_placed.html`. For our site, the code will be quite simple.

    <html>
     <head>
      <title>My Store</title>
     </head>
     <body>
      <h2>Order Successful</h2>
      <p>We have E-Mailed you a receipt.</p>
      <p>The charge will show up on your statement as AVRecords.</p>
     </body>
     </html>

This will render as:

![](assets/images/screenshots/example_site/vaeml_output_order_placedhtml.png)

And we're done! A simple store has been implemented. As with most
everything in the Vae world, there is no one way to do things, and this
is certainly the case with eCommerce. We're proud of the fact that no
two Vae stores look exactly the same.
