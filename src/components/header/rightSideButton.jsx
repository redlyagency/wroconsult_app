import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { NavbarDataButton } from "../../data/navbarData"

const RightSideButtonWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`
const RightSideButtonElement = styled(Link)`
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

    :hover {
        color: #BF1E2D;
        background-color: white;
    }
`

const RightSideButton = () => {
    return (
        <RightSideButtonWrapper>
            <RightSideButtonElement
                to={ NavbarDataButton.Link }
            >
                { NavbarDataButton.Title }
            </RightSideButtonElement>
        </RightSideButtonWrapper>
    )
}

export default RightSideButton