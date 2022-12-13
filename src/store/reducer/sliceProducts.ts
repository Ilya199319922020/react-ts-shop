import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../models/IProduct';

interface Products {
	products: IProduct[],
	error: string,
	initialDealears: [],
	cart: IProduct[],
	countProduct: number,
	sumPrice: number,
};

const initialState: Products = {
	products: [],
	error: '',
	initialDealears: [],
	cart: [],
	countProduct: 0,
	sumPrice: 0,
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
			const arr = state.cart.map(d => d.count === 1 ? d.price : d.price * d.count)
			state.sumPrice = arr.reduce((x, y) => x + y, 0);
			state.countProduct = ++state.countProduct;
		},
		removeElementCart: (state, action: PayloadAction<IProduct>) => {
			state.cart = state.cart.map((item: IProduct) => {
				if (item.name === action.payload.name) {
					return {
						...item,
						count: 0
					}
				}
				return item;
			});
			state.cart = state.cart.filter((b: IProduct) => b.count !== 0);
			const arr = state.cart.map(d => d.count === 1 ? d.price : d.price * d.count)
			state.sumPrice = arr.reduce((x, y) => x + y, 0);
			state.countProduct = --state.countProduct;
		},
		clearCart: (state) => {
			state.cart = [];
			state.sumPrice = 0;
			state.countProduct = 0;
		},
		updateItemValue: (state, action: PayloadAction<{ id: string, value: IProduct }>) => {
			state.cart = state.cart.map((item: IProduct) => {
				if (item.name === action.payload.value.name) {
					return {
						...item,
						count: action.payload.id === 'Left' ? item.count - 1 : item.count + 1
					}
				}
				return item;
			});
			state.cart = state.cart.filter((b: IProduct) => b.count !== 0);
			const arr = state.cart.map(d => d.count === 1 ? d.price : d.price * d.count)
			state.sumPrice = arr.reduce((x, y) => x + y, 0);
			state.countProduct = action.payload.id === 'Left' ? --state.countProduct : ++state.countProduct;
		},
	},
});

export default sliceProducts.reducer;