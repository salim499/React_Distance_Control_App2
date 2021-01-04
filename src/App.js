import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './NavBar'
import Temperature from './Temperture'
import TemperaturesGlobals from './TemperatureTable'
import ConsignesGlobal from './ToutesConsignes'

function App() {
  const [choix, setChoix]=useState(null)

  function Routage(e){
      setChoix(e)
  }
  return (
    <React.Fragment>
    <Navbar routage={Routage}></Navbar>
    <div className="App">
    <header className="App-header">
{
  choix==="der"
  ?
  <Temperature></Temperature>
  :
  choix==="temp"?
  <TemperaturesGlobals></TemperaturesGlobals>
  :
  choix==="glo"?
  <ConsignesGlobal></ConsignesGlobal>
  :
    <React.Fragment>
      <br/><br/>
    <h1>Bienvenue sur Distance control !</h1>
    <br/>
    <img src={logo} className="App-logo" alt="logo"/>
    <br/>
    <h2>Vous êtes sur la page d'acceuil</h2>
    <br/>
    <h3>Veuillez voir les options sur le navbar </h3>
    </React.Fragment>
}
</header>
</div>
</React.Fragment>
  );
}

export default App;
