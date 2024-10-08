import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type CartItem = {
    id: string,
    title: string,
    price: number,
    quantity: number,
};

type CartState = {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state: CartState, action: PayloadAction<{ id: string, title: string, price: number }>) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

            if (itemIndex !== -1) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart(state: CartState, action: PayloadAction<{ id: string }>) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            } else {
                state.items[itemIndex].quantity -= 1;
            }
        },
    }
});


export const {addToCart, removeFromCart} = cartSlice.actions;