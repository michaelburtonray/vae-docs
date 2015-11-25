# `<v:if>`{#v_if}

Renders its contents only if a certain condition is met. These
conditions can be:

1.  if a specified Vae path has a value (as opposed to being blank),

2.  if a specified Vae path has a specific value,

3.  if the total number of entries in the current collection matches a
    specific numeric value,

4.  if a request (GET or POST) parameter is set, or

5.  if the ID of the current entry matches a specific value or value at
    a path.

## Required Attributes

One of the following:

-   `path` - the path to the Vae value you want to ensure is set. If
    this value is set, the contents of the tag will be rendered. Uses
    VaeQL syntax.

-   `param` - name of a request (GET or POST) parameter. If this
    parameter is set, the contents of the tag will be rendered.

-   `total_items` - numeric value to be compared to the total number of
    entries in the current collection. If the number of entries in the
    current collection is equal to this number, the contents of the tag
    will be rendered.

-   `id` - value to be compared to the ID of the current entry. If this
    value begins with a “\$”, it will be treated as a request parameter.
    If it is not numeric, it will be treated as a path. If the ID
    matches, the contents of the tag will be rendered.

## Optional Attributes

-   `is` - if provided, the value of the specified `path` or `param`
    must be equal to this value for the condition to be considered true
    and the contents rendered.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if there is no value set for that path.

## Sample Usage

Only display the special notice if something is there:

    <v:if path="homepage/special_notice">
     SPECIAL NOTICE: <v:text path="homepage/special_notice" />
    </v:if>
    <v:else>Everything is normal</v:else>

Kevin is awesome, so he gets an image to represent his name:

    <v:if path="artist_name" is="Kevin">
     <img src="/images/kevin.gif" />
    </v:if>
    <v:else><v:text path="artist_name" /></v:else>

Switch based on user input:

    <v:if param="query">
     Search Results:
     ...
    </v:if>
    <v:else>You didn't enter a search string!</v:else>

Promote special offers:

    <v:if total_items="2">
     Buy both albums together and use discount code DOUBLE to save 25%!
    </v:if>
