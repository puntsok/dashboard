
import React from 'react'
import { Route, IndexRoute, browserHistory } from 'react-router'
import App from '../components/app'
import AppsPage from '../components/apps_page'

const ProfilePage = props => <h1>ProfilePage</h1>
const Home = props => <h1>Home5</h1>
const Ab = props => <h1>AB</h1>

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={AppsPage} />
        <Route path="/profile" component={ProfilePage} />
        { /*<Route path="/profile" component={ProfilePage} />
        <Route path="/apps" component={AppsPage} />
        <Route path="/a/b" component={Ab} /> */ }
    </Route>
)

export default routes
