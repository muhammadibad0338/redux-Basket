import { createSlice,configureStore} from "@reduxjs/toolkit";
import {INITIAL_STATE} from './State'

const basketSlice = createSlice({
    name : 'basket',
    initialState : INITIAL_STATE,
    reducers: {
        add : (state,action) =>{
            return state.map(item =>{
                if(item.id !== action.payload.id){
                    return item
                }
                return {
                    ...item,
                    added : true
                }
            }
            )
        },
        remove : (state,action) =>{
            return state.map(item =>{
                if(item.id !== action.payload.id){
                    return item
                }
                return {
                    ...item,
                    added : false
                }
            }
            )
        },
        addItem : (state,action) =>{
            return state.map(item =>{
                if(item.id !== action.payload.id){
                    return item
                }
                return {
                    ...item,
                    quantity : item.quantity+1
                }
            }
            )
        },
        removeItem : (state,action) =>{
            return state.map(item =>{
                if(item.id !== action.payload.id){
                    return item
                }
                else if (item.quantity <= 1 ){
                    return{
                        ...item,
                        added : false
                    }
                }
                return {
                    ...item,
                    quantity : item.quantity-1
                }
            }
            )
        }
    }
})





const store = configureStore({ reducer: basketSlice.reducer })

export const { add,remove,addItem,removeItem } = basketSlice.actions

export { basketSlice, store }