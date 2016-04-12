---
layout: docs
title: Date
---

# Date

A Date Structure stores a date value. When editing this Structure in
Vae's Backstage Content tab, a calendar widget allows for easy date
selection.

By default, the Date Structure will be pre-populated with the current
date when adding a new entry.

---|---
Common Use Examples:|Blog Post date, News Entry date, Date of an Event
Supported [Validations](#validations):|Presence.
Related [VaeML](#vaeml) Tags:|The `<v:text>` tag is commonly used to render data stored in a Date structure. The `strftime=` attribute on `<v:text>` allows you to customize the date formatting.

## Backstage Look and Feel

The Date structure editing widget is a text field that opens a popup
calendar when you click into the text field:
