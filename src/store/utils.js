
export const createTypes = (actions, namespace = 'default') =>
  actions.reduce((hash, actionName) => ({ ...hash, [actionName]: `${namespace}/${actionName}` }), {})

export const createActions = (actions, namespace = 'default') =>
  actions.reduce(
    (hash, actionName) => {
      const action = (payload, meta = {}) =>
          ({ type: `${namespace}/${actionName}`, payload, meta })
      action.type = `${namespace}/${actionName}`

      return ({ ...hash, [actionName]: action })
    },
    {}
  )

export const createReducer = (initialState, reducers) =>
  (state = initialState, { type, payload, meta }) => {
    const handler = reducers[type]

    if (handler) {
      state = handler(state, payload, meta) // eslint-disable-line no-param-reassign
    }

    return state
  }
