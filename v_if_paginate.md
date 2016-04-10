---
layout: docs
title: "<v:if_paginate>{#v_if_paginate}"
---

# `<v:if_paginate>`{#v_if_paginate}

Renders its contents only if a specified collection contains more than a
certain number of items (causing it to spill onto multiple pages).

## Required Attributes

-   `collection` - `id` of the `<v:collection>` tag that is
    being paginated.

This alternate syntax works but is not recommended because it doesn't
allow you to specify all the other options that are specified in
`<v:collection>`:

-   `path` - the path to the Vae collection you are paginating. Uses
    [VaeQL](#vaeql) syntax.

-   `paginate` - number of items to show on one page.

## Optional Attributes

-   None.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if there is no value set for that path.

## Sample Usage

    <v:collection id="events_collection" path="events" paginate="10">
     <li><v:text path="name" /></li>
    </v:collection>
    <v:if_paginate collection="events_collection">
     Be sure to look on the other pages for more events!
    </v:if_paginate>
    <v:else>There are no more events.</v:else>

This will also work, but this syntax is deprecated as it doesn't allow
you to specify all the other options that are specified in
`<v:collection>`:

    <v:if_paginate path="events" paginate="10">
     Be sure to look on the other pages for more events!
    </v:if_paginate>
    <v:else>There are no more events.</v:else>
