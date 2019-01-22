import React, {Component} from 'react'

export default class Header extends Component {
  render(){
    return (
      <header>
<h1>Drugi header</h1>
<h2>{this.props.ime}</h2>
      </header>
    )
  }
}
