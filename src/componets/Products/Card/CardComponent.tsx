import { Card, Col, Button } from 'antd';
import React from 'react';
import { CardProps } from '../../../TypeProps/TypeProps';

const CardComponent: React.FC<CardProps> = ({ products }) => {
	const { name, image, price } = products;
	return (
		<>
			<Col
				key={name}
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
						>
							+
						</Button>
						<Card.Meta
							style={{
								color: '#8ff2a4',
							}}
							title={name}
							description={price}
						/>
					</div>

				</Card>
			</Col>
		</>
	)
};

export default CardComponent;