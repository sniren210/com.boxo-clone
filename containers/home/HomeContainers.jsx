import Layout from "@/components/_shared/core/layout"
import HomeComponent from "@/components/home/HomeComponents"
import { forwardRef } from "react"

const HomeContainer = () => {
    return (
        <Layout>
            <HomeComponent/>
        </Layout>
    )
}

export default forwardRef(HomeContainer)