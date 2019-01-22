import React, {Component} from 'react'
import utisci from '../data/utisci.json'
import Utisak from './Utisak'

export default class Footer extends Component {
  render(){

    const ispis = utisci
    .map((el, i) => <Utisak key={i} korisnik={el}/>)



  return (
      <div class="ubacenfuter">
 <h1>Ubacen Footer</h1>
 <h1>Ubacen Footer</h1>
 <h1>Ubacen Footer</h1>
 <h2>{this.props.ime}</h2>
 <h2>Utisci korisnika: </h2>
 {ispis}
      </div>
    )
  }
}
