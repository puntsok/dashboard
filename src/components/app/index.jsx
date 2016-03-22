
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../navbar'
import CurrentPageBlock from '../current_page_block'
import ProfileModal from '../profile_modal'
import MobileScrollPanel from '../mobile_scroll_panel'
import actions from '../../actions'

const { fetchDashboard } = actions

class App extends Component {

  componentDidMount() {

    if (process.env.NODE_ENV !== 'production') {
      console.info('App#componentDidMount')
    }

    this.props.fetchDashboard()
    // window.fetchDashboard = this.props.fetchDashboard
  }
  render() {
    const brand = 'NU Housing Portal'
    return (
        <div>
            <Navbar fixed={ true } hidden={ false } brand={ brand } />
            <MobileScrollPanel />
            <div>
                <CurrentPageBlock page="Apps" />
                { this.props.children }<br /><br />
            </div>
            <ProfileModal />
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDashboard: () => dispatch( fetchDashboard() ),
  }
}

App = connect(null, mapDispatchToProps)(App)

export default App
