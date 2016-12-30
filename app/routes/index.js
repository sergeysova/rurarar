import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Application from 'components/Application'
import { Root, About, Github, NotFoundRoute } from 'components/pages'


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
