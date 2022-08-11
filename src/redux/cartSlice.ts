import { createSlice } from "@reduxjs/toolkit";

interface cart {
    typeCart: {
        name: string,
        originalPrice: number,
        saleOffPrice: number,
        image: string,
        feature: string,
        description: string
    }
}
interface typeCart {
        total: typeCart[]
}
const initialState: typeCart = {
    total: []
}
export const cartSlice = createSlice({
    name: "cart", 
    initialState,
    reducers:{
        saveTotal: (state,actions) =>{
            state.total.push(actions.payload)
        }
    }
})

export const {saveTotal} = cartSlice.actions
export default cartSlice.reducer