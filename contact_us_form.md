# A 'Contact Us' Form {#contact_us_form}

A common feature of many sites is a 'Contact Us' form, which allows
users to quickly shoot an email to the client. With Vae, you can utilize
the [`<v:formmail>`](#v_formmail) tag to quickly make such a form.
Besides making the process simple, using Vae for you contact form
obscures the email address which the form sends the data to. Also, since
[`<v:formmail>`](#v_formmail) supports all of the [`<v:form>`](#v_form)
tag attributes, validation is supported.

    <v:formmail to="k2@actionverb.com" redirect="confirmed.html">
     Your Name: <v:text_field name="Name" />
     Your Question: <v:text_area name="Comments" />
     <input type="submit" />
    </v:formmail>

Note the `redirect` attribute, which in our example points to
"confirmed.html". This will be the page the user is taken to upon
submitting the form. Just like the [`<v:form>`](#v_form) tag,
[`<v:formmail>`](#v_formmail) supports the `ajax` attribute. If you
choose to use it, the redirect page will be loaded inside the div you
specify for your `ajax` attribute, asynchronously.
