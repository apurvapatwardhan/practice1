import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count: 0
}

const counterSlice = createSlice({
    initialState,
    name:"counter",
    reducers: {
        inc: (state, action) => {
            state.count += action.payload;
        },
        dec: (state, action) => {
            state.count -= action.payload;
        }
    }
})
export const {inc, dec} = counterSlice.actions;
export default counterSlice.reducer;