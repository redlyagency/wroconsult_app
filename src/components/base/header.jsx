import React, { useState } from "react"
import { NavbarDataButton, NavbarData } from "../../utils/data/layoutData"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {
    HeaderWrapper,
    Logo,
    NavbarWrapper,
    Ul,
    Li,
    RightSideButtonWrapper,
    RightSideButtonElement,
    MobileMenuSectionBlank,
    MobileMenuSection,
    MobileButtonWrapper,
    MobileButtonInner,
    MobileNavSection,
    UlMobile,
    LiMobile,
    LinkMobile,
    RightSideButtonElementMobile
} from "../../styles/header.style"

const Header = () => {
    const[menu, showMenu] = useState(false)

    return (
        <>
            <HeaderWrapper showNav={menu}>
                <AniLink 
                    to="/"
                    paintDrip
                    hex="#BF1E2D"
                    duration={0.5}
                >
                    <Logo showNav={menu} />
                </AniLink>
                {/* Navbar */}
                <NavbarWrapper>
                    <Ul>
                        {NavbarData.map((value, index) => {
                            return (
                                <Li key={index}>
                                    <AniLink
                                        paintDrip
                                        hex="#BF1E2D"
                                        duration={0.5}
                                        to={value.Link}
                                        activeClassName="selected"
                                    >
                                        <p
                                            style={{
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            {value.Title}
                                        </p>
                                    </AniLink>
                                </Li>
                            )
                        })}
                    </Ul>
                </NavbarWrapper>
                {/* Right side button */}
                <RightSideButtonWrapper>
                    <RightSideButtonElement
                        showNav={menu}
                        paintDrip
                        hex="#BF1E2D"
                        duration={0.5}
                        to={ NavbarDataButton.Link }
                    >
                        { NavbarDataButton.Title }
                    </RightSideButtonElement>
                </RightSideButtonWrapper>
            </HeaderWrapper>
            {/* Mobile menu section */}
            <MobileMenuSectionBlank />
            <MobileMenuSection showNav={menu}>
                <AniLink 
                    to="/"
                    paintDrip
                    hex="#BF1E2D"
                    duration={0.5}
                >
                    <Logo
                        showNav={menu}
                        isMobile
                    />
                </AniLink>
                <MobileButtonWrapper
                    showNav={menu}
                    onClick={() => showMenu(!menu)}
                >
                    <MobileButtonInner
                        hamburger={menu}
                    />
                </MobileButtonWrapper>
            </MobileMenuSection>
            <MobileNavSection showNav={menu}>
                <UlMobile>
                    {NavbarData.map((value, index) => {
                        return (
                            <LiMobile key={index}>
                                <LinkMobile
                                    paintDrip
                                    hex="#BF1E2D"
                                    to={value.Link}
                                    duration={0.5}
                                    activeClassName="selected2"
                                >
                                    {value.Title}
                                </LinkMobile>
                            </LiMobile>
                        )
                    })}
                </UlMobile>
                <RightSideButtonElementMobile
                    showNav={menu}
                    paintDrip
                    hex="#BF1E2D"
                    duration={0.5}
                    to={ NavbarDataButton.Link }
                >
                    { NavbarDataButton.Title }
                </RightSideButtonElementMobile>
            </MobileNavSection>
        </>
    )
}

export default Header