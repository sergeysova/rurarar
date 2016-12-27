import React, { PropTypes } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Layout } from 'app/components/Layout'


const enhance = compose(
  connect(),
)

const Index = () => (
  <Layout padding="L" justifyContent="center">
    Index file
  </Layout>
)

export default enhance(Index)
