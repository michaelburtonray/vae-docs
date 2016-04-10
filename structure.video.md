---
layout: docs
title: # Video
---

# Video

The Video Structure allows users to upload videos in virtually any video
format. Vae will automatically convert any uploaded video to embeddable
Flash H.264 format. Use the `<v=path>` shortcut to easily embed the
converted Flash Video into your site.

  ---------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Common Use Examples:                     Videos
  Supported [Validations](#validations):   None.
  Related [VaeML](#vaeml) Tags:            The the `<v=path>` shortcut is usually used to embed the converted Flash Video into your site. The `<v:file>` tag allows downloading videos stored in a Video structure.
  ---------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  : Fast Facts About the Video structure

## Backstage Look and Feel

The Video structure shows a file upload widget in the backstage:

Once a video has been uploaded, the widget expands to show a thumbnail
of the video and provide options to delete and replace:

## Sizing / Encoding

Vae can automatically resize and encode videos to an exact size and
bitrate that you specify. In the Edit view for the Video structure,
click on the Create New link under the Sizes for this video section to
add a new custom encoding target size.

![](assets/images/screenshots/content_management/video_structure_size_spec.png)

This will bring up an Add Size box with the following fields:

1.  Name - Name you give to the size. You will use this name to
    reference this size in your VaeML/integration code.

2.  Video Width - Video width in pixels.

3.  Video Height - Video height in pixels.

4.  Video Bitrate - Integer between `100` and `1000` representing the
    video encoding bitrate in kilobytes per second. Higher means
    better quality. We recommend `150` for bandwidth saving, `350` for
    good quality, and `700` for high quality videos.

5.  Audio Bitrate - Interget between `48` and `320` represending the
    audio encoding bitrate in kilobytes per second. Higher means
    better quality. We recommend `48` for speech, `96` for mixed audio,
    and `160` for music videos.

Click the Add Video Size button to complete the addition of the size.

> **Caution**
>
> Vae keeps track of the total number of times it encodes a video into
> Flash Video during each billing period. Each plan includes a set
> number of encodings, and any overage will be billed at our current
> rate. If you add a new video size to a collection that already has
> several entries, Vae will immediately begin encoding all existing
> videos in the new size. This could result in a large charge, so please
> plan accordingly!
>
> We outsource our video encoding, so we are not able to issue refunds
> for video encoding charges, as we simply pass these along to our
> vendor.

To delete a video size, simply click the red Delete button next to the
Video size in the Sizes for this Video list. The video size will be
immediately removed from your account.
