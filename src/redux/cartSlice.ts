import { createSlice } from "@reduxjs/toolkit";

interface cart {
    typeCart: {
        name: string,
        originalPrice: number,
        saleOffPrice: number,
        image: string,
        feature: string,
        description: string,
        quantity: number,
        priceTotal:number
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
    reducers: {
        reQuantity: (state, actions)=>{
            if( state.total[actions.payload].quantity != 1){
            state.total[actions.payload].quantity--
            }
            
        },
        upQuantity: (state, actions)=>{
            state.total[actions.payload].quantity++
        },
        saveTotal:(state,actions) =>{
            const cartItem= state.total.find((item:any) => actions.payload.name === item.name)
            if(!cartItem){
                state.total.push(actions.payload)
            }else{
                state.total.map((item, index) =>{
                    if(actions.payload.name == item.name){
                        state.total[index].quantity++
                    }
                })
            }
        }
        // removeCart: (state, actions)=>{
        //     state.total = state.total.filter((item) => item.) 
        // }
    }
})

export const {saveTotal, reQuantity, upQuantity} = cartSlice.actions
export default cartSlice.reducer