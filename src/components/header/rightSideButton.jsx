import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import HeaderHook from "../header/headerStateStore"

import { NavbarDataButton } from "../../data/layoutData"



const RightSideButton = () => {
    const { menu, showMenu } = HeaderHook

    return (
        <RightSideButtonWrapper>
            <RightSideButtonElement
                showNav={menu}
                to={ NavbarDataButton.Link }
            >
                { NavbarDataButton.Title }
            </RightSideButtonElement>
        </RightSideButtonWrapper>
    )
}

export default RightSideButton