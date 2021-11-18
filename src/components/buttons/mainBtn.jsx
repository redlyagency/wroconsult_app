import React from "react"

import {
    MainBtnWrapper,
    RightSideButtonElementMobile
} from "./mainBtn.style"

class MainBtn extends React.Component {
    render() {
        return (
            <MainBtnWrapper>
                <RightSideButtonElementMobile
                    paintDrip
                    hex="#cfcfcf"
                    duration={0.5}
                    to={ this.props.link }
                    isSmallFont={this.props.isSmallFont}
                >
                    { this.props.name }
                </RightSideButtonElementMobile>
            </MainBtnWrapper>
        )
    }
}

export default MainBtn