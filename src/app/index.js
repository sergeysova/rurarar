import React, { Component } from 'react'

import Who from './who'


export default class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', textAlign: 'center', width: '100%' }}>
        <Who />
      </div>
    )
  }
}
