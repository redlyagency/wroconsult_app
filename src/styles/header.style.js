import styled from "styled-components";
import { Link } from "gatsby"

import LogoSVG from "../assets/svg/logo.svg"
import BgLine from "../assets/svg/bg_line.svg"

import HoverLogo from "../assets/gif/normal_logo.gif"

import "../fonts/fonts.css"

export const HeaderWrapper = styled.header`
    margin-top: 50px;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: ${({showNav}) => showNav ? 'flex-start' : 'center'};
    background-color: #FFFFFFD9;
    position: sticky;
    top: 50px;

    @media (max-width: 1023px) {
        background-color: white;
        margin-top: ${({showNav}) => showNav ? '0' : '20px'};
        top: ${({showNav}) => showNav ? '0' : '20px'};
        height: ${({showNav}) => showNav ? '100vh' : '75px'};
        padding: 0 20px 0 20px;
    }
`
export const Logo = styled.div`
    height: 65px;
    width: 154px;
    background-image: url( ${ LogoSVG } );
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: ${({showNav}) => showNav ? '20px' : '0'};
    transition: 1s !important;

    :hover {
        background-image: url( ${ HoverLogo } );
    }
`

export const MobileButtonWrapper = styled.button`
    display: none;
    height: 25px;
    width: 35px;
    position: relative;
    border: none;
    margin-top: ${({showNav}) => showNav ? '35px' : '0'};

    @media (max-width: 1023px) {
        display: unset;
    }
`
export const MobileButtonInner = styled.div`
    width: 18px;
    height: 4px;
    position: absolute;
    right: 0;
    bottom: 10px;
    border-radius: 10px;
    background-color: ${({hamburger}) => hamburger ? 'transparent' : '#76777A'};
    transition: 0.2s;

    ::before {
        content: '';
        width: 30px;
        width: ${({hamburger}) => hamburger ? '35px' : '30px'};
        height: 4px;
        background-color: #76777A;
        position: absolute;
        right: 0;
        top: -10px;
        border-radius: 10px;
        transform: ${({hamburger}) => hamburger ? 'translate(0px, 10px) rotate(-45deg)' : 'rotate(0)'};
        transition: 0.2s;
    }
    ::after {
        content: '';
        width: 35px;
        height: 4px;
        background-color: #76777A;
        position: absolute;
        right: 0;
        bottom: -10px;
        border-radius: 10px;
        transform: ${({hamburger}) => hamburger ? 'translate(0px, -10px) rotate(45deg)' : 'rotate(0)'};
        transition: 0.2s;
    }
`

export const NavbarWrapper = styled.nav`
    display: unset;

    @media (max-width: 1023px) {
        display: none;
    }
    
`
export const Ul = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`
export const Li = styled.li`
    display: inline;
    position: relative;
    color: #76777A;
    font-size: 16px;
    text-align: center;
    font-family: 'Poppins-Regular';

    :not(:first-child) {
        margin-left: 30px;
    }

    ::before {
        content: '';
        height: 3px;
        width: 0;
        background-color: #BF1E2D;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -8px;
        border-radius: 3px;
        transition: 0.2s !important;
    }

    :hover::before {
        width: 34px;
    }
`

export const RightSideButtonWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1023px) {
        display: none;
    }
`
export const RightSideButtonElement = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 105px;
    background-color: #BF1E2D;
    border: 2px solid #BF1E2D;
    border-radius: 5px;
    color: white;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    transition: 0.2s;

    :hover {
        color: #BF1E2D;
        background-color: white;
    }
`

export const MobileNavSection = styled.div`
    width: 80vw;
    height: 80vh;
    position: fixed;
    left: 50%;
    top: 50%;
    display: none;
    transform: ${({showNav}) => showNav ? 'translate(-50%, -45%)' : 'translate(-9999999999%, -45%)'};
    background-image: url( ${ BgLine } );
    background-size: 250%;
    background-position: center;


    @media (max-width: 1023px) {
        display: unset;
    }
`

export const NavbarWrapperMobile = styled.nav`
    @media (max-height: 500px) {
        display: flex;
        align-items: baseline;
        margin-top: 50px;
    }
`
export const UlMobile = styled.ul``
export const LiMobile = styled.li`
    position: relative;
    ::before {
        content: '';
        height: 4px;
        width: 0;
        background-color: #BF1E2D;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -7px;
        border-radius: 3px;
        transition: 0.2s !important;
    }

    :hover::before {
        width: 34px;
    }

    text-align: center;
    margin-top: 30px;

    @media (max-height: 650px) {
        margin-top: 10px;

        :first-child {
            margin-top: 30px;
        }
    }
    @media (max-height: 500px) {
        display: inline-flex;
        justify-content: center;
        align-items: baseline;
        margin-left: 50px;
    }
`
export const LinkMobile = styled(Link)`
    font-size: 30px;
    font-family: 'Poppins-SemiBold';
    color: #76777A;
    position: relative;
`
export const RightSideButtonWrapperMobile = styled.nav`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`
export const RightSideButtonElementMobile = styled(Link)`
    padding: 7px 110px 7px 110px;
    font-size: 20px;
    color: white;
    font-family: 'Poppins-Regular';
    border-radius: 5px;
    border: 2px #BF1E2D solid;
    background-color: #BF1E2D;
    transition: 0.2s;

    :hover {
        background-color: transparent;
        color: #BF1E2D;
    }
`