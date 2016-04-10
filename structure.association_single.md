---
layout: docs
title: Association (single)
---

# Association (single)

The Association (single) structure stores an association with another
entry on Vae. When creating the structure, you specify which collections
to allow association with.

  ---------------------------------------- -----------------------------------------------------------------------------------------------
  Common Use Examples:                     Author Name (references an Authors collection), Category (references a Categories collection)
  Supported [Validations](#validations):   None.
  Related [VaeML](#vaeml) Tags:            None.
  ---------------------------------------- -----------------------------------------------------------------------------------------------

  : Fast Facts About the Association (single) structure

When accessing the value in VaeML, you can use VaeQL to obtain the
values of child structures of the associated entry, as if it were an
actual child structure of the current context.

## Backstage Look and Feel

The Association (single) structure editing widget looks like a dropdown
menu, containing the titles of the associated entries in the dropdown:

![](/images/screenshots/content_management/association_structure_single.png)

When an Association (single) structure is visible in the list view, the
title of the selected associated entry is displayed:

![](/images/screenshots/content_management/association_structure_single_listview.png)

The name that is displayed for each associated entry is the title of
that entry. To set this, navigate to the associated collection in the
Site tab and set its title properly.
