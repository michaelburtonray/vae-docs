---
layout: docs
title: Site Tab
---

# Site Tab

The Site tab contains functions and settings that are useful to the
website designer. The subtabs of the Site tab control how content is
organized into structures, the Vae interface looks and feels, and how
content is published.

## Content Management Tab

The Content Management tab is the place where you create and manage the
Structures that hold content on your website. To get a better
understanding of what structures are, and how they work, please see
[Content Management](/content_management/) section of the Vae Guide for
Developers.

### Structures

The Content Management tab follows a slightly different layout from the
other tabs. On the left is a navigation box called Structures that lets
you navigate through the structures on your website. This is what the
navigation box might look like when you are browsing the root-level of
your website.

And here is what it might look like after clicking on a Collection
called `Artists`:

> **Note**
>
> Note that if you haven't added any structures to your website yet, the
> navigation box will not appear. You will be taken directly to a form
> where you can add your first structure. The procedure for adding your
> first structure is identical to the procedure we describe in the next
> section for adding root-level structures.

#### Navigating the Structures box

Clicking a simple structure or hybrid structure will load the Structure
Properties form for that structure onto the right side of the screen.
From there, you can make changes to the structure or remove the
structure.

Clicking a superstructure will reload the Structures navigation box to
show that structure's child structures, while hiding other structures.
It will also load the Structure Properties form for that structure onto
the right side of the screen. From there, you can [make changes to the
structure](/backstage.site.content_management.properties/), [run
operations on the
structure](/backstage.site.content_management.operations/), remove the
structure. Clicking Website will bring you back to the root-level
display.

#### Reordering Structures

You can reorder structures directly from the Structures navigation box.
Simply drag the structures up and down by holding clicking and dragging
your mouse on the three grey horizontal lines at the right of the
structure name.

### Creating Root-Level Structures

To add a structure to the root-level of your website, click the Add
button under the Structures navigation box while viewing the root-level:

![](/images/screenshots/content_management/site_tab_add_root_structure_button.png)

This will bring up a form titled Select a Structure to Add.

> **Note**
>
> If you do not have any structures on your website yet, this form will
> be brought up automatically when you navigate to the Content
> Management subtab.

At root-level, you may only create [superstructures](/superstructures/)
(including the [External](/structure.external/) structure). To create a
Collection, Section, or External structure, simply click the button on
the left of the form that says Collection, Section, or External. This
will load the Structure Properties box. Then proceed with the steps
under the [Structure
Properties](/backstage.site.content_management.properties/) section of
the guide.

#### Prefab Structures

Vae provides a few pre-built structures that are commonly used. Using
these prefab structures is just a shortcut—they are no different from
what you would get if you created these structures manually yourself—but
using these premade structures might save you from some tedium.

Here are the available Prefab structures:

---|---
Blog|A Collection containing Text structure `Title`, Date structure `Date`, and Rich Text structure `Body`.
Calendar Dates|A Collection containing Date structure `Event Date`, Text structure `Event Name`, and Text Area structure `Description`.
Content Pages|A Collection containing Text structure `Title` and Rich Text structure `Content`.
Links Page|A Collection containing Text structure `Link Name` and Text structure `URL`.
Login Area|A Collection containing Text structure `Username` and Password structure `Password`.
Photo Gallery|A Collection containing Image structure `Photo` and Text structure `Caption`.
Press/Reviews|A Collection containing Textstructure `Publication Name`, Text structure `Publication Date`, Image structure `Cover Image`, Image structure `Inside Image`, and Text Area structure `Text`.
Store|A Collection containing Text structure `Name`, Text structure `Price`, Text structure `Inventory`, Text structure `Weight`, and Image structure `Image`.
Video Gallery|A Collection containing Video structure `Video` and Text structure `Text`.

To create a Prefab structure, simply click the button that says the name
of the prefab structure you would like to create. This will load the
Structure Properties box:

![](/images/screenshots/content_management/newsletter_prefab.png)

Then proceed with the steps under the [Structure
Properties](/backstage.site.content_management.properties/) section of
the guide.

### Creating Child Structures

To add a child structure to a Collection or Section, click the Add
button under the Structures navigation box while viewing the Collection
or Section in the Structures box. This will bring up a form titled
Select a Structure to Add.

There are 13 structures that can be added as a child structure: all 12
simple and hybrid structures, as well as the Collection superstructure:

![](/images/screenshots/content_management/newsletter_child_structures_add.png)

Collections can be nested an arbitrary number of levels deep.

