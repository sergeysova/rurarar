import React, { PropTypes } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'


const enhance = compose(
  connect(),
)

const Index = () => (
  <div>
    Index file
  </div>
)

export default enhance(Index)
