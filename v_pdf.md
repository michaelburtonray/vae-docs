---
layout: docs
title: "<v:pdf>{#v_pdf}"
---

# `<v:pdf>`{#v_pdf}

To render pages as a PDF, they should be named `.pdf.html`, `.pdf.haml`,
`.pdf.html.php`, or `pdf.haml.php`. For more information, please see the
[documentation on generating PDFs on Vae](#pdf).

You may place this tag anywhere in the page to specify options for the
PDF output. Use this tag to set the paper size, orientation, and
download filename.

> **Warning**
>
> This tag only works inside of a page that is being rendered with the
> Vae PDF engine.

## Required Attributes

None.

## Optional Attributes

-   `filename` - output filename. `.pdf` will be appended to whatever
    you set here.

-   `orientation` - paper orientation. Valid options are
    `portrait` (default) and `landscape`.

-   `paper` - paper size. Common sizes are `letter` (default), `legal`,
    and `ledger`.

    Here is a full list of supported paper sizes: `8.5×11`, `8.5×14`,
    `11×17`, `2a0`, `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`,
    `a8`, `a9`, `a10`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`,
    `b8`, `b9`, `b10`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`,
    `c8`, `c9`, `c10`, `commerical#10envelope`, `catalog#101/2envelope`,
    `executive`, `folio`, `legal`, `ledger`, `letter`, `ra0`, `ra1`,
    `ra2`, `ra3`, `ra4`, `sra0`, `sra1`, `sra2`, `sra3`, `sra4`,
    `tabloid`.

## Self-closed

This tag is usually self-closed.

## Sample Usage

    <html>
     <body>
      <v:pdf filename="HelloWorld" orientation="landscape" paper="legal" />
      <p>This will render inside a PDF file called HelloWorld!</p>
      <p>It will be landscape and legal sized paper!</p>
     </body>
    </html>
