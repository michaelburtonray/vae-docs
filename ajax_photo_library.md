---
layout: docs
title: Making An AJAX Photo Gallery
---

# Making An AJAX Photo Gallery

Making a simple photo gallery is a task that can be accomplished using
the [`<v:a>`](#v_a) tag with the `ajax` attribute, along with the
[`<v:collection>`](#v_collection) and [`<v:img>`](#v_img) tags.

    <h2><v:text path="artist_name"/></h2>

    <v:collection path="images">
     <div class="imageDiv">
      <v:a href="/image" ajax="bigPicDisplay"><v:img path="image" image_size="thumb" /></v:a>
     </div>
    </v:collection>

This will display a thumbnail version of all the images in our Images
Collection. The [`<v:a>`](#v_a) tag points to an image.html page, which
will do nothing but display a larger version of the the image. Just one
line of code:

    <v:img path="image" image_size="big"/>

Since we set the `ajax` attribute in our [`<v:a>`](#v_a) tag, clicking
on a thumbnail will not redirect the user to the image.html page.
Instead, the contents of image.html -- the large version of our image --
will be displayed in the `bigPicDisplay` div. This happens
asynchronously, so the image will be loaded without a full page refresh.
Here's the result:

![](/images/screenshots/the_website/cookbook/ajax_photo_gallery.png)
