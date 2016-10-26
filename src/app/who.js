import React, { Component } from 'react'

const random = () => Math.floor(Math.random() * 50) / 10


export default class Who extends Component {
  state = { value: 0 }
  onChange = this.onChange.bind(this)

  componentDidMount() {
    this.onChange()()
  }

  onChange() {
    return event => this.setState({ value: random() })
  }

  render() {
    return (
      <div>
        Hello World {this.state.value} <br/>
        <button onClick={this.onChange()}>Change</button>
        <i>Examples?</i>
      </div>
    )
  }
}
