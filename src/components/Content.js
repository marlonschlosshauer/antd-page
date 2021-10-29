import { Button, Table, Tag, Avatar, Breadcrumb, Typography } from "antd";
import * as Identicon from "identicon.js";
import { useState } from "react";

import AddUser from './AddUser';
import u from '../util/users';

import './Content.css';

function Content() {
	const [users, setUsers] = useState(u);

	const columns = [
		{
			dataIndex: 'key',
			key: 'avatar',
			render: (key) => <Avatar shape='square' size={32} icon={<img alt={key} src={`data:image/svg+xml;base64,${new Identicon(key, { format: 'svg' }).toString()}`} />} />,
		},
		{
			title: 'User Messaged?',
			dataIndex: 'messaged',
			key: 'messaged',
			render: messaged => <div>{messaged ? '✅' : '❌'}</div>
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: 'Color',
			dataIndex: 'color',
			key: 'color',
			render: (color) => <Tag color={color}>{color}</Tag>
		},
		{
			title: 'Birthday',
			dataIndex: 'birthday',
			key: 'birthday',
			render: b => (<p>{`${b.getUTCFullYear()}-${b.getUTCMonth() + 1}-${b.getUTCDate()}`}</p>),
		},
		{
			title: 'Note',
			dataIndex: 'note',
			key: 'note'
		},
		{
			title: '',
			key: 'options',
			render: (user) => (
				<div className='options-container'>
					<Button type='primary' onClick={() => { if (!user.messaged) setUsers([...users.filter(u => u.key !== user.key), { ...user, messaged: true }]) }}>Message</Button>
					<Button onClick={() => setUsers(users.filter(u => u.key !== user.key))}>Delete</Button>
				</div>
			),
		}
	];


	return (
		<div className='content'>
			<div className='controls'>
				<Breadcrumb>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item><a href="#/dashboard">Dashboard</a></Breadcrumb.Item>
				</Breadcrumb>
			</div>
			<div className='controls'>
				<Typography.Title>Users</Typography.Title>
				<AddUser addUser={user => setUsers([...users, user])} />
			</div>
			<Table dataSource={users} columns={columns} />
		</div>

	);
}

export default Content;
