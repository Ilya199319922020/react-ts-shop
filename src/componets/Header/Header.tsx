import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header>
				<div>
					Тестирование знаний
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default Header;