---
layout: docs
title: # VaeML
---

# VaeML

VaeML is our meta-language that you can mix in with your HTML code to
render your data onto webpages. VaeML is automatically parsed in any
file ending in `.html`, `.php`, `.haml`, `.rss`, or `.xml`.

VaeML is easy to learn, yet extremely powerful in practice. You can
build amazingly complicated websites using VaeML.

## Main Tags {#vaeml_main_tags}

The main tags are the VaeML tags that are most commonly used.

## Store/eCommerce Tags {#vaeml_store_tags}

Store/eCommerce tags are used to create an eCommerce application on your
website. With the VaeML Store tags, you can create a full-featured
shopping cart and checkout flow. Because the interaction is hand-built
by the designer using VaeML tags, you can customize almost every aspect
of your online store.

## User Registration Tags {#vaeml_users_tags}

User registration tags are used to allow visitors to your website to log
in or register for an account. This can be used to create members-only
sections, to authenticate comment posting for a blog, or for any number
of other community functions.

To use user registration, simply create a root-level collection to hold
your users. Then create any structures inside it to hold information
about your users. You will likely want a structure for E-Mail address
and password, at a minimum. We plan to soon write a tutorial page about
user registration.

## Form Item Tags {#vaeml_form_tags}

Form Item tags are used to build context-aware forms on Vae. Each of
these tags renders an HTML form or input tag, but it will automatically
populate values where appropriate, as well as supporting complex
validations, both on the client and server side.

### Validating Forms {#vaeml_form_validation}

When Vae tags that generate an HTML form (such as `<v:formmail>`) are
combined with Vae form input tags (such as `<v:text_field>`), Vae can
automatically perform validation on the input data.

To enable basic validation (requiring that a value be entered), simply
set the `required` attribute to `true` in every form input element that
should be required.

#### Special Validation Types

You may also set the `required` attribute to some special values to
enable more complex validations.

-   Set it to `creditcard` to ensure that the value provided is a valid
    credit card number.

-   Set it to `date` to ensure that the value provided is a valid date.

-   Set it to `digits` to ensure that the value provided is made up of
    only the digits `0`-`9`.

-   Set it to `email` to ensure that the value provided is a valid
    E-Mail address.

-   Set it to `name` to ensure that the value provided contains both a
    first and last name.

-   Set it to `number` to ensure that the value provided is a
    valid number.

-   Set it to `url` to ensure that the value provided is a valid URL.

-   Set it to `uscanada` to ensure that the field has a value, but only
    if the corresponding country field is set to `United States` or
    `Canada`. This is mainly useful for `<v:state_select>`. The
    documentation for `<v:state_select>` explains how we determine the
    corresponding country field.

#### Displaying Validation Errors

Validation failures are normally displayed inside a Vae flash box, which
automatically appears before any Vae form tag. To display the errors
elsewhere, simply put a `<v:flash />` tag somewhere on your page.

You can style the errors by creating a CSS style for the class `.err`.

##### Inline Validation

Normally this validation takes place on the server side. You can also
set the attribute `validateinline="true"` in your form tag to move this
validation to the client side via Javascript. (Validation will continue
to happen on the server side as well). If this happens, any validation
errors detected when the user tries to submit the form will show up on
your page instantly. You can style these errors by applying CSS styles
to the `label` element.

#### Confirmations

To force the user to enter a field twice for confirmation (commonly used
when setting a password), simply create another field and prepend
`confirm_` to the name/path. For example:

    <v:password_field path="password" />
    <v:password_field path="confirm_password" />

Vae will automatically ensure that the value in each text field is the
same as part of the validation process.
