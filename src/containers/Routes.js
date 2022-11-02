import React from 'react'
import { Route, Switch } from 'react-router'

import HomePage from 'pages/home'
import ProgramPage from 'pages/program'
import EventPage from 'pages/event'
import AboutPage from 'pages/about'
import NotFoundPage from 'pages/notFound'
import BookletPage from 'pages/booklet'
import AftermoviePage from 'pages/aftermovie'

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/program" component={ProgramPage} />
    <Route path="/event/:event" component={EventPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/booklet" component={BookletPage} />
    <Route path="/aftermovie" component={AftermoviePage} />
    <Route path="/pictures" component={() =>
      window.location.replace(`https://ch.tudelft.nl/media/photos/?type_0=gallery&album_gallery_id_0=169`)} />
    <Route path="/tickets" component={() =>
      window.location.replace(`https://ch.tudelft.nl/activities/event/2022/symposium/`)} />
    <Route path='/history' component={() =>
      window.location.replace(`https://symposium.ch.tudelft.nl/2020/`)} />
    <Route component={NotFoundPage} />
  </Switch>
)
