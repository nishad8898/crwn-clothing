import React from 'react';
import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page' >
        <div className='checkout-header' >
            <div className='header-block' >
                <span>product</span>
            </div>
            <div className='header-block' >
                <span>discription</span>
            </div>
            <div className='header-block' >
                <span>quantity</span>
            </div>
            <div className='header-block' >
                <span>price</span>
            </div>
            <div className='header-block' >
                <span>remove</span>
            </div>
        </div>

        {
            cartItems.map( cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className='total' >
            <span>total: ${total}</span>
        </div>

    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);