To add a structure simply click the button on the form that corresponds
to the structure you wish to add. This will load the Structure
Properties box. Then proceed with the steps under the [Structure
Properties](/backstage.site.content_management.properties/) section of
the guide.

### Structure Properties

The Structure Properties box is displayed when you click on a structure
in the Structures navigation box or when you select a new structure to
add in the Select a Structure to Add form.

After entering in the properties, click the Add or Save button at the
bottom of this form to save the structure you are creating or editing.

Different structure types have different properties. Additionally, some
properties are not available until you've completely added the structure
or created child items. Here is a list of all properties, even though
they are not available in all situations:

-   Name - Name of the structure. This is the name that will be
    displayed in table headers or input forms for this structure. It
    will also be used to generate the VaeQL Name for this structure,
    which is how you will reference this structure in PHP and VaeML.

    By convention, Collections usually have plural names that describe
    the objects they store (example: `Properties`, `Galleries`,
    `Posts`), Sections usually have singular names that display the
    pages or segments they are associated with (example:
    `Thought of the Day`, `About Us                             Page`),
    and External structures usually have name that describe what they
    are linking to (example: `WordPress`,
    `PayFlow                         Gateway`).

    Simple structures are usually named according to how the data will
    be used (example: `Name`, `Price`, `Background Color`, `Event Date`,
    `Event Flyer`, `Password`, `Movie`).

    Association (single) structures are usually named according to the
    singular of the association (example: `Category`, `Author`), while
    Association (multi) are usually named according to the plural of the
    association (example:
    `Recommended                             Items`, `Members`).

    If in doubt, ask yourself what label would make sense for this field
    on a form and use that as a name.

-   VaeQL Name - This is name under which the data from this structure
    will feed into your VaeML and PHP code. Limited to lowercase
    letters, digits, and underscores. By default, it is the same as the
    structure name, with text turned into lowercase, spaces turned into
    underscores, and non alphanumeric text removed.

    If you have already written VaeML or PHP code that accesses this
    structure, changing this value will require you to change your VaeML
    or PHP code.

-   Permalink HTML Page \[Collection only\] - Vae can automatically
    generate permanent links (Permalinks) for every entry in
    the collection. These links will be stored in Vae with each entry
    and can be changed at any time. Vae will automatically map these
    permalinks to whatever HTML or PHP page you would like.

    To use the Permalink feature, enter into this box the name of the
    HTML, Haml, or PHP page that should be rendered when the permalink
    for an entry in this collection is loaded. For example, if the
    collection was called `Artists`, and you wanted to render
    `artist.haml` whenever
    `http://yourdomain.com/artist/the-yeah-yeah-yeahs` is hit, enter
    `artist` into this field.

    Vae will render the page within the context of the entry associated
    to the permalink being requested. Vae will also set the `id` request
    parameter to the ID of the entry being requested.

-   Permalink Format \[Collection only\] - If you are using the
    permalink feature (there is a value set for Permalink HTML Page),
    you may select a format for the default permalinks. There are six
    options that represent the permutations of whether or not to include
    the permalink HTML page, date, or item ID as part of the permalink.

    This only controls the format of the default permalinks that Vae
    will generate. Of course, the user may change the permalink for any
    item at any time.

-   Title Field \[Collection only\] - The Title Field describes which
    child structure(s) should be used to define the title of this entry.
    The title of an entry is displayed in the tab navigation bar in the
    Content tab, in associations, and in the reorder screen, and is used
    to generate permalinks. It should be set to the structure or
    structures that uniquely identify this entry.

    So in a collection of `Artists`, the title field might be
    `Artist Name`. In a collection of `Items` where different items
    might have the same name but different colors, you can set the title
    field to both `Name` and `Color`, and both will be displayed. This
    helps avoid ambiguity.

    By default the title field is set to the first child text structure.
    This works in a lot of cases, but definitely not all, so be sure to
    pay attention to this property when creating your structures.

-   Sort Entries By \[Collection only\] - Setting this will cause
    entries in this collection to be sorted. You may specify as many
    sort fields as you would like. For each sort field you may specify
    whether to sort Ascending or Descending.

    This will affect the order entries are displayed in the backstage as
    well as the default ordering on the website. Ordering on the website
    can be overridden by passing an `order=` parameter to the
    `<v:collection>` tag.

    To disable sorting, simply change this property to
    (arrange manually).

-   New Entries Go to the Top? \[Collection only\] - By default, when a
    new entry is added to a collection, it is added to the bottom of
    the list. Setting this property changes that behavior to add new
    entries to the top of the list. Note that this option cannot be used
    when automatic sorting is in place.

