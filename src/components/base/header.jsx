import React, { useState } from "react"
import { NavbarDataButton, NavbarData } from "../../utils/data/layoutData"
import { Link } from "gatsby"
import {
    HeaderWrapper,
    Logo,
    MobileButtonWrapper,
    MobileButtonInner,
    NavbarWrapper,
    Ul,
    Li,
    RightSideButtonWrapper,
    RightSideButtonElement,
    MobileNavSection,
    NavbarWrapperMobile,
    UlMobile,
    LiMobile,
    LinkMobile,
    RightSideButtonWrapperMobile,
    RightSideButtonElementMobile,
} from "../../styles/header.style"

const Header = () => {
    const[menu, showMenu] = useState(false)

    return (
        <>
            <HeaderWrapper showNav={menu}>
                <Link to="/">
                    <Logo showNav={menu} />
                </Link>
                <MobileButtonWrapper showNav={menu} onClick={() => showMenu(!menu)}>
                    <MobileButtonInner hamburger={menu} />
                </MobileButtonWrapper>
                {/* Navbar */}
                <NavbarWrapper>
                    <Ul>
                        {NavbarData.map((value, index) => {
                            return (
                                <Li key={index}>
                                    <Link
                                        to={value.Link}
                                        activeClassName="selected"
                                    >
                                        {value.Title}
                                    </Link>
                                </Li>
                            )
                        })}
                    </Ul>
                </NavbarWrapper>
                {/* Right side button */}
                <RightSideButtonWrapper>
                    <RightSideButtonElement
                        showNav={menu}
                        to={ NavbarDataButton.Link }
                    >
                        { NavbarDataButton.Title }
                    </RightSideButtonElement>
                </RightSideButtonWrapper>
            </HeaderWrapper>
            <MobileNavSection showNav={menu}>
                {/* Navbar */}
                <NavbarWrapperMobile>
                    <UlMobile>
                        {NavbarData.map((value, index) => {
                            return (
                                <LiMobile key={index}>
                                    <LinkMobile
                                        to={value.Link}
                                        activeClassName="selected2"
                                    >
                                        {value.Title}
                                    </LinkMobile>
                                </LiMobile>
                            )
                        })}
                    </UlMobile>
                </NavbarWrapperMobile>
                {/* Right side button */}
                <RightSideButtonWrapperMobile>
                    <RightSideButtonElementMobile
                        showNav={menu}
                        to={ NavbarDataButton.Link }
                    >
                        { NavbarDataButton.Title }
                    </RightSideButtonElementMobile>
                </RightSideButtonWrapperMobile>
            </MobileNavSection>
        </>
    )
}

export default Header