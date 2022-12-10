import { Outlet } from 'react-router-dom';
import { Layout,  Col, Row } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {
	return (
		<>
			<Layout.Header
				style={{
					background: '#074715',
					color: 'white',
					maxWidth: '100vw',
					minHeight: '80px',
					boxShadow: '0 4px 2px -1px #959999',
				}}
			>
				<Row
					style={{
						color: '#8ff2a4',
						maxWidth: '1040px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						minHeight: '80px',
						margin: '0 auto'
					}}
				>
					<Col
						style={{
							fontSize: '30px'
						}}
					>
						Магазин товаров
					</Col>
					<Col >
						<ShoppingCartOutlined
							style={{
								fontSize: '30px'
							}}
						/>
					</Col>
				</Row>
			</Layout.Header>
			<Outlet />
		</>
	);
};

export default Header;