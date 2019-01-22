import React, {Component} from 'react'

export default class Utisak extends Component {
constructor(props){
  super(props);
  this.state = {
    izabran: false
  }
}
state = {
  izabran: false
}
handleClick(){
 this.setState({
   izabran: !this.state.izabran
 })
}

  render(){
    /*const slika = this.props.korisnik.slika
    const utisak = this.props.korisnik.utisak
    const ime = this.props.korisnik.ime*/

const {slika, utisak, ime} = this.props.korisnik
    return (
      <div
className={this.state.izabran ? 'active' : ''}
  onClick={this.handleClick.bind(this)}>
  <img src={slika} className="sl"/>
<cite>{ime}: </cite>
  <blockquote>"{utisak}"</blockquote>

</div>
    )
  }
}
