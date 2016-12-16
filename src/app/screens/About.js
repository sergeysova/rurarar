import React, { PropTypes } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'


const enhance = compose(
  connect(),
)

const About = () => (
  <div>
    Simple about file
  </div>
)

export default enhance(About)
