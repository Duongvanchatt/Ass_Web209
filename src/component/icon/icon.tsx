import React from "react";
import styled from 'styled-components'
import { ShoppingCartOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
const IconHeader = () => {
    return (
        <Icon>
            <Link to="/signup">
            <UserAddOutlined />
            </Link>
          
            <Link to="/cart">
                <ShoppingCartOutlined />
            </Link>
        </Icon>
    )
}

export default IconHeader

const Icon = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    color: white;
    margin-left: 100px;
    margin-top: -10px;
`
