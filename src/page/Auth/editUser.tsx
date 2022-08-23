import React, { useEffect } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import { useNavigate, useParams } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PlusCircleOutlined } from '@ant-design/icons';
import { getUser, updateUser } from "../../api/user";
type InputForm = {
	name: string,
	password: string,
    email: string
 }
const { TextArea } = Input
const { Option } = Select;

const EditUser = () => {
   const {id} = useParams()
	const navigate = useNavigate()
   const { handleSubmit, formState: { errors }, control, reset, setValue } = useForm<InputForm>();
   useEffect(() => {
      const getProduct= async (id: any) => {
         const {data} = await getUser(id) 
			console.log(data);
         reset(data);
      }
      getProduct(id)
   },[])
	const onFinish: SubmitHandler<InputForm> = async (user: any) => {
		console.log('success', user);
		try {
			const {data} = await updateUser(user)
			console.log(data);
			
			message.success("Sửa thành công")
			navigate(-1)
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div>
			<Typography.Title level={3}>Sửa người dùng</Typography.Title>
         <Row gutter={16}>
		
            <Col span={14}>
               <Typography.Title level={5}>Thông tin người dùng</Typography.Title>
               <Form
                  autoComplete="on"
                  onFinish={handleSubmit(onFinish)}
                  onFinishFailed={onFinishFailed}
               >
                  <Controller
                     name='name'
                     control={control}
                     rules={{ required: true }}
                     render={({ field }) =>
                        <Form.Item
                           labelCol={{ span: 24 }}
                           label="Tên sản phẩm"
                        >
                           <Input size="large" {...field} />
                        </Form.Item>
                     } />
                  {errors.name && <Typography.Text type='danger'>Bạn cần nhập tên người dùng</Typography.Text>}

                  <Row gutter={16}>
                     <Col span={12}>
                        <Controller
                           name="password"
                           control={control}
                           rules={{ required: true }}
                           render={({ field }) =>
                              <Form.Item
                                 label="Pass"
                                 labelCol={{ span: 24 }}
                              >
                                 <InputNumber {...field} style={{ width: '100%' }} size="large" />
                              </Form.Item>
                           }
                        />
                        {errors.password && <Typography.Text type='danger'>Bạn cần nhập mật khẩu</Typography.Text>}
                     </Col>

                     <Col span={12}>
                        <Controller
                           name="email"
                           control={control}
									rules={{ required: true}}
                           render={({ field }) =>
                              <Form.Item
                                 label="email"
                                 labelCol={{ span: 24 }}
                              >
                                 <InputNumber style={{ width: '100%' }} size="large" {...field} />
                              </Form.Item>
                           }
                        />
                        {errors.email && <Typography.Text type='danger'>Bạn cần nhập email</Typography.Text>}
                     </Col>
                  </Row>

                  <Form.Item>
                     <Button type="primary" htmlType="submit">
                        Sửa sản phẩm
                     </Button>
                  </Form.Item>
               </Form>
            </Col>
         </Row>
		</div>
	)
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`


const Container = styled.div`
    
`

const Label = styled.div`
    font-weight: bold;
    font-size: 13px;
    text-align: left;
`

const UploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    border: 1px dashed gray;
`

const UploadIcon = styled.label`
    input {
        display: none;
    }
`

const ImagePreview = styled.img`
    width: 100%;
`

export default EditUser
