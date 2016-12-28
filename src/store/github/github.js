
import { createActions, createReducer } from 'store/utils'

const A = createActions(['setRepoList', 'setQuery', 'setTotalFoundCount', 'cleanSearch'], 'github')

const initialState = {
  query: '',
  repoList: [],
  totalFoundCount: 0,
}

export default createReducer(initialState, {
  [A.setRepoList.type]: (state, { repositories }) => ({ ...state, repoList: repositories }),
  [A.setQuery.type]: (state, { query }) => ({ ...state, query }),
  [A.setTotalFoundCount.type]: (state, count) => ({ ...state, totalFoundCount: count }),
  [A.cleanSearch.type]: state => ({ ...state, repoList: [], totalFoundCount: 0 }),
})


export function loadTopRepo() {
  return async (dispatch, getState, { github }) => {
    dispatch(A.cleanSearch())
    const repositories = await github.getTopRepo()

    return dispatch(A.setRepoList({ repositories }))
  }
}

export function search() {
  return async (dispatch, getState, { github }) => {
    const query = getState().github.query
    dispatch(A.cleanSearch())

    if (!query || query.length < 3) return null

    const { total_count, items } = await github.searchRepo(query)

    dispatch(A.setTotalFoundCount(total_count))
    return dispatch(A.setRepoList({ repositories: items }))
  }
}

export function setQuery(query) {
  return A.setQuery({ query })
}
