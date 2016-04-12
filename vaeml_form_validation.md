---
layout: docs
title: Validating Forms
---

# Validating Forms {#vaeml_form_validation}

When Vae tags that generate an HTML form (such as `<v:formmail>`) are
combined with Vae form input tags (such as `<v:text_field>`), Vae can
automatically perform validation on the input data.

To enable basic validation (requiring that a value be entered), simply
set the `required` attribute to `true` in every form input element that
should be required.

## Special Validation Types

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

## Displaying Validation Errors

Validation failures are normally displayed inside a Vae flash box, which
automatically appears before any Vae form tag. To display the errors
elsewhere, simply put a `<v:flash />` tag somewhere on your page.

You can style the errors by creating a CSS style for the class `.err`.

## Inline Validation

Normally this validation takes place on the server side. You can also
set the attribute `validateinline="true"` in your form tag to move this
validation to the client side via Javascript. (Validation will continue
to happen on the server side as well). If this happens, any validation
errors detected when the user tries to submit the form will show up on
your page instantly. You can style these errors by applying CSS styles
to the `label` element.

## Confirmations

To force the user to enter a field twice for confirmation (commonly used
when setting a password), simply create another field and prepend
`confirm_` to the name/path. For example:

{% highlight html %}
<v:password_field path="password" />
<v:password_field path="confirm_password" />
{% endhighlight %}

Vae will automatically ensure that the value in each text field is the
same as part of the validation process.
