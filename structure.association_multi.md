---
layout: docs
title: Association (multi)
---

# Association (multi)

The Association (multi) structure stores an association with other
entries on Vae. When creating the structure, you specify which
collections to allow association with.

---|---
Common Use Examples:|Categories (references a Categories collection), Recommended Items (references the Items collection)
Supported [Validations](/validations/):|None.
Related [VaeML](/vaeml/) Tags:|The `<v:collection>` tag allows iterating through each selected entry, as if they were a collection.

When accessing the value in VaeML, you can use VaeQL to loop through the
associated entries, as if it were they were in a child collection of the
current context.

## Backstage Look and Feel

The Association (multi) structure editing widget looks like a scrolling
list of checkboxes:

![](/images/screenshots/content_management/association_structure_multi.png)

When an Association (multi) structure is visible in the list view, the
titles of the selected associated entries are displayed
(comma-delimited):

![](/images/screenshots/content_management/association_structure_multi_listview.png)
