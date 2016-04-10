---
layout: docs
title: Users Tab
---

# Users Tab

The Users tab includes two subtabs: Vae Users, and Mail Forwarders. Vae
Users is where you can manage users (which provide access to the
backstage and an E-Mail address), while Mail Forwarders is where you can
manage E-Mail forwarding accounts.

## Vae Users Tab {#backstage.users.vae_users}

The Vae Users tab is where you can add, edit, and delete Users on this
Vae account. User accounts on Vae provide login access to the backstage
(with whatever permissions you'd like to assign) and, if Vae is hosting
E-Mail for this website, an E-Mail account at this website's domain(s).

Vae user accounts are coupled to E-Mail accounts, so the password for
the E-Mail account will always be the same as the password for the
backstage for that user. If your E-Mail is hosted elsewhere, adding
E-Mail addresses on the Users tab will have no effect.

> **Caution**
>
> Different Vae plans include a different number of users. If you exceed
> the limits provided by your plan, you will be charged \$5/month per
> block of up to 5 users.

### Adding a User

To add a new user to the website account, click the Create New link at
the top right corner of the Users list:

![](assets/images/screenshots/content_management/users_tab_create_new.png)

An Add User form will be displayed with the following fields:

1.  (Real) Name - Real name of the user. For your reference only.

2.  Username - This will be the username that the user usees to log into
    the backstage. It will also become the part before the `@` sign in
    their email address. Example: `<username>@<domain>.com`.

3.  Password and Confirm Password - Choose a password for this user.

4.  E-Mail Address - Existing E-Mail address of the person using
    this account. This should be an E-Mail address hosted
    elsewhere (i.e. not on Vae). We will use it to send the user a
    message if they ever forget their password.

5.  Use as E-Mail Address - If checked, this user account will also be
    an E-Mail address. Example: `<username>@<domain>.com`.

6.  Content tab Permission - Check to allow this user access to the
    Content tab, which includes access to managing website content. This
    does not provide the ability to change content structures.

7.  Newsletter Permission - Check to allow this user access to the
    Newsletter tab, which includes the ability to send newsletters and
    view past newsletters.

8.  Store Permission - Check to allow this user access to the Store tab,
    which includes access to orders, statistics, and coupon codes.

9.  Usage/Billing Permission - Check to allow this user access to the
    Usage/Billing tab, which includes the ability to view usage and
    payment history, change plans, and change payment information.

10. Users Permission - Check to allow this user access to the Users tab,
    which includes the ability to add, edit, and delete users.

11. Site Permission - Check to allow this user access to the Site tab,
    which includes the ability to define content structures and set
    settings for the account, newsletter, website, and store.

12. Use simple upload widget - Check this box if this user is having
    trouble uploading files on Vae. This will force this user account to
    use the simple file uploading widget instead of the Flash-based
    upload widget.

Click the Add User button to complete the process of adding the user.

### Editing a User

To edit a user, simply click the Edit icon next to that user in the
Users list:

![](assets/images/screenshots/content_management/users_tab_edit_user.png)

This will open an Edit User form with the same fields as above. Click
the Save User button to complete the process of editing the user.

In order to change a user account from a Vae-only account to an E-Mail
address, you must re-enter the password.

### Removing a User

To remove a user, simply click the red Delete icon next to that user in
the Users list. The user and E-Mail address will be deactivated
immediately. After you delete a user, any E-Mails destined for that
address will bounce, and that user will not be able to log into the
backstage. If the user is currently logged in, they will **not** be
kicked out of their current session.

![](assets/images/screenshots/content_management/users_tab_delete_user.png)

## Mail Forwarders Tab {#backstage.users.mail_forwarders}

Mail Forwarders are E-Mail addresses at your website's domain that
forward mail to another address. You may add an unlimited number of mail
forwarders on Vae.

### Adding a Mail Forwarder

To add a new mail forwarder to the website account, click the Create New
link at the top right corner of the Mail Forwarders list:

![](assets/images/screenshots/content_management/mail_forward_create_new_button.png)

An Add Mail Forwarder form will be displayed with the following fields:

1.  Username - This will become the part before the `@` sign in the
    email address. Example: `<username>@<domain>.com`.

2.  Forward to E-Mail Address - The address that E-Mails will be
    forwarded to. This can be an E-Mail address hosted here
    or elsewhere. Please be careful not to create a forwarding loop!

Click the Add Mail Forwarder button to complete the process of adding
the mail forwarder:

![](assets/images/screenshots/content_management/mail_forward_add_button.png)

### Editing a Mail Forwarder

To edit a mail forwarder, simply click the Edit icon next to that mail
forwarder in the Mail Forwarders list:

![](assets/images/screenshots/content_management/mail_forward_edit_button.png)

This will open an Edit Mail Forwarder form with the same fields as
above. Click the Save Mail Forwarder button to complete the process of
editing the mail forwarder.

### Removing a Mail Forwarder

To remove a mail forwarder, simply click the red Delete icon next to
that mail forwarder in the Mail Forwarders list:

![](assets/images/screenshots/content_management/mail_forward_delete_button.png)

The E-Mail address will be deactivated immediately. After you delete a
mail forwarder, any E-Mails destined for that address will bounce.
