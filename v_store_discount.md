# `<v:store:discount>`{#v_store_discount}

Outputs an HTML form (`<form>` tag) that will process discount codes
entered by the visitor.

## Required Attributes

None.

## Optional Attributes

-   `hide_errors` - if set to `true`, the form will accept discount
    codes that exist in the system but are not valid unless more items
    are added to the current cart. If you are using the `custom` field
    on your coupon codes, you probably need to set this attribute. If
    this option is not set, the form will reject any discount codes that
    do not result in a discount on the current cart.

Since this tag generates an HTML `<form>` tag, you may also use any
standard HTML attributes that are valid in the `<form>` tag. These will
be passed through unchanged into the generated tag.

## Form Parameters

These are the request (POST) parameters that should be submitted with
the form:

-   `discount` - coupon code to apply.

You should create a `<v:text_field>` tag inside this tag with
`name="discount"`. This is where visitors should be instructed to enter
the discount code.

## Sample Usage

    <v:store:discount>
     If you have a Special Offer Code, enter it here and click Apply:
     <v:text_field name="discount" />
     <input type="submit" value="Apply" />
    </v:store:discount>
