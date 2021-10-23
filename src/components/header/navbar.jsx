import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { NavbarData } from "../../data/layoutData"



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