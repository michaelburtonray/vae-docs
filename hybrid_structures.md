---
layout: docs
title: # Hybrid Structures {#hybrid_structures}
---

# Hybrid Structures {#hybrid_structures}

Admittedly, the terminology is getting a little over-the-top, but it is
important to dedicate a separate category to two structures because they
behave somewhat like simple structures and somewhat like
Superstructures.

The two Hybrid Structures are the Association (single) and the
Association (multi) structures. These structures allow you to associate
one entry with an entry in another collection. Their usage is somewhat
analogous to `belongs_to` and `has_many` in Ruby on Rails and
`INNER JOIN`s in database terminology.

Within their parent, they behave like a simple structure. They produce
an editor widget on the editor screen just like any other simple
structure. However, the associated entries can also be browsed on the
associated collection.

For example, imagine a top level Collection called `Categories`, with
only one Text structure inside it called `Name`. Also, imagine a top
level Collection called `Items` with a Text structure called `Name`, and
an Association (single) structure associating the item with a category
from the `Categories` collection. This makes intuitive sense: the item
*belongs to* a category. So when browsing the `Items` collection, the
Association structure works like a simple structure. It renders a simple
editor widget on the create and edit pages, and displays the name of the
associated category in the list table view. However, when browsing the
`Categories` collection, the association will render like a Collection.
Next to each category in the list view will be a link to Show Items,
just as there would have been if the `Categories` collection had
contained a child collection called `Items`. Actually, this behavior
only happens when a value is provided for Reverse Association Name in
the configuration of the Association, but understanding this is key to
understanding the power of associations.

The difference between the Association (single) structure and the
Assocation (multi) structure is pretty obvious: the Association (single)
associates the entry with one other entry, while the Association (multi)
associates the entry with zero or more entries.
