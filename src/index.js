import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import {
  App,
  About,
  Portfolio,
  Contact
} from './components'

import './styles/screen.sass'

const router = (
  <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='./About' component={About} />
      <Route path='./Contact' component={Contact} />
      <Route path='./Portfolio' component={Portfolio} />
  </Router>
)
render(router, document.getElementById('root'))
