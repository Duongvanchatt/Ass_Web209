import { Col, Divider, Row, InputNumber } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { reQuantity, upQuantity } from '../../../redux/cartSlice';
const { Meta } = Card;

const Cart = () => {
  const cart = useSelector((state: any) => state.cart.total)

  const dispatch = useDispatch();

  return (
    <>
      <Divider orientation="left">Giỏ hàng</Divider>
      {cart?.map((item:any, index:any) => (
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <ImageDetail src={item.image} />
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <H2>{item.name}</H2>
            <p>{item.originalPrice}</p>

          Số<InputNumber min={1} max={10} value={item.quantity} />
          <button className="bg-slate-500 text-white
          font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none 
          focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={()=> dispatch(upQuantity(index))}>+</button> 
          <button className="bg-slate-500 text-white
          font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none 
          focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={()=> dispatch(reQuantity(index))}>-</button>
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <button  className="bg-slate-500 text-white
          font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none
           focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Xóa
            </button>
          </Col>
        </Row>

      ))}
      <hr />
      <Total>
        <p>Tổng tiền</p>
        <p>130000000 VND</p>
      </Total>
      <ButCart>
        <button className="bg-slate-500 text-white
          font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none 
          focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          Đặt hàng
        </button>

        <button className="bg-slate-500 text-white
          font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none 
          focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          <Link to="/">Tiếp tục mua sắm</Link>
        </button>
      </ButCart>
    </>
  )
};
const ImageDetail = styled.img`
    width: 150px;
    height: auto;
    margin-left: 150px;
 `
const H2 = styled.h2`
    font-size: 15px;
 `
const Total = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 10px 10%;
`

const ButCart = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 10px 10%;
 
`
export default Cart;