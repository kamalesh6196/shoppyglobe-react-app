import { createSlice } from "@reduxjs/toolkit";
 const cartSlice= createSlice({
    name : "cart",
    initialState: {
        items:[]
    },
    reducers:{
        // to add items to array if it not exists else increase quantity if already present
        addItem:(state, action)=>{
            const existingItem= state.items.find(
                item=> item.id == action.payload.id
            )
            if(existingItem){
                existingItem.quantity += 1
            }
            else{
                state.items.push({...action.payload,
                    quantity:1})
            }
        },
        //  to remove item from cart based on the id provided
        removeItem : (state,action)=>{
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
        },
        //  to clear the cart completely
        clearCart : (state)=>{
            state.items = []
        }
    }
 })

 export const{addItem, removeItem, clearCart } = cartSlice.actions

 export default cartSlice.reducer