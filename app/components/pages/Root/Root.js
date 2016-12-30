import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import { Layout, Column } from 'components/atoms'


const Index = () => (
  <Layout padding="L" justifyContent="center">
    <Column marginBetween="M">
      <div>Index file</div>
      <Link to="/about">To about</Link>
      <Link to="/github">Github API Usage</Link>
    </Column>
  </Layout>
)

export default Index
