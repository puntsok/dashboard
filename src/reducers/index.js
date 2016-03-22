
import actions from '../actions'
const clone = state => JSON.parse( JSON.stringify(state) )

function reducers(state, action) {

  const { type } = action

  switch (type) {

  case actions.REFRESH_DASHBOARD:
    state = { ...state,
      apps: action.data.apps,
      categories: action.data.categories,
      activeCategory: action.data.categories[0].id,
    }
    return clone(state)

  case actions.SELECT_CATEGORY:
    if (action.id !== state.activeCategory) {
      state = { ...state, activeCategory: action.id}
      return clone(state)
    } else {
      return state
    }
  }

  return state
}

export default reducers
