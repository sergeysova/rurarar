import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Application from 'app/components/Application'
import NotFoundRoute from 'app/components/NotFoundRoute'
import { Root, About, Github } from 'app/screens'

export default function createRouting() {
  return (
    <Route path="/" component={Application}>
      <IndexRoute component={Root} />
      <Route path="/about" component={About} />
      <Route path="/github" component={Github} />

      <Route path="*" component={NotFoundRoute} />
    </Route>
  )
}
