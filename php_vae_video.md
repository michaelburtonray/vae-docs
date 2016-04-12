---
layout: docs
title: vae\_video()
---

# vae\_video()

Use the `vae_video()` function to generate a URL for a video uploaded
through Vae. This is typically called to embed the URL within the code
for a Flash FLV player. The URL is returned relative to the Vae data
URL, which you can retrieve using the
[`vae_data_url()`](/php_vae_data_url/) function.

Currently, returned URLs do not contain slashes, however, this is not
guaranteed, and may change in the future.

## Usage

`vae_video($video_id, $video_size)`

-   `$video_id` - ID of the video you wish to retrieve. This is obtained
    by reading the data returned by [`vae()`](/php_vae/) under the path
    of the Video structure you wish to use.

-   `$video_size` - if you set up a specific video resizing task in Vae,
    simply pass in the name of that video size here to obtain the video
    as sized by that task.

## Returns

Filename of the local copy of this video, relative to the local Vae data
cache path.

## Sample Usage

{% highlight php %}
<?php
// Display our bio video in a Flash Player
$bio = vae_find("bio");
$video_filename = vae_video($bio['video'], "Big");
echo '<embed src="video.swf?video=' . vae_data_url() . $video_filename . '" quality="high" bgcolor="#ffffff" width="460" height="345" name="video" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
?>        
{% endhighlight %}