-   Edit entries inline when editing parent? \[Collection only\] - If
    this property is set, Vae will render this collection inline when
    editing its parent in the backstage. For example, if you had a
    collection of `Items` and within `Items` there was a child
    collection called `Inventory`, setting this option on `Inventory`
    would display all inventory on the edit page for each item. This
    option makes dealing with nested data much easier.

-   Freeze this collection? \[Collection only\] - Setting this property
    removes the ability to add/remove/edit content in a Collection or
    Section on the Content tab. It does not affect child structures of
    the currently selected structure.

    This is useful if you (the designer) want to create a structure and
    populate it with data that your client should not be allowed
    to modify. Simply add the content yourself and then come back and
    set this property to lock the data in place.

-   Hidden? \[root-level only\] - Setting this property makes the
    collection or section not viewable on the Content tab. Like the
    Freeze this collection? property, this is useful for setting static
    content that your clients need not see. It is also useful for
    creating collections that will only be interacted with
    programatically, or for collections that will be used with the
    [Newsletter VaeML integration
    method](/backstage.newsletter.templates/).

-   Hint - A Hint is a reminder that will appear next to the field when
    adding or editing content in the Backstage's Content tab. Often used
    to provide details or instructions to your clients that will
    updating the content. An example value might be
    "`Images larger than                             300pixels will be resized.`"

-   Default Value - If set, new entries will have this value by default.
    Note that Checkbox structures have a parameter for Checked by
    Default instead of Default Value.

-   Show value in list view? - If checked, this structure will be
    displayed as part of the list view that is generated when viewing a
    collection in the Content tab.

-   Require a value? - If checked, a require a value
    [validation](/validations/) will be created for this field.

-   Require a numeric value? - If checked, a require numeric
    [validation](/validations/) will be created for this field.

-   Require a unique value? - If checked, a require uniqueness
    [validation](/validations/) will be created for this field.

-   Minimum length - If specified, a minimum length
    [validation](/validations/) will be created for this field.

-   Maximum length - If specified, a maximum length
    [validation](/validations/) will be created for this field.

-   Associated Collections \[Association (single) and
    Association (multi) only \] - For Association structures, this
    property is where you specify which collections you are
    associating with. For example to associate with a category, you
    would select the `Categories` collection.

-   Reverse Association Name \[Association (single) and
    Association (multi) only \] - Describes how to refer to this
    association in reverse.

-   Display "Create New" option \[Association (single) \] For
    Association Structres (single), this property allows users to add
    entries to the Child Collection directly from a Parent Collection
    entry, instead of navigating to the Child Collection each time you
    want to add a new entry to the Child Collection.

-   For example if you are associating the `Items` collection to a
    category by creating an association structure called `Category`, you
    could set this value to `Items`. This would create a link on the
    category view to `Show Items` that would display items in the
    selected category.

    This is often the same as the name of the parent collection, but
    not always. Imagine the case where you want to show recommended
    items on an item page. The A might be recommended on B's page, but
    not necessarily vice-versa. So if the assoication was called
    `Recommended                             Accessories`, the reverse
    association name might be `Recommended for these Items`.

-   Make Association Optional? \[Association (single) only \] - If
    checked, a value will not be required for this assoication.

-   External URL \[External only\] - Sets the URL of the external page
    to load within the backstage as part of an External structure.

-   Embed? \[External only\] - If checked, the external page will be
    embedded in an IFRAME within the backstage when the External
    structure is opened. If not checked, the external page will be
    opened in a new window.

### Operations

Operations are one-time actions that you can perform on the entries in a
Collection. They are useful for performing migrations or clearing out
test data. To access the Operations menu for a Collection, click the
Operations link at the top right corner of the Structure Properties box
for a collection.

#### Reverse Entries

Click the Reverse Ordering button to reverse the order of all the
entries in the collection. This only works if you do not have a sort
structure defined on the collection.

Again, this is a one-time operation. If you would like to have new
entries added to the Collection be added to the "top," check the the New
entries go to the top? checkbox on the Structure Properties page.

#### Delete All Content

Click the Delete All button to delete all entries from the collection.
This is useful for clearing out test data.

> **Warning**
>
> Be warned, this action is not reversable!

![](/images/screenshots/content_management/operations_delete_all.png)

To navigate back to the Structure Properties page, click the Edit link
at the top right corner of the Operations.

## Interface Tab

The Interface tab is the place where you can customize the Vae backstage
interface. You can change the website name, upload a logo, set colors,
and enable or disable other tabs:

![](/images/screenshots/content_management/operations_delete_all.png)

