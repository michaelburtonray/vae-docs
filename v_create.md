---
layout: docs
title: "&lt;v:create&gt;"
---

# `<v:create>`

Outputs an HTML form (`<form>` tag) that when submitted will add an
entry to a Vae collection. This is commonly used for building CMS
functionality directly into your website, such as the ability for users
to post content, such as comments.

## Required Attributes

-   `path` - the path to the Vae collection to insert an entry into.
    Uses [VaeQL](/vaeql/) syntax.

## Optional Attributes

-   `formmail` - set to an E-Mail address and all the data from the form
    will be E-Mail address specified. This uses the same mechanism as
    the [`<v:formmail>`](/v_formmail/) tag.

-   `from` - if using the `formmail` attribute, specify a value here and
    we will make the E-Mail that is sent come from this address.

-   `from_field` - if using the `formmail` attribute, specify a value
    here and we will make the E-Mail that is sent come from the address
    specified in this form field. Good for making the E-Mail look like
    it came from the person who sent the form.

-   `newsletter` - supply a [newsletter
    code](/backstage.newsletter/) here and the user will
    automatically be subscribed to that newsletter when submitting
    the form. This assumes that the form asks for the user's E-Mail
    address in the parameter named `e_mail_address`. To change this, set
    the `newsletter_email_field` attribute.

-   `newsletter_confirm` - if specified, the user will only be
    subscribed to the newsletter specified in the newsletter code if
    this request variable is passed on. This is usually used to make a
    checkbox that the user can check to opt-in.

-   `newsletter_email_field` - if specified, we will look for the user's
    E-Mail address in the parameter with this name.

-   `redirect` - if specified, users will be redirected to this page
    once the create form is submitted.

-   You may use any attributes that are accepted by the
    [`<v:form>`](/v_form/) tag.

## Sample Usage

This will render a form that adds a comment to the comments structure:

{% highlight html %}
<v:create path="comments">
 Name:    <v:text_field path="name" />
 E-Mail:  <v:text_field path="email" />
 Comment: <v:text_area path="comment" />
 <input type="submit" />
</v:create>
{% endhighlight %}
