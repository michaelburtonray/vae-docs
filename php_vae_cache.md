# vae\_cache() {#php_vae_cache}

Use the `vae_cache()` function to cache the results of a PHP function in
memory for a specified period of time and automatically display the
cached version if it is available.

This useful for implementing anything on your site that may take some
time to compute, for example, pulling a feed of tweets from Twitter.

Vae uses a separate cache bucket for every unique page and set of
request parameters. The cache is automatically invalidated if the source
code of the accessed page has changed or if any data is changed in the
backend. This makes it safe to cache just about anything.

## Usage

`vae_cache($cache_key, $valid_for = 3600, $function = null, $global = false)`

-   `$cache_key` - Key for this set of cached data.

-   `$valid_for` - Number of seconds to keep the cached data valid.
    Defaults to one hour.

-   `$function` – PHP function to call to initialize the cache. By
    default, this is assumed to be the same as the `$cache_key`. This
    function must return the value to be displayed and saved in
    the cache.

-   `$global` - Normally we will maintain a separate cache for each
    unique user (or, more accurately, each unique set of cookies and
    session data) on your site. Setting this flag to `true` will
    maintain a single global cache. Defaults to `false`.

## Returns

Return your data, either pulled from the cache, or obtained by calling
your function, depending on whether a cached copy exists.

## Sample Usage

    <?php
    // Display Tweets matching this artist's hashtag
    function tweets() {
      $artist = vae_find($_REQUEST['id']);
      return twitter_search($artist['hashtag']);
    }
    echo vae_cache("tweets");
    ?>