> **Note**
>
> We are often asked if it is possible to upload a custom stylesheet or
> otherwise customize the look and feel of the Vae backstage interface
> beyond what is available on this tab. We do not currently allow this,
> and it's pretty unlikely that we will do so, at least in the near
> future. The reason is that we are frequently changing and improving
> the backstage interface, and if we allowed custom stylesheets, it
> might hamper our ability to change and innovate quickly.

### Website Name

The Website Name is how this website will be referred to throughout the
Vae system. This includes the backstage login screen, header on all
backstage pages, the Designer Portal, and in any E-Mail correspondance
to you or the account holder. This name is also used in invoices, so
please make sure that it accurately reflects the website and is easy to
recognize. This value is initially set when you created the website.

### Upload Logo

You may upload a logo to be displayed in the top left-hand corner of the
backstage and login screen. Acceptable formats are JPEG, GIF, or PNG.

Currently, the image area is 200x50 pixels, however, we may change this
at any time, so we recommend that you upload the highest resolution logo
you have. If you use a transparent GIF or PNG, the background of the top
bar will show through onto your logo in the backstage.

> **Tip**
>
> Logos with square dimensions tend to look the best.

### Color Scheme

You may select one of our built-in color schemes (taken from Kuler) or
create your own.

To create your own color scheme, simply click the Customize Color Scheme
link:

![](/images/screenshots/content_management/interface_customize_color_scheme.png)

You will then be brought to a screen that allows you to enter in the
HTML HEX codes for your color scheme. Vae color schemes consist of 11
colors, although only 9 of them are actively used.

The Header colors are used on the top bar of the backstage, which
includes the website name and the View Website and Back to Designer
Portal links. The Active Tab colors are used for the currently selected
tab. The Inactive Tab colors are applied to the tabs not currently
selected. The Hover Tab colors are used when an inactive tab is hovered
over with the mouse.

The Future Use colors are not currently used, but we recommend setting
them to a combination that agrees with the rest of your color palette.
We know that it is somewhat silly to do this because the context is not
clear, but don't worry: if we ever begin to use these extra colors, we
will manually inspect all accounts to ensure that the look is visually
pleasing.

> **Caution**
>
> Please be sure to use the full 6 digit HEX codes for your colors
> (Example: `#ff0000`). If you use named colors or short-form colors,
> your backend will not work in some browsers, and your graphs will not
> be colored correctly.
>
> If you do not know the HTML HEX code for the color you would like to
> use, you can obtain this information from a program such as Photoshop
> or Colorzilla.

### Show Customers, Newsletter, Store Tabs

There are three checkboxes on the Interface tab that control whether
other top-level tabs are shown in the backstage. Toggle these checkboxes
on and off to show or hide the Customers, Newsletter, or Store tabs.

## Domains Tab

The Domains Tab is where you can configure Vae to serve your website on
one or more domain names or subdomains.

Vae supports unlimited domains as aliases, which means that you can
point as many domains or subdomains to your account as you would like,
but all websites will see the same content. There is no charge for
additional domain names.

If you want to serve different content on different domain names, you
must purchase a separate account for each unique website you would like
to serve.

> **Caution**
>
> Any attempts to circumvent this policy through use of PHP or
> `.htaccess` will likely result in your account(s) being suspended.

### Adding a Domain

To add a new domain name to the website account, click the Create New
link at the top right corner of the Domain Names for this website list:

![](/images/screenshots/content_management/newsletter_domains_create_new.png)

This will bring up a box titled Add Domain Name to this website with the
following fields:

1.  Domain Name - This is the domain name or subdomain name that you
    would like to use for this website. Examples:
    `my-vae-website.com`,`shop.my-elsewhere-hosted-domain.com`.

Click the Add Domain Name button to complete the process of adding the
domain name.

For the domain name to work on your account, you must point it to the
Vae servers. You can do this either by setting the nameservers at the
domain's registrar to `NS1.HOSTED.BY.ACTIONVERB.COM`,
`NS2.HOSTED.BY.ACTIONVERB.COM`, and `NS3.HOSTED.BY.ACTIONVERB.COM` or by
creating a DNS CNAME record that points to
**YourSiteName**`.vaesite.com`.

Domain names are activated immediately, however, our secondary
nameservers (`NS1.HOSTED.BY.ACTIONVERB.COM` and
`NS2.HOSTED.BY.ACTIONVERB.COM`) only refresh their records every three
hours, so there may be a slight delay of up to 3 hours before your
domain is live and usable on our nameservers. Furthermore, if you are
moving this domain in from another host, there may be an additional
delay of 24-72 hours because various ISPs may have the old server
address cached on their DNS servers.

