---
layout: docs
title: Collection
---

# Collection

A Collection is a superstructure that may contain multiple child
structures, and entries of data. The collection is an integral part of
Vae's content management model. Use a Collection whenever you need to
store multiple entries of information within the same structure. For
example, the website for Vae Records, an awesome record label, needs to
have information about each artist signed to the label. In Vae, we'd
create an `Artists` collection with child structures called `Name`,
`Bio`, and `Photo`.

---|---
Common Use Examples:|News Posts, Items, Links, Press Entries, Stockists
Supported [Validations](/validations/):|None.
Related [VaeML](/vaeml/) Tags:|The `<v:collection>` tag allows iterating through each entry in the collection.

In the backstage, collections are generally displayed in a [List
View](/backstage.content.list/). In this screenshot, we are viewing the
`Artists` collection:

![](/images/screenshots/content_management/collection_list_view.png)

## Nested Collections

Vae also allows you to create Nested Collections, a variant of the
Collection. Nested collections are different from regular collections
because their entries are organized into a tree hierarchy -- that is,
some entries will be children of other entries. This is useful in a
variety of situations.

One example is creating a category navigation for an online store.
Imagine a guitar store -- they might have categories `Guitars`,
`Basses`, and `Drums`, but want to subdivide `Guitars` into `Acoustic`
and `Electric`. With a nested collection, this is possible and
intuitive. They would also be able to go in and further subdivide
`electric guitars` to `6-string` and `12-string`, for
example.

To create a nested collection, check the box Allow nested structures?
when creating a collection in the [Site &gt; Content
Management](/backstage.site.content_management/) tab:

![](/images/screenshots/content_management/add_new_collection.png)

In the backstage, Nested Collections operate very similarly to
collections. Entries that are children of other entries will be indented
in the [List View](/backstage.content.list/) and the reordering screen.
On the reordering screen, you may move entire branches of the tree into
different locations, and easily move an entry from one level or parent
to another.

In VaeML and PHP integration, child entries are treated like any other
child entry. The VaeQL name is the same for the parent and child.
