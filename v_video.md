---
layout: docs
title: "<v:video>"
---

# `<v:video>`

Outputs HTML that will display a video player that plays the video
uploaded to a Vae [Video structure](/structure.video/).

## Required Attributes

-   `path` - the path to the video structure that you would like
    to render. Uses [VaeQL](/vaeql/) syntax.

## Optional Attributes

-   `height` - height for the player. Note: you need to include some
    extra space here to accommodate the control bar at the bottom of
    the player.

-   `size` - If you have defined a specific Video Size for this video
    structure in the backstage, provide the name of the specific video
    size you created here and the video will be returned as scaled to
    that exact size and bitrate.

-   `width` - width for the player.

## Self Closed

This tag is usually self-closed.

## Sample Usage

    <v:video path="about_us/our_video" width="640" height="495" />
