import React, { PropTypes } from 'react'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { Layout, Column, Row } from 'app/components/Layout'
import { Heading } from 'app/components/Heading'
import { Button } from 'app/components/Button'
import { Input } from 'app/components/Input'
import * as actions from 'store/github/github'

const redial = {
  fetch: ({ dispatch }) => dispatch(actions.loadTopRepo()),
}

const mapStateToProps = ({ github }) => ({
  list: github.repoList,
  query: github.query,
  foundCount: github.totalFoundCount,
})

const enhance = compose(
  provideHooks(redial),
  connect(mapStateToProps),
  withHandlers({
    updateQuery: ({ dispatch }) => ({ target: { value } }) => dispatch(actions.setQuery(value)),
    startSearch: ({ dispatch }) => () => dispatch(actions.search())
  }),
)

const Github = ({ list, updateQuery, query, startSearch }) => (
  <Column marginBetween="M">
    <Row alignItems="center" justifyContent="spaceBetween">
      <Heading>Github API usage</Heading>
      <Row marginBetween="M">
        <Input value={query} onChange={updateQuery} />
        <Button onClick={startSearch}>Search</Button>
      </Row>
    </Row>
    <Column>
      {list.length === 0 &&
      <Row padding="L">Nothing found</Row>}
    </Column>
  </Column>
)

Github.propTypes = {
  list: PropTypes.array,
  query: PropTypes.string,
  foundCount: PropTypes.number,
  updateQuery: PropTypes.func,
  startSearch: PropTypes.func,
}

export default enhance(Github)
