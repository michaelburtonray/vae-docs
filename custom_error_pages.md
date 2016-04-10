---
layout: docs
title: # Custom Error Pages {#custom_error_pages}
---

# Custom Error Pages {#custom_error_pages}

For a more polished look, you can edit the error pages that your
visitors will see if there is a server error. These files are simple
HTML templates that are not parsed by VaeML, Haml, PHP, or any other
preprocessors. They are located in a folder called `error_docs` that
exists by default in your FTP root. Simply editing these files will
change the error page that is shown in the event of a server error on
your website.

The most commonly encountered errors are 404 Not Found (error page
template `not_found.html`), 401 Unauthorized (error page template
`unauthorized.html`), and 500 Internal Server Error (error page template
`internal_server_error.html`). Use the default error document templates
as a starting point for your changes.

We recommend using absolute links to any images or assets referenced in
these pages so that they will work regardless of the request URL.

You may not use VaeML or PHP in Custom Error Pages. This is because if
the visitor is seeing an error page, it may have been caused by a
problem with VaeML or PHP and we don't want to send the user into an
endless loop.
