import { Input, Select, DatePicker, Button, Popover, Form, Tag } from "antd";
import { v4 as uuid } from 'uuid';

import colors from '../util/colors';

const { Option } = Select;

function AddUserMenu(props) {
	const { addUser } = props;
	const [form] = Form.useForm();

	const layout = {
		labelCol: { span: 10 },
		wrapperCol: { span: 14 }
	};

	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	const onFinish = (user) => {
		addUser({ ...user, birthday: user.birthday._d, key: uuid() })
		form.resetFields();
	}

	return (
		<Form {...layout} form={form} onFinish={onFinish}>
			<Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input a name' }]}>
				<Input />
			</Form.Item>
			<Form.Item label="Color" name="color" rules={[{ required: true }]}>
				<Select placeholder="Select a color">
					{colors.map(c => (<Option key={c.name} value={c.name}> <Tag color={c.name}>{c.name}</Tag></Option>))}
				</Select>
			</Form.Item>
			<Form.Item label="Birthday" name="birthday" rules={[{ required: true, message: 'Please select a birthday' }]}>
				<DatePicker />
			</Form.Item>
			<Form.Item label="Note" name="note" rules={[{ required: false }]}>
				<Input />
			</Form.Item>
			<Form.Item {...tailLayout}>
				<Button type='primary' htmlType='submit'>Add user</Button>
			</Form.Item>
		</Form>
	)
}

function AddUser(props) {
	const { addUser } = props;
	return (<div>
		<Popover content={() => <AddUserMenu addUser={addUser} />} title="Add user">
			<Button type='primary'>Add user</Button>
		</Popover>

	</div>)
}

export default AddUser;
