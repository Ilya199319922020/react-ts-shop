import React from 'react';
import { ElementCartProps } from "../../../TypeProps/TypeProps";
import { Button, Row } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../../hooks/redux";
import { deleteItemCart, updateValueCount } from "../../../store/reducer/ActionCreators";

const ElememtCart: React.FC<ElementCartProps> = ({ product }) => {
	const { name, price, count, } = product;
	const dispatch = useAppDispatch();

	const onDeleteItem = () => {
		dispatch(deleteItemCart(product));
	};

	const onUpdateCount = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const { id } = e.currentTarget;
		dispatch(updateValueCount(id, product));
	};

	return (
		<>
			<Row
				style={{
					minWidth: '100%',
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-evenly',
					backgroundColor: '#bbf2bd',
					marginTop: '10px',
					minHeight: '50px'
				}}
			>
				<div
				>
					{
						name
					}
				</div>
				<div>
					{
						price
					}
				</div>
				<div>
					<Button
						id="Left"
						size='small'
						shape="circle"
						icon={<LeftOutlined />}
						onClick={onUpdateCount}
					>
					</Button>
					{
						count
					}
					<Button
						id="Right"
						size='small'
						shape="circle"
						icon={<RightOutlined />}
						onClick={onUpdateCount}
					/>
				</div>
				<div>
					<Button
						onClick={onDeleteItem}
					>
						Удалить
					</Button>
				</div>
			</Row>
		</>
	);
};

export default ElememtCart;