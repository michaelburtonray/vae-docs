---
layout: docs
title: Paginating A Collection
---

# Paginating A Collection

Vae's `paginate` attribute allows you to limit the number of entries the
`<v:collection>` tag will output. Here's an example code snippet hat
outputs two text fields from a Collection called 'Artists'. There are
three entries in our Collection, and we will output all three entries.

    <h1>Welcome to Vae Records!</h1>
    <v:collection path="artists">
     <h3><v:a href="/artist"><v:text path="artist_name"/></v:a></h3>
     <v:text path="artist_bio"/>
     </v:collection path="Artists">
     <v:select id="menu" />

And here's how this might look when renedered on a website:

![](/images/screenshots/the_website/cookbook/without_paginate.png)

If for some reason we decided we'd like to display just two Artists at a
time, `Paginate` becomes very handy. For our example, we'll also use an
attribute of `<v:collection>` called `page_select`. This allows us to
specify a select menu which can be used to navigate between pages.

    <v:collection path="artists" page_select="menu" paginate="2">
     <h3><v:a href="/artist"><v:text path="artist_name"/></v:a></h3>
     <v:text path="artist_bio"/>
    </v:collection path="Artists">
    <v:select id="menu" />

And now the collection displays in two separate pages:

![](/images/screenshots/the_website/cookbook/with_paginate.png)

Page 2:

![](/images/screenshots/the_website/cookbook/with_paginate_2.png)

If you'd instead like to use links to navigate, the `next` and
`previous` attributes allow you to specify `<v:a>` tags to use for
navigation. Here's our code, modified to to produce 'Next' and
'Previous' links.

    <v:collection path="artists" page_select="menu" next="next" previous="prev" paginate="2">
     <h3><v:a href="/artist"><v:text path="artist_name"/></v:a></h3>
     <v:text path="artist_bio"/>
    </v:collection path="Artists">
    <v:a id="next">Next</v:a> 
    <v:a id="prev">Previous</v:a>

Here's the two pages that are then rendered:

![](/images/screenshots/the_website/cookbook/with_paginate_next.png)

Page 2:

![](/images/screenshots/the_website/cookbook/with_paginate_prev.png)
