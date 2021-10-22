import React from "react"
import styled from "styled-components"

import Navbar from "../header/navbar"
import RightSideButton from "../header/rightSideButton"

import LogoSVG from "../../assets/svg/logo.svg"

const HeaderWrapper = styled.header`
    margin-top: 50px;
    height: 65px;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.div`
    height: 65px;
    width: 154px;
    background-image: url( ${ LogoSVG } );
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo />
            <Navbar />
            <RightSideButton />
        </HeaderWrapper>
    )
}

export default Header