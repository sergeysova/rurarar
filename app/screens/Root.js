import React, { PropTypes } from 'react'
import { compose } from 'recompose'
// import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Layout, Column } from 'components/Layout'


const enhance = compose(
  // connect(),
)

const Index = () => (
  <Layout padding="L" justifyContent="center">
    <Column marginBetween="M">
      <div>Index file</div>
      <Link to="/about">To about</Link>
      <Link to="/github">Github API Usage</Link>
    </Column>
  </Layout>
)

export default enhance(Index)
