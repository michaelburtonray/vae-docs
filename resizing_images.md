---
layout: docs
title: # Resizing Images {#resizing_images}
---

# Resizing Images {#resizing_images}

Adding crops to Image Structures makes it easy for both you and your
clients to crop images to their appropriate dimensions as you add them.
On top of that, modifications to images made under the Content tab are
non-destructive, meaning you can change the crop size later on without
issue. Let's walk through the steps to creating a crop in the Backstage,
and then using it in your code.

Once an Image structure created, you can specify a crop size. Just click
the Create New button:

![](assets/images/screenshots/the_website/cookbook/crop_create_new.png)

You can then choose to create a Fluid Crop, which will let you crop an
Image with no dimension constraints, or a Fixed Ratio crop, which we
will use in this example. Upon choosing Fixed Ratio crop, you will then
need to specify the dimensions of your crop:

![](assets/images/screenshots/the_website/cookbook/crop_size.png)

Now, after adding a new image under the Content tab, you will be asked
to choose how your image will be cropped:

![](assets/images/screenshots/the_website/cookbook/crop_specify.png)

If you should ever need to recrop an image, just click the Edit button
next to the entry it exists within, and then click the Crop button:

![](assets/images/screenshots/the_website/cookbook/crop_edit_button.png)

To have the image display as you cropped it, just specify the name of
your crop in the image's `image_size` attribute.

    <v:img path="welcome_message/my_image" image_size="myCrop" />

Here is our image after being cropped:

![](assets/images/screenshots/the_website/cookbook/crop_after.png)

If you remove the image\_size attribute, the image will appear in it's
orignal form:

![](assets/images/screenshots/the_website/cookbook/crop_before.png)

Note that you can create as many crops as you like for an image.

If you would like to scale your image within your code, the `<v:img>`
tag accepts `width` and `height` attributes.
