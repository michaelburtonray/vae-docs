---
layout: docs
title: "&lt;v:date_select&gt;"
---

# `<v:date_select>`

Outputs a three HTML select input fields (`<select>` tag) that represent
the month, date, and year components of a date.

When used in conjunction with other Vae tags that generate HTML forms,
the field will intelligently populate itself with a selected date if
data exists in the current working path that matches the path attribute
for this input. Additionally, [form validation](/vaeml_form_validation/)
can be run on the client and server end.

## Required Attributes

-   `path` - the path to the Vae item this input pertains to. Uses
    [VaeQL](/vaeql/) syntax. If provided, the `name` parameter will be
    set to this as well, and the value will be retrieved from this path.

OR:

-   `name` - request parameter name that the input value will be
    assigned to.

## Optional Attributes

-   `required` - if set and used in conjunction with a Vae form tag that
    generates an HTML form, validation will be performed on this field.
    Please see the [Validating Forms](/vaeml_form_validation/) page for
    more information.

-   `years_future` - if set to an integer greater than 0, we will display
    that number of future years as available for selection.  If omitted,
    the current year will be the maximum year available for selection.

Since this tag generates some HTML `<select>` tags, you may also use any
standard HTML attributes that are valid in the `<select>` tag. These
will be passed through unchanged into the generated tags.

## Self-closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
<v:store:register>
  Enter your birthdate:
  <v:date_select name="dob" />
  <input type="submit" />
</v:store:register>
{% endhighlight %}
