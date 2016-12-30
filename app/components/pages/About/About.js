import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import { Row } from 'components/atoms'


const About = () => (
  <Row padding="L" marginBetween="M">
    <div>Simple about file</div>
    <Link to="/">Go to home</Link>
  </Row>
)

export default About
