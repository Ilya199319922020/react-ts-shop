import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface Products {
	products: [],
	error: string,
}

const initialState: Products = {
	products: [],
	error: '',
};

export const sliceProducts = createSlice({
	name: 'products',
	initialState,
	reducers: {
	
	},
});

export default sliceProducts.reducer;