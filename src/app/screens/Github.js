import React, { PropTypes } from 'react'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { Layout, Column, Row } from 'app/components/Layout'
import { Heading } from 'app/components/Heading'
import { Button } from 'app/components/Button'
import { Input } from 'app/components/Input'
import Repo from 'app/components/Github/Repo'
import * as actions from 'store/github/github'

const redial = {
  fetch: ({ dispatch }) => dispatch(actions.loadTopRepo()),
}

const mapStateToProps = ({ github }) => ({
  list: github.repoList,
  query: github.query,
  foundCount: github.totalFoundCount,
  loading: github.loading,
})

const enhance = compose(
  provideHooks(redial),
  connect(mapStateToProps),
  withHandlers({
    updateQuery: ({ dispatch }) => ({ target: { value } }) => dispatch(actions.setQuery(value)),
    startSearch: ({ dispatch }) => () => dispatch(actions.search())
  }),
)

const Github = ({ list, updateQuery, query, startSearch, loading }) => (
  <Column marginBetween="M">
    <Row alignItems="center" justifyContent="spaceBetween">
      <Heading>Github API usage</Heading>
      <Row marginBetween="M">
        <Input value={query} onChange={updateQuery} />
        <Button onClick={startSearch}>Search</Button>
      </Row>
    </Row>
    <Column>
      {
        list.length === 0 && !loading &&
          <Row padding="L">Nothing found</Row>
      }
      {
        loading &&
          <Row padding="L" justifyContent="center">Loading...</Row>
      }
      {list.map(item => <Repo repo={item} key={item.id} />)}
    </Column>
  </Column>
)

Github.propTypes = {
  list: PropTypes.array,
  query: PropTypes.string,
  loading: PropTypes.bool,
  foundCount: PropTypes.number,
  updateQuery: PropTypes.func,
  startSearch: PropTypes.func,
}

export default enhance(Github)
