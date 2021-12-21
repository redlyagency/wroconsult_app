import React from "react"
import styled from "styled-components"

const H1Wrapper = styled.div`
    position: ${props => props.position ? props.position : 'static'};
    z-index: ${props => props.zIndex ? props.zIndex : '0'};
`
const H1 = styled.h1`
    font-size: 52px;
    color: #76777A;
    font-family: 'Poppins';
    font-weight: 600;
    line-height: 57px;

    @media (max-width: 1023px) {
        font-size: 34px;
        line-height: 39px;
    }
`

class H1Component extends React.Component {
    render() {
        return(
            <H1Wrapper position={ this.props.position } zIndex={ this.props.zIndex } >
                <H1>
                    { this.props.name }
                </H1>
            </H1Wrapper>
        )
    }
}

export default H1Component