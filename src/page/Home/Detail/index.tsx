import { Col, Divider, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import { PRODUCT_TYPE } from '../home';
import { Navigate, useParams } from 'react-router-dom';
import { getPro, getAll } from '../../../api/product';
import { useDispatch } from 'react-redux'
import { saveTotal } from '../../../redux/cartSlice';
import axios from 'axios';
const { Meta } = Card;
const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<PRODUCT_TYPE>();
  const [allProducts, setGetAllProducts] = useState<PRODUCT_TYPE[]>([]);
  const dispatch = useDispatch()

  const handleGetProductDetail = async () => {
    const response = await getPro(id);
    setProduct(response.data);
  }

  // Lấy tất cả sản phẩm
  const handleProducts = async () => {
    const response = await getAll();
    setGetAllProducts(response.data);
    console.log("allProducs",response.data);
    
  }

  useEffect(() => {
    handleGetProductDetail();
    handleProducts();
  }, []);
   
  
  return (
    <>
      <Divider orientation="left">Chi tiết sản phẩm</Divider>
      <Div>
        <div>
        <Col flex={1}>
          <ImageDetail src={product?.image} />
        </Col>
        </div>
        <Col flex={3}>
          <div>
            <H1>{product?.name}</H1>
            <Ph>{product?.originalPrice} <span>VND</span></Ph>
            <p>{product?.description}</p>
          </div>
          <div>
            <But>Mua hàng</But>
            <But onClick={() => {
              dispatch(
                saveTotal(
                  product
                )
              )
              alert("Them thanh cong");
            }}>Thêm vào giỏ</But>
          </div>
        </Col>
      </Div>

      <Divider orientation="left">Sản phâm cùng loại</Divider>
      <Product>
        <Row>
          {
            allProducts.map((item:any) => (
              item.category == product?.category ?  <Col span={6}>
              <Card hoverable style={{ width: 240 }}
                cover={<img alt="example" src={item.image} />}
              >
                <Meta title="Europe Street beat" />
                <p>{item.name}</p>
                <button>Mua hàng</button>
              </Card>
            </Col> : null
            ))
          }
        </Row>
      </Product>


    </>
  )
};
const ImageDetail = styled.img`
    width: 350px;
    height: auto;
 `
const Product = styled.div`
  padding: 20px 10%;
`
const Div = styled.div`
padding: 20px 10%;
display: flex;
justify-content: space-between;
`

const H1 = styled.h1`
font-size: 25px;
font-weight: bold;
margin-left: 20px;
`

const Ph = styled.p`
  color: red;
  font-weight:bold;
  margin-top: 10px;
  font-size: 20px;
  margin-left: 20px;
`

const But = styled.button`
border: none;
color: white;
width: 120px;
padding: 10px;
font-size: 16px;
background-color: indianred;
`
const BUT = styled.button`
margin-right: 20px;
`

export default DetailPage;