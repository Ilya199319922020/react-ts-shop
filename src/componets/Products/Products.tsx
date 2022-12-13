import { Layout, Row } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchVideo } from '../../store/reducer/ActionCreators';
import CardComponent from './Card/CardComponent';

const Products = () => {
	const dispatch = useAppDispatch();
	const { products} = useAppSelector(state => state.sliceProducts);
	
	useEffect(() => {
		dispatch(fetchVideo())
	}, []);

	return (
		<Layout.Content
			style={{
				maxWidth: '1040px',
				margin: '0 auto',
				paddingBottom: 40
			}}
		>
			<Row
				gutter={[8, 8]}
				style={{
					maxWidth: '1040px',
					marginTop: '40px',
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				{
					products.length && products
						.map(k => <CardComponent key={k.name} products={k}
						/>
						)
				}
			</Row>
		</Layout.Content>
	);
};

export default Products;