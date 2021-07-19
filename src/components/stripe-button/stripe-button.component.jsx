import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const pubblishableKey = 'pk_test_51JEz3BSIVTXUAHfKf0kuiCAUzbfV0XwbOuvJqmzfq4FqmiIzIkhUCGIUTreDAOOViJVd8DLbbptIWznpd5ru9ec900zIkoZ1D3';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pubblishableKey}
        />
    );

};

export default StripeCheckoutButton;