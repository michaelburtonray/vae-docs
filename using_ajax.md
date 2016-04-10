---
layout: docs
title: Using AJAX
---

# Using AJAX

Some Vae tags utilize an attribute called `ajax`, which gives a the
designer the ability to specify a div to load content into,
asychronously. This can be useful when redirecting to a confirmation
page after a user submits a form, displaying errors, or any time you'd
like to load content without completely refreshing a page.

Let's use the `ajax` attribute in the `<v:a>` tag to load the contents
of an html page in a div. Say on our website we'd like a link for people
to click if they have a question, which would then display a form to
send us an email. Here's the code we'd use to implement that:

    <h3><v:a href="contact" ajax="contact">Have a question?</v:a></h3>
    <div id="contact"></div>

Our contact.html page would then contain something like:

    <div>
     <v:formmail to="k2@actionverb.com" redirect="confirmed.html">
      Your Name: <v:text_field name="Name" /><br /><br>
      Your Question: <v:text_area name="Comments" />
      <br><input type="submit" />
      </v:formmail>
    </div>

The link before it's clicked:

![](assets/images/screenshots/the_website/question_before.png)

And the result of clicking the link:

![](assets/images/screenshots/the_website/question_after.png)
