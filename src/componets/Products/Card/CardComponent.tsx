import { Card, Col, Button } from 'antd';
import React from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { setToCart } from '../../../store/reducer/ActionCreators';
import { CardProps } from '../../../TypeProps/TypeProps';

const CardComponent: React.FC<CardProps> = React.memo(({ products }) => {
	const { name, image, price } = products;
	const priceValue = `Цена: ${price}`;

	const dispatch = useAppDispatch();

	const onAddProduct = () => {
		dispatch(setToCart(products));
	};

	return (
		<>
			<Col
				style={{
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<Card
					hoverable
					style={{
						width: 240,
						height: 290,
						padding: '10px'
					}}
					cover={
						<img
							alt="example"
							src={`https://test-frontend.dev.int.perx.ru${image}`}
							style={{
								height: '200px',
							}}
						/>
					}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between'
						}}
					>
						<Button
							type="primary"
							shape="circle"
							onClick={onAddProduct}
						>
							+
						</Button>
						<Card.Meta
							style={{
								color: '#8ff2a4',
							}}
							title={name}
							description={priceValue}
						/>
					</div>
				</Card>
			</Col>
		</>
	)
});

export default CardComponent;