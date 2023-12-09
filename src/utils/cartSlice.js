import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{
        //Mutating the state here(compulsory), returning not mandatory now!
        //Read about Immer library, Redux toolkit uses Immer behind the scenes
        addItem: (state, action)=>{

            //OLD vanilla redux(no state mutation), returning mandatory!
            // const newState = [...state]
            // newState.push(action.payload)
            // return newState

            state.items.push(action.payload);

        },
        removeItem : (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            //RTK - Either mutate the existing state or return new state
            state.items = []
            // return {items:[]}
        }
    }
})
//Read about RTK Query( replacement of react-thunk)
export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer;