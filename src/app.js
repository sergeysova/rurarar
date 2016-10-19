import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', textAlign: 'center', width: '100%' }}>
        Hello World {Math.floor(Math.random() * 50) / 10}
      </div>
    )
  }
}
