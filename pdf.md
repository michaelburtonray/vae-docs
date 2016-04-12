---
layout: docs
title: Generating PDFs
---

# Generating PDFs

Vae allows you to build PDF files on the fly from HTML and CSS source.
This can be used, for example, to create downloadable print-ready
versions of a one-sheet, portfolio, or search result. You may make full
use of VaeML, Haml, and PHP in generating the markup for your PDF
document.

Based on the file extension, Vae will automatically build and send the
generated PDF to the browser. Behind the scenes, this is accomplished by
running the HTML code through the [dompdf
library](http://www.digitaljunkies.ca/dompdf/) to produce a PDF.

Any file ending in `.pdf.html` will automatically be run through the PDF
engine. Any file ending in `.pdf.haml` will be run through
[Haml](/haml_sass/) and the PDF engine. Files ending in `.pdf.php` or
`.pdf.haml.php` will also be run through [PHP](/php_mysql/).

You may customize the size, orientation, and filename of the generated
PDF by using the `<v:pdf>` tag your HTML source. More information about
PDF generation is available on that page.
