import React, { PropTypes } from 'react'

import { Column } from 'components/atoms'
import { Header, Footer, Container } from 'components/organisms'


const Home = ({ children }) => (
  <Column>
    <Header />
    <Container>
      {children}
    </Container>
    <Footer />
  </Column>
)

Home.propTypes = {
  children: PropTypes.node,
  sheet: PropTypes.object,
}

export default Home
