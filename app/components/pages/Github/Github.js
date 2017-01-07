import React, { PropTypes } from 'react'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'

import { H1, Button, Input } from 'components/atoms'
import { Column, Row, GithubRepo } from 'components/molecules'
import { loadTopRepo, setQuery, search } from 'store/github/github'


const redial = {
  fetch: ({ dispatch }) => dispatch(loadTopRepo()),
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
    updateQuery: ({ dispatch }) => ({ target: { value } }) => dispatch(setQuery(value)),
    startSearch: ({ dispatch }) => () => dispatch(search()),
    onInputKey: ({ dispatch }) => event => event.key === 'Enter' && dispatch(search()),
  }),
)

const Github = ({ list, updateQuery, query, startSearch, loading, onInputKey }) => (
  <Column marginBetween="M">
    <Row alignItems="center" justifyContent="spaceBetween">
      <H1>Github API usage</H1>
      <Row marginBetween="M">
        <Input value={query} onChange={updateQuery} onKeyPress={onInputKey} />
        <Button onClick={startSearch}>Search</Button>
      </Row>
    </Row>
    <Column>
      {
        list.length === 0 && !loading &&
          <Row padding="L" justifyContent="center">Nothing found</Row>
      }
      {
        loading &&
          <Row padding="L" justifyContent="center">Loading...</Row>
      }
      {list.map(item => <GithubRepo repo={item} key={item.id} />)}
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
  onInputKey: PropTypes.func,
}

export default enhance(Github)
