---
layout: docs
title: "<v:store:credit_card_select>"
---

# `<v:store:credit_card_select>`

Outputs an HTML select input field (`<select>` tag) prepopulated with a
list of acceptable credit card types as options.

## Required Attributes

-   `path` - the path to the Vae item this input pertains to. If
    provided, the `name` parameter will be set to this value as well.

OR:

-   `name` - request parameter name that the input value will be
    assigned to.

When using this tag inside a `<v:store:checkout>` form, you should
assign it a `name="cc_type"`.

## Optional Attributes

-   `required` - if set and used in conjunction with a Vae form tag that
    generates an HTML form, validation will be performed on this field.
    Please see [VaeML Form Tag Validations](/vaeml_form_validation/) for
    more information.

Since this tag generates an HTML `<select>` tag, you may also use any
standard HTML attributes that are valid in the `<select>` tag. These
will be passed through unchanged into the generated tag.

## Self-closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
<v:store:checkout>
 ...
 What kind of credit card would you like to use?
 <v:store:credit_card_select name="cc_type" />
 ... 
 <input type="submit" />
</v:store:checkout>
{% endhighlight %}
