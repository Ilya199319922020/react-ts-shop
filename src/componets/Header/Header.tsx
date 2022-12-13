import { NavLink, Outlet } from 'react-router-dom';
import { Layout, Col, Row, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../hooks/redux';

const Header = () => {
	const { countProduct } = useAppSelector(state => state.sliceProducts);

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
							fontSize: '30px',
							color: '#8ff2a4'
						}}
					>
						<NavLink
							to='/products'
							style={{
								color: '#8ff2a4'
							}}
						>
							Магазин товаров
						</NavLink>
					</Col>
					<Col >
						<NavLink
							to='/cart'
						>
							<Badge count={countProduct}>
								<ShoppingCartOutlined
									style={{
										fontSize: '30px',
										color: '#8ff2a4'
									}}
								/>
							</Badge>
						</NavLink>
					</Col>
				</Row>
			</Layout.Header>
			<Outlet />
		</>
	);
};

export default Header;