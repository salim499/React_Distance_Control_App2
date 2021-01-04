import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap'
import React from 'react'
import {useState, useEffect} from 'react'
import './Table2.css'
function App(props) {
 
    const [dataGlobal, setDataGlobal]=useState(props.data)
    const [data,setData]=useState(props.data)
    let [compteur, setCompteur]=useState(0)

    function nextFunction(event){
        if (compteur<dataGlobal.length){
            setData(dataGlobal.slice(compteur,compteur+5))
            setCompteur(compteur+5)
        }
    }
    function previewFunction(event){
        if(compteur>0){
            setData(dataGlobal.slice(compteur-5,compteur))
            setCompteur(compteur-5)
        }
    }

    useEffect(()=>{
      if(props.data){
        if(props.data!==null){
          setDataGlobal(props.data.nodes)
          setData(props.data.nodes.splice(0,5))
        }
      }

    },[props.data])

    return (
        <div style={{
            alignContent:"center", 
            alignItems:"center",
            marginBottom:"18%"}}>
        <Table 
        responsive striped bordered hover variant="dark"
        style={{
            position: "fixes",
            alignContent: "center",
            alignItems:"center",
            alignSelf:"center",
        }}
        >
        <thead>
          <tr>
            <th>Node Id</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
{data !== null?data.map((val,key)=>(
    <tr key={val.id}>
        <td>{val.id}</td>
        <td><input type="number" defaultValue={2}></input></td>
    </tr>
)):null}
        </tbody>
    <tfoot>
      <br/>
        <button className="b" onClick={previewFunction}>preview</button>
        <button className="b" onClick={nextFunction}>next</button>
        <br/>
  </tfoot>
      </Table>
      </div>
  );
}

export default App;
