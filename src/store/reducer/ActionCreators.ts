import axios from 'axios';
import { IProduct } from '../../models/IProduct';
import { AppDispatch } from '../store';
import { sliceProducts } from './sliceProducts';

export const fetchVideo = () => async (dispatch: AppDispatch) => {
	try {
		const response = await axios
			.get<any>(`https://test-frontend.dev.int.perx.ru/api/goods/`)
		const res = response.data;
		dispatch(sliceProducts.actions.fetchProdutsList(res));
	} catch (e: any) {
		dispatch(sliceProducts.actions.setError(e.message));
	}
};

export const setToCart = (value: IProduct) => async (dispatch: AppDispatch) => {
	try {
		dispatch(sliceProducts.actions.addToCart(value));
	} catch (e: any) {
		dispatch(sliceProducts.actions.setError(e.message));
	}
};

export const deleteItemCart = (value: IProduct) => async (dispatch: AppDispatch) => {
	try {
		dispatch(sliceProducts.actions.removeElementCart(value));
	} catch (e: any) {
		dispatch(sliceProducts.actions.setError(e.message));
	}
};
export const clearCartAll = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(sliceProducts.actions.clearCart());
	} catch (e: any) {
		dispatch(sliceProducts.actions.setError(e.message));
	}
};

export const updateValueCount = (id: string, value: IProduct) => async (dispatch: AppDispatch) => {
	try {
		dispatch(sliceProducts.actions.updateItemValue({ id, value }));
	} catch (e: any) {
		dispatch(sliceProducts.actions.setError(e.message));
	}
};

export const setCartAll = (arrValue: IProduct[]) => async (dispatch: AppDispatch) => {
	try {
		dispatch(sliceProducts.actions.setAllValueCart(arrValue));
	} catch (e: any) {
		dispatch(sliceProducts.actions.setError(e.message));
	}
};
