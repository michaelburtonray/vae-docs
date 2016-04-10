---
layout: docs
title: # Image
---

# Image

The Image Structure allows users to upload images in virtually any image
format. Vae will automatically crop and resize images to the exact
specifications that you need.

  ---------------------------------------- ----------------------------------------------------------------------------
  Common Use Examples:                     Photos, Backgrounds
  Supported [Validations](#validations):   None.
  Related [VaeML](#vaeml) Tags:            The `<v:img>` tag is used to render an image stored in an Image structure.
  ---------------------------------------- ----------------------------------------------------------------------------

  : Fast Facts About the Image structure

## Backstage Look and Feel

The Image structure shows a file upload widget in the backstage:

Once an image has been uploaded, the widget expands to show a thumbnail
of the image and provide options to delete, adjust quality, crop (if the
image has sizes defined) and replace:

## Sizing / Encoding

Vae can resize uploaded images in two different ways: on demand, or on
upload. To resize images on demand, simply use the proper size
attributes in your VaeML tags. However, you might want to have images
resized on upload if you need them in an exact size. Vae will prompt
your user to crop the image so that it can be cleanly resized to the
exact pixel size that you need. You can also have Vae prompt the user to
crop an uploaded image, even if you don't want to fix a specific size.

In the Edit view for the Image structure, click on the Create New link
under the Sizes for this image section to add a new custom size.

![](assets/images/screenshots/content_management/add_image_size.png)

This will bring up an Add Size box with the following fields:

1.  Name - Name you give to the size. You will use this name to
    reference this size in your VaeML/integration code.

2.  Resize Mode - Select Fixed Ratio Crop to specify an exact pixel size
    and have Vae prompt the user to crop the image to that exact ratio.
    Select Fluid Crop to allow any size but still prompt the user to
    crop the image.

3.  Image Width - Image width in pixels.

4.  Image Height - Image height in pixels.

Click the Add Image Size button to complete the addition of the size.

> **Tip**
>
> Defining an image size is only necessary if you wish to have images
> cropped in the backstage. Otherwise, resizing can be done through
> VaeML or the PHP interface.

To delete an image size, simply click the red Delete button next to the
image size in the Sizes for this Image list. The image size will be
immediately removed from your account.
