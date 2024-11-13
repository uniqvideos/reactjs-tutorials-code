import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice( {
    name : "cart1",
    initialState : [],
    reducers : {
        addItem(state, action){             
            state.push( action.payload )
        },
        removeItem(state, action){
            let itemId = action.payload //1
            // [1,2,3,4] => 2 ! == 1
            let newProducts = state.filter( cartProduct => cartProduct.id !== itemId )

            return newProducts
        }
    }   
} )

export default cartSlice.reducer

export let {addItem, removeItem} = cartSlice.actions