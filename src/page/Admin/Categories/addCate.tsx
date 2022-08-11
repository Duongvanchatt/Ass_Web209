import React from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import UploadImage from "../../../component/product";
import { createProduct } from "../../../api/product";
import { useNavigate, useParams } from "react-router-dom";
import { PlusCircleOutlined } from '@ant-design/icons';
import { createCate } from "../../../api/categories";
const { TextArea } = Input
const { Option } = Select;
type InputForm = {
	name: string
 }
const AddCatePage: React.FC = () => {
	const {id} = useParams(); 
    console.log(id);
	const navigate = useNavigate()

	//validate
	const [form] = Form.useForm();
	
	const onFinish = async (values: any) => {
		console.log('Success:', values);

		try {
			const data = await createCate(values)
			message.success("Tạo mới thành công")
			navigate(-1)
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	

	return (
		<>
			<Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					Thêm mới
				</Typography.Title>
			</Breadcrumb>
			<Row gutter={16}>
				
				<Col span={14}>
					<Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
					<Form
					    form={form}
						name="register"
						initialValues={{}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="on"
						labelCol={{ span: 24 }}
					>
						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Tên sản phẩm"
							rules={[{ required: true, message: 'Tên danh muc không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Tạo mới sản phẩm
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>


	)
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const Label = styled.div`
	font-size: 13px;
`

export default AddCatePage