# `<v:select>`{#v_select}

Outputs an HTML select input field (`<select>` tag). When used inside a
`<v:collection>` tag or any other tag that iterates over a collection,
the ID of the current element will be added onto the input name using
array brackets.

When used in conjunction with other Vae tags that generate HTML forms,
the field will intelligently populate itself with data if data exists in
the current working path that matches the path attribute for this input.
Additionally, [form validation](#vaeml_form_validation) can be run on
the client and server end.

## Required Attributes

-   `path` - the path to the Vae item this input pertains to. Uses
    [VaeQL](#vaeql) syntax. If provided, the `name` parameter will be
    set to this as well, and the value will be retrieved from this path.

OR:

-   `name` - request parameter name that the input value will be
    assigned to

## Optional Attributes

-   `options` - comma-delimited list of options to be used in generating
    `<option>` tags. For example: `Red,Blue,Green`. You may also specify
    the value and display text differently by separating them with an
    `=` sign. For example: `1=Red,2=Blue,3=Green`.

-   `required` - if set and used in conjunction with a Vae form tag that
    generates an HTML form, validation will be performed on this field.
    Please see the [Validating Forms](#vaeml_form_validation) page for
    more information.

Since this tag generates an HTML `<input>` tag, you may also use any
standard HTML attributes that are valid in the `<input>` tag. These will
be passed through unchanged into the generated tag.

## Self-closed

This tag is usually self-closed. If it is not self-closed, anything
inside the tag will be part of the generated `<select>` tag.

## Sample Usage

    <v:formmail to="test@domain.org">
      How did you hear about us?
      <v:select name="howhear" options="Internet,Advertisement,Friend,Other" />
      <input type="submit" />
    </v:formmail>
