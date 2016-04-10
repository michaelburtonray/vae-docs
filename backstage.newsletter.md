---
layout: docs
title: # Newsletter Tab {#backstage.newsletter}
---

# Newsletter Tab {#backstage.newsletter}

The Newsletter tab is the hub for sending and tracking newsletters on
Vae. Vae allows all accounts to create an unlimited number of E-Mail
mailing lists. the only charge for newsletter sending is if you exceed
the number of individual sends allotted in your plan.

The default subtab is the [All
Campaigns](#backstage.newsletter.campaigns) tab, which we consider the
main dashboard for newsletter activity. However, it is easier to
conceptualize the newsletter process by starting with the
[Lists](#backstage.newsletter.lists) subtab, so that is how we proceed
in this manual.

## Lists {#backstage.newsletter.lists}

The Lists subtab allows you to manage Newsletter Lists. Clicking the
Lists tab brings you to a list of all of your Newsletter lists. You can
click on the list name to be taken to the [List
Dashboard](#backstage.newsletter.list) for that list.

### Creating a Newsletter List

To create a new newsletter list, click the Create New link at the top
right corner of the Newsletter Lists list:

![](assets/images/screenshots/content_management/newsletter_list_new_button.png)

An Add List form will be displayed with the following fields:

1.  List Name - The name of the list. This will be displayed internally
    in the backstage on the Lists tab. It will also be displayed to
    users on the subscribe and unsubscribe pages.

2.  Default E-Mail "From" E-Mail Address - This is the address that
    E-Mails sent to this list will appear to be coming from. If you
    would like to be able to receive replies to your list, provide a
    real E-Mail address here. You may also provide something like
    `no-reply@mydomain.com`. You may also include a name that will be
    displayed by entering the name and E-Mail address in the format
    `John Doe <johndoe@mydomain.com>`

3.  Accepting Signups? - If unchecked, the signup pages will not allow
    any new members to subscribe. Good for creating closed or
    secret lists.

Click the Add List button to complete the process of adding the list.

### Editing a Newsletter List

To edit a list, simply click the Edit icon next to that list in the
Newsletter Lists list. This will open an Edit List form with the same
fields as above

![](assets/images/screenshots/content_management/newsletter_list_edit.png)

Click the Save List button to complete the process of editing the list.

### Removing a Newsletter List

To remove a list, simply click the red Delete icon next to that list in
the Newsletter Lists list:

![](assets/images/screenshots/content_management/newsletter_list_delete.png)

The list will be deactivated immediately. All subscriber information,
view/click tracking data, and past campaigns will be deleted and cannot
be recovered.

## List Dashboard {#backstage.newsletter.list}

Clicking the name of a list on the [Lists
tab](#backstage.newsletter.lists) or [All
Campaigns](#backstage.newsletter.campaigns) tab opens the List Dashboard
for that list:

![](assets/images/screenshots/content_management/newsletter_dashboard.png)

The list dashboard contains links titled Campaigns and Manage
Subscribers that will take you to the
[Campaigns](#backstage.newsletter.campaigns) and
[Subscribers](#backstage.newsletter.subscribers) tabs, respectively.

The section labeled List Impact shows two graphs detailing performance
of the list. The top graph shows views and clicks over time, while the
bottom graph shows subscriptions and unsubscriptions over time. You can
change the timeframe of the graphs by adjusting the dropdown menu at the
top right of the List Impact section.

On the right side of the List Dashboard, Vae displays the URL that
people can use to subscribe to this list. You should publish or link to
that URL on your website. The end part of this URL also makes up the
code necessary if you want to enable subscribing to this list via the
`<v:newsletter>` tag.

## Subscribers {#backstage.newsletter.subscribers}

Clicking the Manage Subscribers link on the [List
Dashboard](#backstage.newsletter.list) opens the Subscribers tab. It
lists all subscribers to the selected newsletter list:

![](assets/images/screenshots/content_management/newsletter_list_subscribers_manage.png)

### Adding a Subscriber

To add a new subscriber to the list, click the Create New link at the
top right corner of the Subscribers for XYZ Mailing Lists list:

![](assets/images/screenshots/content_management/newsletter_list_create_button.png)

An Add Subscriber form will be displayed with the following fields:

1.  E-Mail Address - E-Mail address of the subscriber.

Click the Add Subscriber button to complete the process of adding the
subscriber to the list:

![](assets/images/screenshots/content_management/newsletter_add_subscriber_button.png)

### Import Multiple E-Mail Addresses as Subscribers

To import a list of E-Mail addresses as subscribers, click the Import
E-Mail Addresses link at the bottom right corner of the Subscribers for
XYZ Mailing Lists list:

![](assets/images/screenshots/content_management/newsletter_list_subscribers_import_email_addresses.png)

You will be taken to a page with an Add Many Subscribers box. Paste in
your list of E-Mail addresses, one per line, and click the Submit E-Mail
Addresses button:

![](assets/images/screenshots/content_management/newsletter_list_subscribers_add_multiple_submit_button.png)

Each E-Mail address will be added to the list.

> **Caution**
>
> This function is intended to support easy migration from other list
> software. You may only add subscribers that have opted-in to your list
> on another platform. You are not allowed to import lists that you have
> purchased or otherwise acquired from a third-party. Any violation of
> this policy will result in suspension or cancellation of your account.

### Editing a Subscriber

To edit a subscriber, simply click the Edit icon next to that subscriber
in the Subscribers for XYZ Mailing List list:

![](assets/images/screenshots/content_management/newsletter_list_edit_button.png)

This will open an Edit Subscriber form with the same fields as above.
Click the Save Subscriber button to complete the process of editing the
subscriber.

### Removing a Subscriber

To remove a subscriber, click the red Delete icon next to that
subscriberin the Subscribers for XYZ Mailing List list. The subscriber
will be removed immediately and will not receive any new messages from
the list.

![](assets/images/screenshots/content_management/newsletter_list_delete_button.png)

## Campaigns {#backstage.newsletter.campaigns}

The Campaigns tab is the core of the Vae newsletter system. A campaign
is one newsletter that is sent out to a list or group of targeted
recipients.

> **Tip**
>
> The Campaigns tab can be accessed in two forms: as the All Campaigns
> tab when you first click onto the main Newsletter tab, or by clicking
> Campaigns from the [List Dashboard](#backstage.newsletter.list). When
> accesed as All Campaigns, all campaigns are shown, and the Schedule or
> Begin New Campaign link will ask which list to launch the new campaign
> on. When accessed from a specific list, only campaigns specific to
> that list are shown, and the Schedule or Begin New Campaign link will
> assume that the new campaign is on the selected list.

### Campaign Lifecycle

Campaigns go through many stages from creation to final delivery. When
you first create a campaign, it will have the status *Waiting for
Confirmation*, which means that the campaign is on hold until you
approve it. After you view the campaign and confirm it, it will have the
status *Scheduled*, which means that the campaign is ready to be sent
and will be sent either as soon as possible (for campaigns without a
future send date) or at the date you specified in the campaign. You may
still edit the campaign at this point as long as it hasn't begun to
send. Editing a campaign automatically returns it to the *Waiting for
Confirmation* status.

Once our system begins to deliver the campaign, the status is changed to
*Sending*. Once this has happened, you may no longer edit or delete the
camapgin. Once our system has delivered the entire campaign, the status
is changed to *Sent*. Once the campaign is in this stage, you may view
analytics on the campaign. Note that because receiving E-Mail servers
can be busy, this does not necessarily mean that all your recipients
have received the campaign at that time. It does mean that the messages
have all been handed off to our sending mail servers, which will keep
trying to send the message for up to 3 days.

### Schedule or Begin New Campaign

To create a new campaign, click the Schedule or Begin New Campaign link
at the top right corner of the Campaigns list:

![](assets/images/screenshots/content_management/newsletter_campaign_new_button.png)

> **Tip**
>
> If you were on the All Campaigns tab, a box labelled New Campaign -
> Select Recipients will be displayed. If you have the [Customers
> tab](#backstage.customers) enabled, it will be divided into 2
> sections. These sections are Send to an Existing List and Target
> Specific Customers:
>
> ![](assets/images/screenshots/content_management/newsletter_campaign_create_screen.png)
>
> If you do not have the Customers tab enabled, only existing lists will
> be displayed.
>
> Click on a list name to begin a new campaign on that list:
>
> ![](assets/images/screenshots/content_management/newsletter_campaign_list_link.png)
>
> Or enter targeting criteria into the boxes under Target Specific
> Customers to begin a targeted campaign. You may target customers by
> Country, Stage, Tag, Number of Orders, Total Order Amount, and Order
> Timeframe. The targeting criteria must all match for a customer to be
> included in the mailing. The number of customers matching your
> targeting criteria will be displayed on the following page.

A Schedule or Begin New Campaign form will be displayed:

![](assets/images/screenshots/content_management/newsletter_campaign_form.png)

It will have the following fields:

1.  Campaign Name - The name of the campaign. This will be displayed
    internally on the backstage and will not be shown to subscribers in
    any way.

2.  Campaign Start Date- Date to send the campaign. Entering today's
    date or a past date will start the campaign as soon as it
    is confirmed. Entering a future date will start the campaign on
    midnight of that date.

    > **Tip**
    >
    > We plan to offer more fine-grained timing options within the next
    > couple of months.

3.  Design Template - The template to use for this campaign. To add or
    manage templates, go to the [Templates
    tab](#backstage.newsletter.templates). Changing this value will
    refresh the page to allow any additional structures for that
    template to be loaded into the form.

4.  E-Mail "From" E-Mail Address - This is the address that E-Mails will
    appear to be coming from. If you would like to be able to receive
    replies to your list, provide a real E-Mail address here. You may
    also provide something like `no-reply@mydomain.com`. You may also
    include a name that will be displayed by entering the name and
    E-Mail address in the format `John Doe <johndoe@mydomain.com>`

5.  E-Mail Subject - Subject line of the E-Mail that will be sent.

6.  E-Mail Main Body - Main Body of the E-Mail that will be sent. This
    field uses a modified version of the rich text editor that is used
    on the Content tab for the Rich Text structure. You may style your
    E-Mail text using Bold, Italic, Underline, Strikethrough,
    Superscript, and Subscript. You may also add ordered lists, bulleted
    lists, headers, links, and images. Unlike on the Content tab, images
    uploaded here will not be resized in any way, so please ensure that
    the images that you upload are properly sized for your E-Mail.

    > **Caution**
    >
    > Many E-Mail clients cannot receive images, or at least do not
    > enable images by default. Vae will automatically send a text
    > version of your E-Mail to accomodate this situation, however, this
    > means that you should avoid putting important content in the
    > images in your E-Mail.

If you selected a template that was built using the VaeML integration
method, additional fields may be shown. These fields are specific to
your template and will be used to populate the template.

Click the Add Campaign button to complete the process of creating the
campaign:

![](assets/images/screenshots/content_management/newsletter_campaign_form_add_button.png)

You will be taken back to the Campaigns list.

### Confirming Campaign

Before a campaign will be sent, you must confirm the campaign. In the
Campaigns list, click the link for Confirm Campaign on the line of the
campaign you would like to confirm:

![](assets/images/screenshots/content_management/newsletter_campaign_confirm_screen.png)

You will be brought to the Confirm Campaign page:

![](assets/images/screenshots/content_management/newsletter_campaign_confirm_final.png)

Please review the E-Mail and make sure you're satisfied with the grammar
and layout.

If all is well, confirm the campaign by clicking the Confirm this
Campaign button at the bottom of the page. Once you click the button,
the campaign will be cleared for sending and may send immediately.

If you are not satisfied, you may click the Make Changes link to edit
the campaign. This will take you to the same screen described in the
following section.

### Editing a Campaign

To edit a campaign that has not yet begun to send, simply click the Edit
icon next to that campaign in the Campaigns list:

![](assets/images/screenshots/content_management/newsletter_campaign_edit_after_confirm.png)

This will open an Edit Campaign form with the same fields as the
Schedule or Begin New Campaign form. Click the Save Campaign button to
complete the process of editing the campaign.

Once you save the campaign, it will need to be confirmed before it can
be sent. Please refer to the above section on confirming the campaign.

### Removing a Campaign

To remove a campaign that has not yet begun to send, simply click the
red Delete icon next to that campaign in the Campaigns list:

![](assets/images/screenshots/content_management/newsletter_campaign_delete.png)

The campaign will be removed immediately and will not be sent.

### Viewing a Campaign that is sending or sent

To view a campaign that is sending or has been sent, simply click the
View icon (looks like a blue page with a green arrow) next to that
campaign in the Campaigns list:

![](assets/images/screenshots/content_management/newsletter_campaign_sent_view.png)

This will allow you to view the campaign as it was sent.

Once viewing a campaign, you may go back to the list by clicking the
back button on your browser or by clicking the Campaignstab in the tab
navigation bar.

### Viewing Analytics for a Campaign

To view analytics for campaign that has been sent, simply click the
Analytics icon (looks like a bar graph) next to that campaign in the
Campaigns list:

![](assets/images/screenshots/content_management/newsletter_campaign_sent_stats.png)

This will take you to the Campaign Impact page for that campaign. This
page includes information about the number of views and clicks by day,
as well as a list of the total number of links that were clicked.

From the Campaign Impact page, you may go back to the list by clicking
the back button on your browser or by clicking the Campaignstab in the
tab navigation bar.

## Templates {#backstage.newsletter.templates}

Newsletter templates are HTML-based templates that are used to style
newsletters. Generally these templates are created by the same designer
that designs the rest of the website. The Templates tab is only
available to Vae users that have access to the [Site
tab](#backstage.site). A template must be created before any newsletters
can be sent.

As Vae has evolved, we have developed two different methods for
integrating your templates. The original method, called the Simple
integration method, allows you to specify simple HTML code as your
design template. As the name suggests, it is much simpler to integrate.
If you wish to use this integration method, you may skip the next
section of this manual.

### VaeML Integration Method

A more advanced, newer method called the VaeML integration method,
allows you to create structures and provide your own VaeML markup that
will be rendered for each newsletter.

This is awesome because it extends the full flexibility of Vae's content
management model to newsletters. A downside is that it is more difficult
to set up.

To use the VaeML integration method, you should go to the Site tab and
create a new collection that will represent your newsletter template. By
convention, name your collection the plural form of the template name
followed by the word `Newsletters`. Example:
`ABC Widgets Default Template                     Newsletters`. Set the
collection to be hidden and give it a permalink. This step is important
because without a permalink and hidden, you will not be able to
integrate this collection on the Add Template form.

Add as many structures as you would like to your collection. If you use
nested collections, you must make sure that they are exposed via the
Edit entries inline when editing parent? option, as you will not be able
to access them otherwise. Indirectly, this means that you may not place
file structures (including image and video) or collections inside nested
collections, because these structures will not be displayed. In
practice, this limitation doesn't seem to be much of a problem.

Create a HTML template file named according to the permalink that you
created. Inside this file, you may access VaeML and PHP as normal, and
all the structures you created will be available. Additionally, you must
use the `<v:yield                     />` tag to insert the contents of
the body of the E-Mail as prepared on the campaign screen.

Your template will be rendered when the campaign is confirmed. If you
would like to test your template, you may create a test campaign and go
to its confirm page. Any refresh of that page will reload your template.

### Creating a Template

To create a new newsletter template, click the Create New link at the
top right corner of the Templates list:

![](assets/images/screenshots/content_management/newsletter_create_new.png)

An Add Template form will be displayed with the following fields:

1.  Template Name - The name of the template. This will be displayed in
    the select box that prompts users to select a template on the
    Schedule or Begin New Campaign screen.

2.  Integration Method - Choice of Simple or VaeML integration method.
    Please see above discussion of the two available
    integration methods.

3.  HTML Code - Displayed only if the Simple integration method
    is selected. This is the actual HTML code of the E-Mail template.
    All CSS should be inline. We recommend using tables for positioning,
    avoiding the use of floating `<div>` tags, and designing for a
    510px width.

    For helpful guidelines on E-Mail template design, check out [this
    article from Campaign
    Monitor](http://www.campaignmonitor.com/blog/archives/2005/11/html_email_desi.html).

    Your code should include a `<v:yield />` tag. This is where the body
    of the message will be inserted into the template. The `<v:yield />`
    tag must be formatted exactly as such: `<v:yield/>` (without
    a space) will not work.

4.  Collection - Displayed only if the VaeML integration method
    is selected. This is the collection that you created to represent
    your template. See the discussion about the VaeML integration method
    in the previous section for more information.

5.  Footer - Text that will be inserted below the unsubscribe link.
    Generally this is used to include copyright information as well as a
    contact address. U.S. law generally requires that companies sending
    mass mailings include a contact address. Please contact your
    attorney or other advisor for specific information.

Click the Add List button to complete the process of adding the list.

### Editing a Template

To edit a template, simply click the Edit icon next to that template in
the Templates list:

![](assets/images/screenshots/content_management/newsletter_template_edit.png)

This will open an Edit Template form with the same fields as above.
Click the Save Template button to complete the process of editing the
template.

### Removing a Template

To remove a template, simply click the red Delete icon next to that
template in the Templates list:

![](assets/images/screenshots/content_management/newsletter_template_delete.png)

The template will be deactivated immediately.
