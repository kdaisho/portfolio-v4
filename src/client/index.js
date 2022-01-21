import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import ReactGA from 'react-ga'

const TRACKING_ID = 'UA-49713403-4'
ReactGA.initialize(TRACKING_ID)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
