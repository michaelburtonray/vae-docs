# Caching

Vae has a powerful behind the scenes caching system designed to ensure
that your pages load as quickly as possible. Vae will cache the rendered
versions of your VaeML, Haml, and Sass pages and will serve pages from
the cache unless it detects a situation that might prevent the cache
from being valid.

Vae uses a pessimistic caching model, which means that Vae will throw
away the cached version if it might be invalid. Unfortunately, knowing
exactly when to invalidate a cache is a hard problem, so Vae will err on
the side of caution at the cost of speed. Because we have no way of
knowing if your PHP pages could become stale, we do not cache any
PHP-driven page (any file ending in .php). **For this reason, it is
important that you do not name files with a `.php` extension unless you
are using PHP in them directly.**

You can build higher levels of caching into your pages by using the
[&lt;v:fragment&gt;](#v_fragment) VaeML tag or the
[vae\_cache()](#php_vae_cache) PHP function.

Resized images, watermarked images, and generated images are also
cached. Vae manages the cache automatically, and you are not charged for
diskspace usage of cached files.
