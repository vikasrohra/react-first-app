const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["Hi", "Hello"]
    },
    reducers: {
        // state is initial state
        addItem: (state, action) => {
            // action has 2 properties - type and payload 
            // action: {type: 'cart/addItem', payload: 'Grapes'}
            console.log("action=====>", action);
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = []
        }
    }
});

// Export actions and reducers from this slice
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;