import React from "react";
import styled from 'styled-components'
import LogoImage from '../../asset/image/logo.png'
import IconHeader from "../icon/icon";
import AutoComplete from "../input/input";
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Link to="/">
                    <Logo src={LogoImage} />
                </Link>
                <AutoComplete />
                <IconHeader />
            </Container>
        </Wrapper>
    )
}

export default Header

const Logo = styled.img`
    width: 65px;
    height: auto;
    margin-right: 90px;
`

const Wrapper = styled.div`
    background-color: #D70018;
    display: flex;
    justify-content: space-between;
`

const Container = styled.div`
    display: flex;
    align-items:center;
    padding: 10px;
    margin: 0 auto;
  `