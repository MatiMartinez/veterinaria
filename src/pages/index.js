import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import WhatWeDo from "../components/WhatWeDo"
import Services from "../components/Services"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <WhatWeDo />
    <Services />
  </Layout>
)

export default IndexPage
