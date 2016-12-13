import React, { Component } from 'react'

import Who from './who'
import Demo from './components/demo'


export default class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', textAlign: 'center', width: '100%' }}>
        <Who />
        <Demo />
      </div>
    )
  }
}