If you used the CNAME method of redirection, your domain name will be
usable immediately.

### Removing a Domain

To remove a domain name from an account, simply click the red Delete
icon next to that domain in the Domain Names for this website list. The
domain name will be deactivated immediately. After you delete a domain,
any visitors that request that domain from our servers will be served an
error page.

### Google Apps

[Google Apps](http://apps.google.com/) is a service from Google that
provides [Gmail](http://www.gmail.com/), Google Calendar, Google Docs,
Google Video, and Google Sites for your domain. To use Google Apps, you
must sign up at [Google](http://apps.google.com/) and then come back to
Vae and enable Google Apps on your account. Additionally, you will need
to upload a `.html` file to your FTP space to prove to Google that you
are in control of the domain.

If you enable Google Apps, Google will have control of all your domain's
E-Mail addresses, and all E-Mail will flow through Gmail. Your E-Mail
will no longer be hosted by Vae. We actually recommend this, because
Google is better at E-Mail than we are (we focus on getting Content
Management right, with E-Mail as a side benefit).

To enable Google Apps on a domain, simply click the (enable) link next
to the domain that you want to use with Google Apps. This will bring you
to a confirmation screen. Click the I understand, Enable Google Apps
button to complete the process.

To disable Google Apps on a domain, simply click the (disable) link next
to the domain on which you wish to disable Google Apps. This will bring
you to a confirmation screen. Click the I understand, Disable Google
Apps button to complete the process.

> **Caution**
>
> We are not able to provide any technical support for Google Apps
> beyond the enable/disable tools provided in the Vae backstage.

## FTP/Subversion Tab

The FTP/Subversion Tab shows you the FTP and Subversion information for
your website. From this page, you may also change your FTP password and
change the deployment settings for Subversion.

### Change FTP Password

To change your FTP password, click the (change) link next to the line
for Password:

![](/images/screenshots/content_management/ftp_tab_password_change.png)

Enter a new password into the Change FTP Password box and click the
Change FTP Password button.

### Subversion

The Subversion box shows you how to check out your website from
Subversion. Press the Deploy Subversion Source to Live Site button to
make the copy in your Subversion repository live:

![](/images/screenshots/content_management/ftp_tab_subversion_deploy_button.png)

If you are using branching in Subversion, you will need to tell Vae
which branch is the active branch to deploy from. To do that, click the
(change) link next to Deploy from branch and enter the correct branch
path into the box. Click Save Subversion Settings to make the change
permanent.

## MySQL Tab

MySQL is a server-side database system that is used by third-party
applications such as WordPress and custom applications. They are an
alternative way to store structured data. Most Vae websites do not need
access to a MySQL database, however, we provide MySQL as a convenience
for advanced developers that need it on their websites.

Vae Designer Partners have used our MySQL databases to install
Wordpress, Drupal, osCommerce, and other third-party applications.

> **Caution**
>
> We do not provide technical support for MySQL, and we cannot help you
> troubleshoot your third party or custom applications. We do not
> provide access to phpMyAdmin or any similar tool, but you are welcome
> to install it in your own webspace.

### Obtaining New MySQL Database

To obtain a new MySQL database, click the Create New link at the top
right corner of the MySQL Databases list:

![](/images/screenshots/content_management/mysql_tab_create_new_button.png)

A database will be provisioned immediately and the connection details
will be displayed in the MySQL Databases list.

### Removing a MySQL Database

To remove a MySQL database from your account, simply click the red
Delete icon next to that database in the MySQL Databases list. The
database will be deactivated immediately. After you delete a database,
all data will be deleted and any attempts to access that database will
result in an error.

## Optimization Tab

The Optimization Tab contains settings that control how your image
content is optimized for the web. The page displays a Optimization
Settings box with the following settings:

1.  Default Image Compression Quality - Enter an Integer between `1` and
    `100`. This reprents the JPEG percentage quality that will be used
    to encode your images. Higher means your photos will look better,
    but take longer to download. The default value is `65`. If a value
    is specified here, images will be compressed using this quality
    measure by default.

2.  Preserve Image Color Profiles - Normally Vae will remove color
    profile data from uploaded images to decrease file download size and
    speed up page loading. Checking this box will disable this behavior,
    making your images larger but ensuring the correct color profile
    is used.

To save the Optimization Settings, simply click the Save Content
Settings button:

![](/images/screenshots/content_management/optimize_tab_save_content_settings.png)

Note that these settings only affect images as displayed on your
website, not in the backstage. Additionally, these will not override
specific settings on an individual image -- they always take priority.
