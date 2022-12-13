import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../models/IProduct';

interface Products {
	products: IProduct[],
	error: string,
	initialDealears: [],
	cart: any,
	countProduct: number,
};

const initialState: Products = {
	products: [],
	error: '',
	initialDealears: [],
	cart: [],
	countProduct: 0,
};

export const sliceProducts = createSlice({
	name: 'products',
	initialState,
	reducers: {
		fetchProdutsList(state, action: PayloadAction<IProduct[]>) {
			state.products = action.payload
		},
		setError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		addToCart: (state, action: PayloadAction<IProduct>) => {
			const doesItemExist = state.cart.find((item: IProduct) => item.name === action.payload.name);
			if (doesItemExist) {
				state.cart = state.cart.map((item: IProduct) => {
					if (item.name === action.payload.name) {
						return {
							...item,
							count: item.count + 1
						}
					}
					return item;
				})
			} else {
				state.cart.push({ ...action.payload, count: 1 })
			}

			state.countProduct = ++state.countProduct;
		},
	},
});

export default sliceProducts.reducer;