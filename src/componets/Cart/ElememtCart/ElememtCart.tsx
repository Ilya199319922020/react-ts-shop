import { ElementCartProps } from "../../../TypeProps/TypeProps";
import { Button, Row } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ElememtCart: React.FC<ElementCartProps> = ({ product }) => {
	const { name, price, count, } = product;

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
					size='small'
					shape="circle" 
					 icon={<LeftOutlined />}
					>
						</Button>
					{
						count
					}
					<Button 
					size='small'
					shape="circle" 
					icon={<RightOutlined />} 
					/>
				</div>
				<div>
					<Button>
						Удалить
					</Button>
				</div>
			</Row>
		</>
	);
};

export default ElememtCart;