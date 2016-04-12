---
layout: docs
title: Vae Local Development Environment
---

# Vae Local Development Environment

The Vae Local Development Environment is a software package that you can
install on your local computer. It allows you to preview pages that you
are editing on your local machine. All VaeML tags are supported, and
they will pull from the live data on your website.

The Vae Local Development Environment is implemented as a proxy server
that transparently and quickly sends your local source code to the Vae
servers to be processed. It does not actually perform rendering on your
local machine, despite the fact that it may seem that way.

## Installing

The Vae Local Development Environment is supported on all major desktop
operating systems: Mac OS X, Windows, and UNIX/Linux. If you use another
operating system, contact your account manager and we'll try to get you
up and running as well.

As of September 6, 2013, Vae Local is now distributed as a Ruby gem.
This means that you must first install a working version of Ruby on your
system. Instructions for installing Ruby are included under the
following sections, depending on your OS.

### Installing on Mac OS X

**Prerequisites:** Installing on Mac OS X is supported on all versions
of Mac OS X from 10.4 (Tiger) through 10.8 (Mountain Lion).

Firstly, though, you need to have Xcode Developer Tools installed.
Please make sure Xcode is installed before installing the Vae Local
Development Environment. For help installing Xcode, I recommend
following steps 1 and 2 of [this
tutorial](http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/).

**To install Vae Local:** Simply install the 'vae' Ruby gem. You can do
that by typing the following at a command prompt:

    gem install vae

### Installing on Windows

**Prerequisites:** The Vae Local Development Environment for Windows is
supported on Windows 2000, XP, Vista, and Windows 7.

You first need a working copy of Ruby with the Development Kit
installed. The easiest way to do that on Windows is to install the
[RubyInstaller](http://rubyinstaller.org/download/). Make sure to also
download the Development Kit. Once that's installed, you're ready to
install Vae Local.

**To install Vae Local:** Simply install the 'vae' Ruby gem. You can do
that by typing the following at a command prompt. Note that if you used
RubyInstaller, you may need to use its provided command prompt for
running this command.

    gem install vae

### Installing on a UNIX/Linux system

**Prerequisites:** The Vae Local Development Environment for UNIX/Linux
requires Ruby 1.8.5. You can check your Ruby version by typing `ruby -v`
at the shell prompt. You should also have the Ruby Development Headers
and a working compiler suite. If you do not have Ruby 1.8.5, use your
distribution's package manager to install the latest version of Ruby and
the Development Headers.

**To install:** Simply install the 'vae' Ruby gem. You can do that by
typing the following at a command prompt:

    gem install vae

## Usage

The Vae Local Development Environment is typically run from the command
line, and usually in conjunction with the Vae Subversion service. To
start the Vae Local Preview Server, simply open a Terminal, `cd` to the
folder containing your website and type `vae`.

If the current folder was checked out from the Vae Subversion service,
Vae will be able to autodetect that it is a Vae site, the Vae site name
(from the `__vae.yml` file in the folder) and your Vae username (from
Subversion's records). If not, you will need to specify these options on
the command line, as described in the next section.

You will be prompted to enter your Vae password (the password for the
Vae user that was used to check out the Subversion working copy). This
is a security feature that prevents anyone from accessing your data
without your permission.

![](/images/screenshots/the_website/vae_local.running.png)

Once the password has been approved, your local preview server will be
running on `http://localhost:9999/`. You can open a browser window and
use your website locally.

### Command Line Arguments

The `vae` command accepts command line options in standard UNIX style.
Here are the available options:

{% highlight html %}
Usage: vae [options]
    -u, --username <username>        Your Vae username
    -p, --port <port number>         Start server on this port
    -r, --root <path to site root>   Path to the root of the local copy of your Vae site.
    -s, --site <subdomain>           Vae subdomain for this site
    -h, --help                       Show this help message
{% endhighlight %}

### Deploying the Subversion copy to your webspace

To deploy the version of your website as stored in Subversion to your
webspace, simply type `vae deploy`. You will have to enter your Vae
password to complete this step. If you are using the Vae Production
Environment, please see the section below for more detailed commands.

Make sure that you have checked in all local files before running this
command. If you are using branching folders inside your Subversion
repository, make sure that you have properly set the active branch in
the [Site &gt; FTP/Subversion tab](/backstage.site.ftp/).

You can also deploy from Subversion to your webspace directly on the
[Site &gt; FTP/Subversion tab](/backstage.site.ftp/).

### Vae Production Environment

If you are using the Vae Production Environment, there are more options
available to you. Type `vae stage` to deploy the website from Subversion
to the Staging Environment. Type `vae release` to release the Staging
Environment to the Production Environment. Type `vae stagerelease` to
deploy the website from Subversion to the Staging Environment and
Production Environment.

## Known Limitations

There are a few known limitations with the Vae Local Development
Environment. We are researching how to best solve these problems, but
for now, here is a list of the currently known limitations:

-   Using `require`, `require_once`, `include`, or `include_once` in PHP
    files will include the copy of that file as hosted on the FTP, not
    the local copy. As a workaround, store functions in the `__vae.php`
    file, as this will be processed normally. Alternatively, you can use
    the `vae_include()` function. Ask your account manager for
    more information.

-   PayPal and PayPal Express Checkout flow cannot be tested locally
    because it requires the external PayPal servers to be able to
    connect inward.


