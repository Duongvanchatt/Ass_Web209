import { Col, Row } from 'antd';
import styled from 'styled-components';
import ImageFooter from '../../asset/image/logo.png';
import ImageFooter1 from '../../asset/image/support_new2.png';
import ImageFooter2 from '../../asset/image/support_new3.png';
import ImageFooter3 from '../../asset/image/support_new4.png';
const Footerr = () => (
  <Fot>
    <Div>
    <Col xs={{
        span: 5,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
      <IMG src={ImageFooter} width={100} />
      <p>Liên hệ: 0926032863</p>
      <p>Địa chỉ: 124 Phúc Diễn, Từ Liêm, Hà Nội</p>
      <div>
      </div>
    </Col>
    <Col
      xs={{
        span: 11,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
      <h2 className='text-xl'>Sản phẩm</h2>
      <p>Điện thoại</p>
      <p>Máy tính</p>
      <p>Phụ kiện</p>
      <p>Âm thanh</p>
      <p>Dịch vụ</p>
      <p>Chăm sóc khách hàng</p>
    </Col>
    <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      lg={{
        span: 6,
        offset: 2,
      }}
    >
      <h2 className='text-xl'>Chính sách</h2>
      <p>Trả góp</p>
      <p>Giao hàng</p>
      <p>Hủy giao dịch</p>
      <p>Đổi trả</p>
      <p>Bảo hành</p>
      <p>Giải quyết kiếu nại</p>
    </Col>
  </Div>
  
  </Fot>
);

const Fot = styled.div`
   margin-top: 60px;
   background-color: #CD5C5C;
   color: white;
`
const IMG = styled.img`
   margin-left: 110px;
`
const Div = styled.div`
   padding: 10px 10%;
   display: flex;
`
export default Footerr;
