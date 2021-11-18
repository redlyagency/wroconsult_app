import * as React from "react"

import Layout from "../components/base/layout"

import {
PageWrapper,
Page404Paragraph,
} from "../styles/404.style"

import { SuccessPageData } from "../utils/data/layoutData"

import MainBtn from "../components/buttons/mainBtn"

class Page404 extends React.Component {
render() {
    return (
    <Layout>
        <PageWrapper>
        <Page404Paragraph>
            {SuccessPageData.Content}
        </Page404Paragraph>
        <MainBtn
            name={SuccessPageData.BtnTitle}
            link={SuccessPageData.BtnLink}
            isSmallFont
        />
        </PageWrapper>
    </Layout>
    )
}
}

export default Page404