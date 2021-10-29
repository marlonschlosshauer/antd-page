import { Layout, Menu } from 'antd';
import logo from '../logo.svg';

function Header() {
	return (
		<Layout.Header>
			<Menu theme="dark" mode="horizontal" style={{width: '100%'}}>
				<Menu.Item key='logo'><img width='30px' src={logo} alt="logo" /></Menu.Item>
				<Menu.Item key='dashboard'>Dasboard</Menu.Item>
				<Menu.Item key='users'>Users</Menu.Item>
				<Menu.Item key='test'>Test</Menu.Item>
			</Menu>
		</Layout.Header>
	)
}

export default Header;
