import React, { PropTypes } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Row } from 'app/components/Layout'


const enhance = compose(
  // connect(),
)

const About = () => (
  <Row padding="L" marginBetween="M">
    <div>Simple about file</div>
    <Link to="/">Go to home</Link>
  </Row>
)

export default enhance(About)
