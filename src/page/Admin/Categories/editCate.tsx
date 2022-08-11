import React, { useEffect } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import { useNavigate, useParams } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { getCate, updateCate } from "../../../api/categories";
type InputForm = {
	name: string
 }
const { TextArea } = Input
const { Option } = Select;

const EditCate = () => {
   const {id} = useParams()
	const navigate = useNavigate()
   const { handleSubmit, formState: { errors }, control, reset, setValue } = useForm<InputForm>();
   useEffect(() => {
      const getCategory= async (id: any) => {
         const {data} = await getCate(id) 
			console.log(data);
         reset(data);
      }
      getCategory(id)
   },[])
	const onFinish: SubmitHandler<InputForm> = async (category: any) => {
		console.log('success', category);
		try {
			const {data} = await updateCate(category)
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
			<Typography.Title level={3}>Sua danh muc</Typography.Title>
         <Row gutter={16}>
            <Col span={14}>
               <Typography.Title level={5}>Thông tin danh muc</Typography.Title>
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
                           label="Tên danh mục"
                        >
                           <Input size="large" {...field} />
                        </Form.Item>
                     } />
                  {errors.name && <Typography.Text type='danger'>Bạn cần nhập tên danh mục</Typography.Text>}

                  <Form.Item>
                     <Button type="primary" htmlType="submit">
                        Sửa danh mục
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

export default EditCate
