import React from "react";
import styled from 'styled-components'
import { ShoppingCartOutlined, UserAddOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom'
const IconHeader = () => {
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem("user");
        navigate("/");
    }
    return (
        <Icon>
            {localStorage.getItem("user") ? <p className="text-2xl mt-8" onClick={() => logout()}>Logout</p> : 
            
            <div className="">
            <Link to="/signup">
            <UserAddOutlined />
            </Link>
          
            <Link to="/cart">
                <ShoppingCartOutlined />
            </Link>

            <Link to="/signin">
                <LockOutlined />
            </Link>
            </div>
            }
            
            
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
    margin-right: 10px;
`
