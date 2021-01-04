

import firebase from './FireStore';
import { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [Data, setData]=useState([])

   useEffect(()=>{
    firebase.firestore().collection("Souhaitable")
     .onSnapshot((data)=>{
       let tab=[]
       data.forEach(e=>{
         if(e)
         tab.push({id:e.id, data:e.data()})
       })
       tab=tab.sort(function(a,b){
         if(a.data && b.data){
          return b.data.date - a.data.date
         }
        });
       setData(tab)
     })
   },[])

  return (
    <div className="Container">
  <div className="App-header">
    <br/>
    {
      Data[0]?
<Card
    style={{ width: '42rem', color:"#ffffff",backgroundColor:"#000000" }}
    className="mb-2"
  >
    {console.log(Data[0].data)}
      <Card.Header>
      <Card.Img variant="top" src="/chambre1.jpg" />
</Card.Header>
    <Card.Body>
    <Card.Title>Date de ce message : </Card.Title>
    <h1 style={{ color:"blue", alignSelf:"center", textAlign:"center" }}>
      {new Date(Data[0].data.date.seconds*1000).toLocaleDateString(('fr-EG', {}))}
      </h1>
      <Card.Title>Température souhaitable : </Card.Title>
      <h1 style={{ color:"blue", alignSelf:"center", textAlign:"center" }}>
      {Data[0].data.temperature+" °"}
      </h1>
    </Card.Body>
    <Card.Footer>
    <Card.Title>Dernier méssage : </Card.Title>
    <h2>{Data[0].data.text}</h2>
    </Card.Footer>
  </Card>  
      :""
    }
      </div>
      <br/><br/>
    </div>
  );
}

export default App;
