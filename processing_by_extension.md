---
layout: docs
title: # Summary -- Processing by Extension
---

# Summary -- Processing by Extension

As you have seen, Vae supports many different forms of preprocessing on
documents. The exact set of processing is determined by the file
extension. Here is a summary of how documents will be processed by file
extension:

  Extension         Output Format   Processors (in order)      Cached?
  ----------------- --------------- -------------------------- ---------
  `.html`           HTML            VaeML                      Yes
  `.xml`            XML             VaeML                      Yes
  `.rss`            XML             VaeML                      Yes
  `.php`            HTML            PHP, VaeML                 -
  `.haml`           HTML            Haml, VaeML                Yes
  `.haml.php`       HTML            PHP, Haml, VaeML           -
  `.pdf.html`       PDF             VaeML, dompdf              -
  `.pdf.haml`       PDF             Haml, VaeML, dompdf        -
  `.pdf.php`        PDF             PHP, VaeML, dompdf         -
  `.pdf.haml.php`   PDF             PHP, Haml, VaeML, dompdf   -
  `.sass`           CSS             SASS                       Yes

The Cached? column refers to whether the rendered output will be cached
in the Vae [caching system](#caching).
