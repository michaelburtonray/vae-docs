# Vae Docs

This is the Jekyll version of Vae documentation.


## Previewing Documentation Locally

Install Jekyll and dependencies

`bundle install`

Start Jekyll server using local config

`bundle exec jekyll serve --config _config.yml,_config_local.yml`

You can now access the site at [http://localhost:4000](http://localhost:4000/).


## Notes

* All assets should use the `{{ 'img/file.png' | cdn }}` url structure. The `_config_local.yml` will override the CDN url for local development.


## Reference

* [Liquid commands](https://github.com/shopify/liquid/wiki/liquid-for-designers)
