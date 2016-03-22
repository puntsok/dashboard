

import fetchFromDashboard from '../repositories/dashboard_repo.js'

const REFRESH_DASHBOARD = 'refresh_dashboard'
const refreshDashboard = data => ({type: REFRESH_DASHBOARD, data})

const fetchDashboard = () => {

  return (dispatch/*, getState*/) => {

    fetchFromDashboard()
      .then(data => {
        console.log('yo', data)
        return data
      })
      .then(data => dispatch(refreshDashboard(data)))
  }
}

const SELECT_CATEGORY = 'select_category'
const selectCategory = id => ({type: SELECT_CATEGORY, id})

export default {
  REFRESH_DASHBOARD,
  refreshDashboard,
  fetchDashboard,
  SELECT_CATEGORY,
  selectCategory,
}
