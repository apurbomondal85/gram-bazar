import { Category } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        category: [],
        minPrice: 0,
        maxPrice: 100,
        rating: 0
    }
};

export const categorySlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        getParams: (state, action) => {

            let params = action.payload
            state.data.category =  params.category;
            state.data.minPrice = params.minPrice;
            state.data.maxPrice = params.maxPrice;
        }
    }
})

export const { getParams } = categorySlice.actions;
export default categorySlice.reducer;