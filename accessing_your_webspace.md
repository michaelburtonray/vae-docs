---
layout: docs
title: Accessing Your Webspace
---

# Accessing Your Webspace

Every Vae account comes with webspace. By default, your website will be
made available at `http://<accountname>.vaesite.com/`. You may also
[point a domain name to your webspace](#backstage.site.domains).

To publish files to your webspace, you may use Git, Subversion, or FTP. We do not
support any other method of direct access, such as SFTP, WebDav,
FrontPage, or SSH.

## Git

The preferred method for publishing is Git.  Since there are great Git
hosting services out there, such as Github, Vae does not have a built in
Git hosting service.

However, you can easily configure Vae to publish sites automatically
from your Git repository.  Just go to the Git/FTP/Svn tab on the backstage
to configure your Git repository.


## Subversion

Vae also provides a Subversion repository for each website. Advanced
designers or teams of designers may elect to use Subversion instead of
direct FTP access for publishing their website. Designers who use this
workflow typically use the [Vae Local Development
Environment](#vae_local) to preview pages locally before checking them
into Subversion and then deploying them onto the live webspace.

To use Subversion, you should first create a user on the [Users
tab](#backstage.users) that has Subversion permissions. You can then
check out a local copy on your local machine. To do that, open a
terminal and type:

    svn checkout http://svn.YOURSITE.vaesite.com/

(be sure to replace `YOURSITE` with your site name). By default,
Subversion will assume that your Vae username is the same as your
current UNIX or Mac login name. You will be prompted to enter a password
for that username. If your username is different, just hit enter and
Subversion will prompt for the correct username.

After entering your username and password, your Vae site will be checked
out locally. You may then use standard Subversion commands (such as
`svn stat`, `svn commit`, etc.), as well as launch the [Vae Local
Development Environment preview server](#vae_local).

Note that we do not ever import the contents of your FTP root into the
Subversion repository. So your first checkout will always be an empty
repository, even if you have files in your FTP. It is your
responsibility to commit these files to Subversion.

If you plan to use branching in Subversion, please check out the
documentation for the [Site &gt; FTP/Subversion
tab](#backstage.site.ftp) for information on how to tell Vae which
branch is the active branch that should be deployed.

For more information on Subversion, please see the [Subversion
book](http://svnbook.red-bean.com/).


## FTP

To access your website via FTP, use an FTP client to connect to
`<accountname>.vaesite.com` at port `21`. The FTP username
is the subdomain of the website followed by an underscore and
then your username.  The password is the same as your backstage
user account of that username.

Once logged in to FTP, you will be at the root of your webspace. By
default only two things are in the root directory: a placeholder
`index.html` page and a folder called `error_docs`, which contains the
templates that will be rendered if a server error occurs on your
website.

Many Vae designers create the following folders at the root of their
webspace: `assets`. `emails`, `fonts`, `images`, `javascripts`, and
`stylesheets`. They place Flash (.swf) assets into the `assets` folder,
VaeML E-Mail templates (for eCommerce) in the `emails` folders, font
files (for rendering text in custom fonts) into the `fonts` folder, and
images, stylesheets, and javascripts into their respective folders. You
do not have to structure your website this way, but this is the
conventional Vae site layout that is used by most current Vae designers.
By sticking to this pattern, you will make it easier for another Vae
developer to work on your site in the future.

### Recommended: An Editor With Built-In FTP

Because VaeML will only be parsed in pages that are accessed from your
Vae hosting, we recommend that developers edit their HTML pages live on
the server. It is easy to do this by using and editor with an integrated
FTP client.

Before we switched to Git, the entire Vae team was using
[Coda](http://www.panic.com/coda/) on the Mac, but other designers are
using [BBedit](http://www.barebones.com/products/bbedit/), [Zend
Studio](http://www.zend.com/en/products/studio/), and
[Smultron](http://www.tuppis.com/smultron/) (free). 

If you aren't going to use Git, we do find that
the Coda + Vae workflow is very speedy and smooth.

