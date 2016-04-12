---
layout: docs
title: Tags
---

# Tags

The Tags structure stores tags that can be used to associate the parent
entry with different topics.

---|---
Common Use Examples:|Tagging (as on a blog)
Supported [Validations](#validations):|None.
Related [VaeML](#vaeml) Tags:|The `<v:collection>` tag allows iterating through each tag, as if they were a collection.

When accessing the tags in VaeML, you can use VaeQL to loop through the
tags, as if it were they were in a child collection of the current
context. The value of each tag is stored in a child structure called
`tag`.

## Backstage Look and Feel

The Tags structure editing widget looks like a text field. Tags are
separated by commas:

![](/images/screenshots/content_management/text_structure.png)

When a Tags structure is displayed in the list view, tags are displayed
separated by commas:

![](/images/screenshots/content_management/text_structure_listview.png)
