---
layout: docs
title: # Rich Text Area
---

# Rich Text Area

A Rich Text Area Structure stores HTML formatted text. Use these when
you need to support formatting or embedded images/video/HTML in your
text. When adding content to a Rich Text Structure in Vae's Backstage,
you'll be given a full featured Rich Text Editor that allows users to
format text without knowing HTML. This makes it easy for clients to
update news items or blogs themselves.

  ---------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Common Use Examples:                     Blog posts, news postings, descriptions, and other situations that require formatted text.
  Supported [Validations](#validations):   None.
  Related [VaeML](#vaeml) Tags:            The `<v:text>` tag is commonly used to render data stored in a Rich Text Area structure. Use the `asset_width=` and `asset_height=` attributes to automatically resize any embedded media.
  ---------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  : Fast Facts About the Rich Text Area structure

## Backstage Look and Feel

The Rich Text Area structure editing widget looks like a full featured
word processor. It follows the WYSIWYM philosophy, which means that
"What You See Is What You **Mean**," rather than the more common WYSIWYG
"What You See Is What You Get" philosophy. This means that the editor
window is designed to render your content in a way that makes authoring
and editing easier, even if it does not exactly match the final output
on your website.

Specifically, we do not import any styles from the website, so the
editor will not show your content in the correct font, size, or colors.
Paragraphs and headers are enclosed in a white box surrounded by a grey
margin. Images will sometimes be shown smaller than actual size, to
avoid overcrowding the editor. Embedded audio, video, or HTML embeds
such as YouTube are represented as placeholders in the editor. We think
that this is far better than cluttering the editor with all of your
media.

The actual editor is a fork of [WYMeditor](http://www.wymeditor.org/)
that has been greatly improved and extended by our own development team:

It includes the ability to make text bold, italic, underlined,
strikethrough, subscript, and superscript. Or create headers of varying
sizes. Additionally, it includes the ability to make hyperlinks to any
URL.

You may embed images, videos, or audio clips by directly uploading them
from your computer. We will automatically convert video to Flash H.264
and generate an audio or video player for any rich content. Or, embed
YouTube, Vimeo, or other external media by inserting your own embed
HTML.

The Rich Text Area widget also includes support for splitting your
content into multiple sections (such as a "below-the-fold" section for
blog posts).

The output of the Rich Text Area is XHTML 1.0 Strict compliant.
