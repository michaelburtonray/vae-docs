# Haml and Sass {#haml_sass}

We also provide support for [Haml](http://haml.hamptoncatlin.com/) and
[Sass](http://haml.hamptoncatlin.com/docs/rdoc/classes/Sass.html), which
are meta-languages for HTML and CSS, respectively. Haml is a
syntactically simpler version of HTML that is much easier and faster to
write and edit. The main reason is that it uses whitespace instead of
opening and closing tags to denote element hierarchy. Additionally, Haml
includes shortcuts for a number of commonly used page elements.

For example, this snippet of Haml:

    #blog
      %v:collection{ :path => "blog_posts" }
        .blog_post
          %h1
            %v:text{ :path => "title" }

... is equivalent to this snippet of HTML:

    <div id="blog">
      <v:collection path="blog_posts">
        <div class="blog_post">
          <h1>
            <v:text path="title" />
          </h1>
        </div>
      </v:collection>
    </div>

As you might imagine, working with the top one is much easier. Everyone
on the Vae team is a big fan of Haml and Sass and we use them as much as
possible when developing websites. The learning curve is incredibly
easy; we find that most newbies can totally learn both Haml and Sass in
less than an hour. The [Haml
documentation](http://haml.hamptoncatlin.com/docs/rdoc/classes/Haml.html)
is a good reference for picking up the finer points.

Sass does a similar thing for CSS development. It replaces curly braces
with meaningful indentation and adds the concept of nested rules. For
example, this snippet of Sass:

    #main
      :width 97%
      p, div
        :font-size 2em
        a
          :font-weight bold
      pre
        :font-size 3em

... is equivalent to this snippet of CSS:

    #main {
      width: 97%; }
      #main p, #main div {
        font-size: 2em; }
        #main p a, #main div a {
          font-weight: bold; }
      #main pre {
        font-size: 3em; }

Again, you can see why working with Sass is easier on the eyes and
brain. Sass also supports variables and arithmetic inside the
stylesheet, which makes changing styles much easier.

Haml and Sass were originally developed as templating languages for Ruby
and Ruby on Rails, and normally require a Ruby server running to work.
However, on Vae, we've developed our own system for dynamically
compiling and caching Haml and Sass source files, so you can put them on
your FTP account and have Haml and Sass just work. You can include VaeML
tags directly in your Haml source, but note that some of the
Ruby-specific features of Haml will not work.

Files ending in `.sass` are automatically compiled into CSS stylesheets
and cached. Files ending in `.haml` will automatically be compiled into
HTML source files. Files ending in `.haml.php` will be run through PHP
and then compiled into HTML source files.

To be clear, no browser or client-side support is required for Haml and
Sass -- they are transformed into HTML and CSS on the server-side.

Vae also has automatic built-in support for the Compass CSS framework.
