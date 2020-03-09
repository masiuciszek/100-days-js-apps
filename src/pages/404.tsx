import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/styled/title/Title'
import { AppWrapper } from '../components/styled/Wrapper'
import { StyledErrorWrapper } from '../components/404/Styled.404'

const NotFoundPage = () => (
  <Layout>
    <AppWrapper>
      <StyledErrorWrapper>
        <Title mainTitle="OOppps We got a 404" subTitle="Please had back home" />
        <Link to="/">Back Home ⬅</Link>
      </StyledErrorWrapper>
    </AppWrapper>
  </Layout>
)

export default NotFoundPage
