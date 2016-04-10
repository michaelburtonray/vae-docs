---
layout: docs
title: # Structures
---

# Structures

In Vae, the basic container for content is called a structure. A simple
example of a structure is a [Text](#structure.text) structure. It holds
a string of text. In the Backstage, it will be presented to users as a
standard text input box. On your website, it can be ouput as a string of
text. There are many other types of structures, including [Text
Area](#structure.textarea), [Rich Text](#structure.richtext),
[Image](#structure.image), [Date](#structure.date),
[Color](#structure.color), [File](#structure.file),
[Video](#structure.video), and more. Additionally there are two
structures that can hold other structures: the
[Collection](#structure.collection) and the
[Section](#structure.section). We call these the superstructures.

If you're familiar with relational database terminology (such as MySQL),
a rough analogue is that Vae superstructures are like database tables,
Vae structures are like database columns, and Vae entries are like
database rows. Vae is a little more complicated, though, because Vae
allows a superstructure to act as a "column", enabling complex nesting
easily.

We will discuss the [simple structures](#simple_structures) first, then
move to the [superstructures](#superstructures). We will then discuss
[hybrid structures](#hybrid_structures), which act a bit like simple
structures and a bit like superstructures.
