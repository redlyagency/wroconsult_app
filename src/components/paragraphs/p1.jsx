import React from "react"
import styled from "styled-components"

const P1Wrapper = styled.div`
    width: 75%;
    width: ${props => props.width ? props.width : 'auto'};

    @media (max-width: 767px) {
        width: ${props => props.widthMobile ? props.widthMobile : 'auto'};
    }
`
const P1 = styled.p`
    font-size: 15px;
    color: #76777A;
    font-family: 'Poppins-Regular';
    line-height: 20px;
`

class P1Component extends React.Component {
    render() {
        return(
            <P1Wrapper
                width={ this.props.width }
                widthMobile={ this.props.widthMobile }
            >
                <P1>
                    { this.props.name }
                </P1>
            </P1Wrapper>
        )
    }
}

export default P1Component