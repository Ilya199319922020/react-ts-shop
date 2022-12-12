import axios from 'axios';
import { AppDispatch } from '../store';
import {sliceProducts} from './sliceProducts';

export const fetchVideo = () => async (dispatch: AppDispatch) => {
	try {
		const response = await axios
			.get<any>(`https://test-frontend.dev.int.perx.ru/api/goods/`)
		const res =  response.data;
		dispatch(sliceProducts.actions.fetchProdutsList(res));
	} catch (e: any) {
		dispatch(sliceProducts.actions.setError(e.message));
	}
};

export const setToCart = (name: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(sliceProducts.actions.addToCart(name));
	} catch (e: any) {
		dispatch(sliceProducts.actions.setError(e.message));
	}
};