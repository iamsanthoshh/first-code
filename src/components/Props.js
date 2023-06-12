import React, { Component } from 'react'

export default class Props extends Component {
    constructor(props)
    {
        super(props);
         {
            this.state = { msg :"hello world"}
        }
    }
  render() {
    return (
      <div>{this.state.msg}</div>
    )
  }
}
