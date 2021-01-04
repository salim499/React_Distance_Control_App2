import React from 'react'

import './NavBar.css'

function App(props) {
  function EnvoieDataToParent(e){
        props.routage(e.target.name)   
  }
  return (
      <div className="body">
        <nav>
          <div className="logo">DistanceCotrol</div>
    <label for="btn" className="icon">
            <span className="fa fa-bars"></span>
          </label>
          <input className="input" type="checkbox" id="btn"></input>
          <ul>
          <li><a href="#" name="acceuil" onClick={EnvoieDataToParent}>Acceuil</a></li>
          <li><a href="#" name="der" onClick={EnvoieDataToParent}>Dernière consigne</a></li>
          <li><a href="#" name="glo" onClick={EnvoieDataToParent}>Consignes globales</a></li>
          <li><a href="#" name="temp" onClick={EnvoieDataToParent}>Températures actuelles</a></li>
    </ul>
    </nav>
 
      </div>
    

  );
}

export default App;
