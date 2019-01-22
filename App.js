import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
class App extends Component {
  render() {
    const ime = "Dusan"
    const broj = Math.random()
    const paragrafi = []
    for(let i = 0; i < 10; i++){
      paragrafi.push(<p>Paragraf {i}</p>)
    }
  //niz
  const korisnici = [
    {ime: "Ana"},
    {ime: "An"},
    {ime: "Anara"}
  ]
  const imena = korisnici
  .map((el, i) => <p>{el.ime} {i}</p>)
/*.map(function(el){
  return <p>{el.ime}</p>
})*/
const imeFirme = "Mali Princ d.o.o."
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React by Dusan
          </a>
          <p>&copy; Dusan Randjelovic</p>
    <p>Ovo je {ime} i {broj}</p>
        </header>
        <Header ime = {imeFirme} />
        <main>
    <h1>Dusan Randjelovic</h1>
    <form>
<label>Ime i prezime: <input type="text" required></input></label>
<button>Submit</button>
    </form>
    {paragrafi}
    {imena}
        </main>
        <footer>
<p>lorem fr frfr reg gggg lightgreeng
gtg gtgt tgt</p>
        </footer>
        <Main ime = {imeFirme}/>
       <Footer ime = {imeFirme}/>
      </div>
    );
  }
}

export default App;
//zovem react u shell
//inst: npm i -g create-react-app
//pravim fold: create-react-app ime-foldera
