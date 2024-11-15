import {configureStore} from "@reduxjs/toolkit"
import cartSliceReducer from "./cartSlice"

export const store = configureStore( {
    reducer : {
        cart : cartSliceReducer
    }
} )