import styled from 'styled-components'
import React, { PropTypes } from 'react'

import { getText } from 'styles/palette'
import { Row } from 'components/molecules'


const WrapperGithubRepo = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  background-color: white,
  border: 1px solid rgba(0,0,0,.4);
  border-radius: 2px;
  color: ${getText('White')};
  padding: 8px;
  font-weight: 400;
  margin-bottom: 20px;
`

const GithubRepo = ({ repo }) => (
  <WrapperGithubRepo>
    <Row marginBetween="XS">
      <a href={repo.owner.html_url} target="_blank" rel="noopener noreferrer">{repo.owner.login}</a>
      <span>/</span>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
    </Row>
  </WrapperGithubRepo>
)

GithubRepo.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default GithubRepo
