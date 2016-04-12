---
layout: docs
title: "&lt;v:file_field&gt;"
---

# `<v:file_field>`

Outputs an HTML file input field (`<input type="hidden">` tag).

[Form validation](/vaeml_form_validation/) can be run on the client and
server end.

## Required Attributes

-   `path` - the path to the Vae item this input pertains to. Uses
    [VaeQL](/vaeql/) syntax. If provided, the `name` parameter will be
    set to this as well.

OR:

-   `name` - request parameter name that the input value will be
    assigned to.

## Optional Attributes

-   `required` - if set and used in conjunction with a Vae form tag that
    generates an HTML form, validation will be performed on this field.
    Please see the [Validating Forms](/vaeml_form_validation/) page for
    more information.

Since this tag generates an HTML `<input>` tag, you may also use any
standard HTML attributes that are valid in the `<input>` tag. These will
be passed through unchanged into the generated tag.

## Self-closed

This tag is usually self-closed.

## Sample Usage

{% highlight html %}
<v:formmail to="test@domain.org">
  Upload your resume: <v:file_field name="Resume" />
  <input type="submit" />
</v:formmail>
{% endhighlight %}
