import React from 'react'
import { Route, Switch } from 'react-router'

import HomePage from 'pages/home'
import ProgramPage from 'pages/program'
import EventPage from 'pages/event'
import AboutPage from 'pages/about'
import NotFoundPage from 'pages/notFound'

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/program" component={ProgramPage} />
    <Route path="/event/:event" component={EventPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/tickets" component={() =>
      window.location.replace(`https://ch.tudelft.nl/activities/event/2022/symposium/`)} />
    <Route path='/history' component={() =>
      window.location.replace(`https://symposium.ch.tudelft.nl/2020/`)} />
    <Route component={NotFoundPage} />
  </Switch>
)
