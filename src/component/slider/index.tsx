import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Sli from '../../asset/image/Rectangle.png';

const Sliders = () => (
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
  </Row>
);

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
export default Sliders;
