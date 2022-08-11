import React from "react";
import Header from "../../component/header/header";
import {Outlet} from 'react-router-dom'
import Sliders from "../slider";
import styled from "styled-components";
import Footerr from "../footer";


const UserLayout = (props: any) => {
    return (
        <>
            <Header/>
            <Layout>
            <Outlet/>
            </Layout>
            <Footerr/>
        </>
    )
}

const Layout = styled.div`
   margin-top: 20px;
`
export default UserLayout