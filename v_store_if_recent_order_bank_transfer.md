# `<v:store:if_recent_order_bank_transfer>`{#v_store_if_recent_order_bank_transfer}

Renders its contents only if the payment method used for the most recent
order was Bank Transfer.

## Required Attributes

None.

## Optional Attributes

None.

You may provide a [`<v:else>`](#v_else) tag after this tag to specify
HTML to render if the method was not not Bank Transfer.

## Sample Usage

    <v:store:if_recent_order_bank_transfer>
     Your order will not be processed until we receive your bank transfer.  
     Please submit your bank transfer to:  Bank of America NA, Account Number 1234567890, ABA Routing 012345678.
    </v:store:if_recent_order_bank_transfer>
