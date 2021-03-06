import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Home from './home'
import Blog from './blog'
import aboutMe from './aboutMe'
import Photos from './photos'

render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="/Blog" component={Blog}/>
        <Route path="/Photos" component={Photos}/>
        <Route path="/aboutMe" component={aboutMe}/>
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
