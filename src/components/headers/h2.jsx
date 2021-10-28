import React from "react"
import styled from "styled-components"

const H2Wrapper = styled.div`
    width: 75%;
    width: ${props => props.width ? props.width : 'auto'};

    @media (max-width: 767px) {
        width: ${props => props.widthMobile ? props.widthMobile : 'auto'};
    }
`
const H2 = styled.h1`
    font-size: 20px;
    color: #BF1E2D;
    font-family: 'Poppins-Medium';
    line-height: 25px;
`

class H2Component extends React.Component {
    render() {
        return(
            <H2Wrapper
                width={ this.props.width }
                widthMobile={ this.props.widthMobile }
            >
                <H2>
                    { this.props.name }
                </H2>
            </H2Wrapper>
        )
    }
}

export default H2Component