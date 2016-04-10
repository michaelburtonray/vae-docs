---
layout: docs
title: # vae\_multipart\_mail() {#php_vae_multipart_mail}
---

# vae\_multipart\_mail() {#php_vae_multipart_mail}

The `vae_multipart_mail()` function sends an E-Mail in both text and
HTML format.

## Usage

`vae_multipart_mail($from, $to, $subject, $text_part,             $html_part)`

-   `$from` - E-Mail address that will be the From address in
    the E-Mail. You may specify a name here as well by using the
    standard E-Mail formatting: `John Doe <johndoe@verbcms.test>`.

-   `$to` - E-Mail address that the E-Mail will be sent to. You may
    specify multiple E-Mail addresses delimited by commas.

-   `$subject` - Subject of the E-Mail.

-   `$text_part` - Text part of the E-Mail.

-   `$html_part` - HTML part of the E-Mail.

## Returns

Returns `true`.

## Sample Usage

    <?php
    // Send Welcome E-Mail
    $text = "Hello, thanks for becoming a customer!";
    $html = "Hello, <b>thanks</b> for becoming a customer!";
    vae_multipart_mail("My Website <mywebsite@vaeplatform.test>", $email_address, "Welcome to My Website", $text, $html);
    ?>
