import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../src/Model/Module";
import { Product } from "../src/Model/Module";
import { CartProduct } from "../src/Model/Module";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    totalPrice: 0,
  } as CartState,
  reducers: {
    addToCart(state, action) {  
        const newItem: Product = action.payload;
        const existingItem = state.itemsList.find((item: CartProduct) => item.id === newItem.id);

        if(existingItem){
            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
        } else {
            state.itemsList.push({
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                name: newItem.name,
                image: newItem.image,
                color: newItem.color,
            })
        }
        state.totalQuantity++;
        state.totalPrice += newItem.price;
        
    },
    removeFromCart(state, action) {
        for (let item of state.itemsList) {
            if(item.id === action.payload){
                if(item.quantity === 1) state.itemsList = state.itemsList.filter((itemCart: CartProduct) => itemCart.id !== action.payload);
                else{
                    item.quantity--;
                    item.totalPrice -= item.price;
                } 

                state.totalPrice -= item.price;

            }
          }
          state.totalQuantity--;
    },
    removeAll(state, action){
        for (let item of state.itemsList) {
            if(item.id === action.payload){
                state.itemsList = state.itemsList.filter((itemCart: CartProduct) => itemCart.id !== action.payload);
                state.totalPrice -= item.totalPrice;
                state.totalQuantity-= item.quantity;
                break;
            }
          }
    },
    setShowCart(state, action) {
        state.showCart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;