---
layout: docs
title: vae()
---

# vae()

The `vae()` (formerly `vae_find()`, which still works as an alias)
function is the main way of accessing your Vae content through PHP.

## Overview

`vae()` returns data from the CMS in the form of an object that can be
easily used in PHP.

If you don't pass in a parameter, all your content is returned.
Alternatively, you may pass in a [VaeQL](#vaeql) query to retrieve
exactly what you need.

## Data Encoding

Vae structures that hold text, such as Text structures, Text Area
structures, and Rich Text structures will be represented in the object
as text and can be `echo`d or used directly.

Structures that contain Images, Video, or Files will contain an
identifying number that is used to refer to that image, video, or file.
Before these can be displayed on your website, you will need to call a
function to obtain a URL for that image, file, or video. These functions
are `vae_image()`, `vae_file()`, and `vae_video()`.

## Usage

`vae($path, $options = null)`

-   `$path` - [VaeQL query](#vaeql) specifying the data you want
    to retrieve. Follows the same VaeQL syntax used by VaeML wherever
    VaeML accepts a `path=` attribute.

-   `$options` - Associative array of options that specify filtering and
    ordering operations on the data. The following array keys are
    accepted:

    -   `default_page` - applies if you are using pagination on
        this collection. If set to a number, that page number will be
        the default page shown. If set to `last()`, the last page will
        be the default page shown.

    -   `filter` - If set to a string representing a search query, only
        returns entries matching the provided search query.

    -   `groups` - Divides the set of matching entries into this many
        groups and returns only one of the groups. Use the `page`
        attribute to specify which group to return.

    -   `limit` - If set to an integer, returns no more than this
        many entries.

    -   `order` - If set to the the name of a structure in this
        collection, the collection will be sorted by that structure. You
        may also sort by multiple structures by separating them with
        a comma. You may sort by a structure in descending order by
        wrapping the structure name with `DESC()`, such as `DESC(name)`.
        You may sort by the number of entries in a child collection by
        wrapping the child collection name with `COUNT()`, such as
        `COUNT(comments)`. You can reverse the order stored in Vae by
        setting this attribute to `DESC()`. You can display elements in
        a random order by setting this attribute to `RAND()`.

    -   `page` - if using the `groups` or `paginate` attributes, specify
        the page or group you would like to return here.

    -   `paginate` - return no more than this many items per page. Set
        the `page` attribute to the page you would like to return.

    -   `skip` - If set to an integer, skips this many results before
        returning results. Useful for implementing custom pagination.

    -   `unique` - If set to the the name of a structure in this
        collection, only unique values of that entry will be returned.
        You may require a unique combination of values in multiple
        structures by listing each structure separated by a comma.

## Returned Objects and Sample Code

`vae()` returns a PHP object of type either `VaeContext` or `VaeQuery`
that contains the results of your query. `VaeContext` and `VaeQuery`
present mostly the same interface. Let's start up the example with a
familiar looking query that retrieves an Artist by ID:

    $artist = vae("artists/13421");

Child structures may be accessed by either the arrow operator or via
array notation:

    echo $artist->name;
    echo $artist['name'];

If your query returned multiple entries (for example if you asked for a
collection), you may iterate over the object just like it was an array:

    $artists = vae("artists");
    foreach ($artists as $artist) {
      echo $artist->name;
    }

You can get the ID, permalink, or type of any entry easily, via the
arrow operator or array notation:

    $artist = vae("artists/13421");
    echo $artist->id;           // 13421
    echo $artist->permalink;    // artist/freefall
    echo $artist->type;         // Collection
    echo $artist->name->type;   // TextItem
    echo $artist->albums->type; // Collection

You can also get info about the structure represented by the entry:

    $artist = vae("artists/13421");
    echo $artist->structure->id;        // 1269
    echo $artist->structure->name;      // Artists
    echo $artist->structure->type;      // Collection
    echo $artist->structure->permalink; // artist   (URL of page to render by default for permalinks)

You can get the ID of each entry in the foreach block too:

    $artists = vae("artists");
    foreach ($artists as $id => $artist) {
      echo $artist->name . " has ID " . $id;
    }

Run scoped VaeQL queries via the get() method, which supports any valid
VaeQL expression:

    $artists = vae("artists");
    foreach ($artists as $artist) {
      foreach ($artist->get("albums[type='CD']") as $album) {
        echo $album->name . " is a CD!";
      }
    }

Options get passed in as a parameter, after the query:

    $artists = vae("artists", array('limit' => 10));
    $artists = vae("artists", array('paginate' => 5, 'page' => 2));
    $albums = $artists->get("albums", array('order' => 'name'));
    $albums = $artists->albums(array('order' => 'name')); // same as above, shortcut syntax

Debugging functions like `var_dump()` (including `serialize()`,
`print_r()`, `var_export()`, etc.) will not work directly on the
objects. However, we've wired up a special method that will allow you to
debug your code. Just invoke the debug method on the object:

    var_dump($artist->debug);

You need to be careful using objects in `if` statements, as the object
will always return true. For example, this will not work as expected:

    if (vae("artists")) {
      echo "There are artists";
    }

You can use the `->count()` method to achieve what you want:

    if (vae("artists")->count) {
      echo "There are artists";
    }

Additionally, you should be careful when casting values to a numeric
type. This will not work as expected:

    foreach (vae("artists") as $artist) {
      echo (int)$artist->age;
    }

This is because objects may not be directly cast to numeric types. If
you need a numeric value, you'll need to first cast to a string.

    foreach (vae("artists") as $artist) {
      echo strftime("%m-%d-%Y", (string)$artist->formed_on);
    }
