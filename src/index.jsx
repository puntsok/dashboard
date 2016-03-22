
// bootstrap and its dependencies
// prehaps redo these with ProvidePlugin, like I've done with fetch
import 'expose?jQuery!jquery'
import Tether from 'expose?Tether!tether'
import 'bootstrap'

// mobile helpers
import FastClick from 'fastclick'

import dashboard_get from './repositories/dashboard_repo.js'

// react and its helpers
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, browserHistory } from 'react-router'

import './style.scss'

import initialState from './initialState'
import reducers from './reducers'
import routes from './routes'

const { document, devToolsExtension } = window
const { NPM_LIFECYCLE_EVENT: TARGET } = process.env

// turn off static app stylesheet during `npm start`,
// styles will be injected dynamically by webpack style loader
if (TARGET === 'start') {
  document.querySelector('#app-stylesheet').disabled = true
  console.log(`static app stylesheet disabled`)
}

// remove 300ms click delay on mobile
FastClick.attach(document.body)

// init Redux store (and Redux DevTools for Chrome if present)
const devTools = devToolsExtension ? devToolsExtension() : f => f
const enhancer = compose(applyMiddleware(thunk), devTools)
const store = createStore(reducers, initialState, enhancer)

// render out the React Application
const mountNode = document.getElementById('root')
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
mountNode);
