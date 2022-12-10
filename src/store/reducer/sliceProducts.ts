import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../models/IProduct';

interface Products {
	products: IProduct[],
	error: string,
	initialDealears: []
};

const initialState: Products = {
	products: [],
	error: '',
	initialDealears: []

};

export const sliceProducts = createSlice({
	name: 'products',
	initialState,
	reducers: {
		fetchProdutsList(state, action: PayloadAction<IProduct[]>) {
			state.products = action.payload
		},
		setError(state, action: PayloadAction<string>){
			state.error = action.payload;
		}
	},
});

export default sliceProducts.reducer;