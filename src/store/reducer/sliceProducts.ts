import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../models/IProduct';

interface Products {
	products: IProduct[],
	error: string,
	initialDealears: [],
	cart: IProduct[],
	countProduct: number
};

const initialState: Products = {
	products: [],
	error: '',
	initialDealears: [],
	cart:[],
	countProduct: 0
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
		},
		addToCart(state, action: PayloadAction<string>){
			const newProduct = [...state.products].filter(b => b.name ===action.payload)
			let newCounrProduct = state.countProduct
			state.cart =[...state.cart, ...newProduct];
			state.countProduct = ++newCounrProduct;
		},
	},
});

export default sliceProducts.reducer;