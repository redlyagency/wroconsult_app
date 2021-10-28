import React from "react"
import styled from "styled-components"

const H1Wrapper = styled.div`

`
const H1 = styled.h1`
    font-size: 52px;
    color: #76777A;
    font-family: 'Poppins-SemiBold';
    line-height: 57px;

    @media (max-width: 1023px) {
        font-size: 34px;
        line-height: 39px;
    }
`

class H1Component extends React.Component {
    render() {
        return(
            <H1Wrapper>
                <H1>
                    { this.props.name }
                </H1>
            </H1Wrapper>
        )
    }
}

export default H1Component