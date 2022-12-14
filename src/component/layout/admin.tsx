import { PhoneOutlined, LaptopOutlined, TabletFilled, AudioOutlined, SettingOutlined,SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';

import LogoImage from '../../asset/image/logo.png';

const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
  { key: "cellphone", icon: <PhoneOutlined />, label: <Link to="/admin">Products</Link> },
  { key: "audio", icon: <AudioOutlined />, label: <Link to="/admin/user">Users</Link>  },
  {
    key: "categories", icon: <SettingOutlined />,
    label: <Link to="/admin/categories">Categories</Link>
  },
]

const AdminLayout: React.FC = () => (
  <Layout>
    <HeaderCustom>
      <Link to="/"><Logo src={LogoImage} /></Link>  
    </HeaderCustom>
    <Layout>
      <Sider
        collapsible={true}
        width={200}
        className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={item3}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <ContentCustom>
          <Outlet />
        </ContentCustom>
      </Layout>
    </Layout>
  </Layout>
);

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
`

const ContentCustom = styled(Content)`
  min-height: 100vh;
`

export default AdminLayout;