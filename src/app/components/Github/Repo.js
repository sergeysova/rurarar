import React, { PropTypes } from 'react'
import { useSheet } from 'styles/jss'
import { getText } from 'styles/palette'
import { Row, Column } from 'app/components/Layout'

const styles = {
  githubRepo: {
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    backgroundColor: 'white',
    border: `1px solid rgba(0,0,0,.4)`,
    borderRadius: '2px',
    color: getText('White'),
    padding: '8px',
    fontWeight: 400,
    marginBottom: '20px',
  },
}

const Button = ({ sheet: { classes }, repo }) => (
  <Row className={classes.githubRepo}>
    <Row marginBetween="XS">
      <a href={repo.owner.html_url} target="_blank" rel="noopener noreferrer">{repo.owner.login}</a>
      <span>/</span>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
    </Row>
    <Column></Column>
  </Row>
)

Button.propTypes = {
  sheet: PropTypes.object,

  repo: PropTypes.object, // GITHUB REPO
}

export default useSheet(styles)(Button)
