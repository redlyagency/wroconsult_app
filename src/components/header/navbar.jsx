import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { NavbarData } from "../../data/navbarData"

const NavbarWrapper = styled.nav`

`
const Ul = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`
const Li = styled.li`
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

class Navbar extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Navbar