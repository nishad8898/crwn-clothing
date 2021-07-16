import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectHidden = createSelector(
    [selectCart],
    cartItems => cartItems.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartitem) =>
            accumulatedQuantity + cartitem.quantity*cartitem.price ,
            0
    )
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumlatedQuantity, cartItem) => 
            accumlatedQuantity + cartItem.quantity ,
            0
        )
);