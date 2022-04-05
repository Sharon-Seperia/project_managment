import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	gap: 20px;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 20px;
`;
const Li = styled.li`
	display: inline;
	padding: 5px;
	color: white;
	font-size: 22px;
	& > a {
		color: white;
	}
`;

const Layout = () => {
	return (
		<div>
			<Header className='App-header'>
				<div>
					<h1 style={{ fontSize: '30px' }}>
						SEPERIA Project Managment
					</h1>
				</div>
				<div>
					<nav>
						<ul>
							<Li>
								<Link to='/'>Home</Link>
							</Li>
							<Li>
								<Link to='/Projects'>Projects</Link>
							</Li>
							<Li>
								<Link to='/Tasks'>Tasks</Link>
							</Li>
						</ul>
					</nav>
				</div>
			</Header>
			<div style={{ padding: '0 20px' }}>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
