import React, { useEffect, useState } from "react";
import { Col, Divider, Row } from 'antd';
import { Card } from 'antd';
import styled from "styled-components";
import Sliders from "../../component/slider";
import { getAll } from "../../api/product";
import { Link } from "react-router-dom";
import axios from "axios";
import { SearchOutlined } from '@ant-design/icons';
import Sli from '../../asset/image/Rectangle.png';
const { Meta } = Card;
export type PRODUCT_TYPE = {
  id: number,
  name: string,
  originalPrice: number,
  image: string,
  saleOffPrice: number,
  description: string
};
const HomePage = () => {
  const [products, setProducts] = useState<PRODUCT_TYPE[]>([]);
  
  const [value, setValue] = useState("");
  const handleGetProduct = async () => {
    const response = await getAll();
    setProducts(response.data);
  }

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    return await axios.get(`http://localhost:3001/products?q=${value}`)
      .then((response) => {
        setProducts(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));

  };
  return (
    <>
      <Row>
        <Col span={18} push={6}>
          <Nav1>
            <Slid src={Sli} />
          </Nav1>
        </Col>
        <Col span={6} pull={18}>
          <Nav1>
            <UL>
              <LI><A href="">Điện thoại</A></LI>
              <LI><A href="">Máy tính bảng</A></LI>
              <LI><A href="">Nhà thông minh</A></LI>
            </UL>
          </Nav1>
        </Col>
      </Row><br></br><br />

      <Div>
        <h2 className="font-bold text-2xl">Sản phẩm nổi bật</h2>
        <form action="" onSubmit={handleSearch}>
          <div className="mb-3 pt-0 flex">
            <input type="text" value={value}
              onChange={(e) => setValue(e.target.value)} placeholder="Search..." className="px-3 py-3
                    placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0
                     shadow outline-none focus:outline-none focus:ring w-full"/>
            <button className="bg-slate-500 w-20" type="submit"><SearchOutlined /></button>
          </div>

        </form>
      </Div>
      <Product>
        <Row>
          {
            products.map(product =>
              <Col >
                <Col1>
                  <Card hoverable style={{ width: 200 }}
                    cover={<img alt="example" src={product.image} style={{ width: 200, height: 200 }} />}
                  >
                    <Link to={`/detail/${product.id}`}><Meta title={product.name} /></Link>
                    <Ph>{product.originalPrice} <span>VND</span></Ph>
                    <Ph1>{product.saleOffPrice} <span>VND</span></Ph1>
                    <But>Mua hàng</But>
                  </Card>
                </Col1>
              </Col>
            )
          }
        </Row>

      </Product>
    </>
  )
}

const Product = styled.div`
  padding: 10px 10%;
`

const Col1 = styled.div`
  margin-right: 8px;
`
const Div = styled.div`
  padding: 10px 5%;
  display: flex;
  justify-content:space-between;
`
const Ph = styled.p`
  color: red;
  font-weight:bold;
  margin-top: 10px;
  font-size: 15px;
`
const Ph1 = styled.p`
  font-weight:bold;
  font-size: 13px;
  color: #CCC
`
const But = styled.button`
border: none;
color: white;
width: 100px;
padding: 10px;
font-size: 16px;
background-color: indianred;
`
const Nav1 = styled.div`
    padding: 10px 50px;
    margin-left: 40px;
`
const Slid = styled.img`
    width: full;
    height: auto;
    margin-right: 40px;
`
const UL = styled.ul`
width: 250px;
padding: 0;
list-style-type: none;
text-align: left;
`
const LI = styled.li`
width: auto;
height: 40px;
line-height: 40px;
border-bottom: 1px solid #e8e8e8;
padding: 0 3em;
color: black;
`

const A = styled.a`
text-decoration: none;
color: #333;
font-weight: bold;
display: block;
#menu li:hover
background: #CDE2CD;
`
export default HomePage
