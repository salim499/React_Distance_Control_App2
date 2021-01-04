import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap'
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import './Table2.css'
import firebase from 'firebase'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function App(props) {

    const year=useRef(null)
    const month=useRef(null)
    const day=useRef(null)
    const time=useRef(null)
    const temp=useRef(null)
 
    const [dataGlobal, setDataGlobal]=useState([])
    const [dataCopie, setDataCopie]=useState([])
    const [data,setData]=useState([])
    const [selectedDate,setSelectedDate]=useState(null)
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
      firebase.firestore().collection("Chambre1")
      .onSnapshot((data)=>{
        let tab=[]
        data.forEach(e=>{
          tab.push({id:e.id, data:e.data()})
        })
        tab=tab.sort(function(a,b){return b.data.date - a.data.date});
        setDataGlobal(tab)
        setDataCopie(tab)
        setData(tab.splice(0,5))
      })

    },[])

    function tempF(){
      if(temp.current.value!=""){
        let tmpr=temp.current.value
        console.log(dataCopie[0].data.temperature.toString())
        console.log(tmpr)
        let nouveau=dataCopie.filter(d=>d.data.temperature.toString().includes(tmpr))
          setDataGlobal(nouveau)
          setData(nouveau.splice(0,5))          
      }else{
        setDataGlobal(dataCopie)   
        setData(dataCopie.splice(0,5))    
      }
    }
    function timeF(){
      if(time.current.value!=""){
        let tmpr=time.current.value
        console.log(time.current.value)
        console.log((new Date(dataCopie[0].data.date.seconds*1000)).toString().split('(')[0].split(" ")[4])
        let nouveau=dataCopie.filter(d=>(new Date(d.data.date.seconds*1000)).toString().split('(')[0].split(" ")[4].includes(tmpr))
        setDataGlobal(nouveau)
        setData(nouveau.splice(0,5))
      }else{
        setDataGlobal(dataCopie)   
        setData(dataCopie.splice(0,5))    
      }
    }
    function yearF(){
      if(year.current.value!=""){
        let tmpr=year.current.value
        console.log(year.current.value)
        console.log((new Date(dataCopie[0].data.date.seconds*1000)).toString().split('(')[0].split(" ")[3])
        let nouveau=dataCopie.filter(d=>(new Date(d.data.date.seconds*1000)).toString().split('(')[0].split(" ")[3].includes(tmpr))
        setDataGlobal(nouveau)
        setData(nouveau.splice(0,5))
      }else{
        setDataGlobal(dataCopie)   
        setData(dataCopie.splice(0,5))    
      }
    }
    function monthF(){
      if(month.current.value!=""){
        let tmpr=month.current.value
        console.log(month.current.value)
        console.log((new Date(dataCopie[0].data.date.seconds*1000)).toString().split('(')[0].split(" ")[1])
        let nouveau=dataCopie.filter(d=>(new Date(d.data.date.seconds*1000)).toString().split('(')[0].split(" ")[1].includes(tmpr))
        setDataGlobal(nouveau)
        setData(nouveau.splice(0,5))
      }else{
        setDataGlobal(dataCopie)   
        setData(dataCopie.splice(0,5))    
      }
    }
    function dayF(){
      if(day.current.value!=""){
        let tmpr=day.current.value
        let nouveau=dataCopie.filter(d=>((new Date(d.data.date.seconds*1000)).toString().split('(')[0].split(" ")[0]+" "+(new Date(d.data.date.seconds*1000)).toString().split('(')[0].split(" ")[2]).includes(tmpr))
        setDataGlobal(nouveau)
        setData(nouveau.splice(0,5))
      }
    }
    useEffect(()=>{
      if(selectedDate!=null){
        let dateSplit=selectedDate.toString().split(" ")
        let day=dateSplit[0]+" "+dateSplit[2]
        let month=dateSplit[1]
        let year=dateSplit[3]
       if(year!=""){
         let tmpr=year
         let nouveau=dataCopie.filter(d=>((new Date(d.data.date.seconds*1000)).toString().split('(')[0].split(" ")[3])===tmpr)
         setDataGlobal(nouveau)
         setData(nouveau.splice(0,5))
       }
       if(month!=""){
        let tmpr=month
        let nouveau=dataCopie.filter(d=>((new Date(d.data.date.seconds*1000)).toString().split('(')[0].split(" ")[1])===tmpr)
        setDataGlobal(nouveau)
        setData(nouveau.splice(0,5))
      }
      if(day!=""){
        let tmpr=day
        let nouveau=dataCopie.filter(d=>((new Date(d.data.date.seconds*1000)).toString().split('(')[0].split(" ")[0]+" "+(new Date(d.data.date.seconds*1000)).toString().split('(')[0].split(" ")[2])===tmpr)
        setDataGlobal(nouveau)
        setData(nouveau.splice(0,5))
      }
      }
    },[selectedDate])

    return (
      <div>
        <br/><br/>
        <DatePicker showYearDropdown scrollableMonthYearDropdown isClearable maxDate={new Date()} selected={selectedDate} onChange={d=>setSelectedDate(d)}></DatePicker>
       <br/><br/>
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
            <th style={{color:"blue"}}>Jour</th>
            <th style={{color:"blue"}}>Mois</th>
            <th style={{color:"blue"}}>Année</th>
            <th style={{color:"blue"}}>Heure</th>
            <th style={{color:"blue"}}>Température</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" ref={day} onChange={dayF}></input></td>
            <td><input type="text" ref={month} onChange={monthF}></input></td>
            <td><input type="text" ref={year} onChange={yearF}></input></td>
            <td><input type="text" ref={time} onChange={timeF}></input></td>
            <td><input type="text" ref={temp} onChange={tempF}></input></td>
          </tr>
{data !== null?data.map((val,key)=>(
    <tr key={val.id}>
        <td>{(new Date(val.data.date.seconds*1000)).toString().split('(')[0].split(" ")[0]+" "+
        (new Date(val.data.date.seconds*1000)).toString().split('(')[0].split(" ")[2]}</td>
        <td>{(new Date(val.data.date.seconds*1000)).toString().split('(')[0].split(" ")[1]}</td>
        <td>{(new Date(val.data.date.seconds*1000)).toString().split('(')[0].split(" ")[3]}</td>
        <td>{(new Date(val.data.date.seconds*1000)).toString().split('(')[0].split(" ")[4]}</td>
        <td>{(val.data.temperature).toString()}</td>
    </tr>
)):null}
        </tbody>
      </Table>
      <div>
      <button className="b" onClick={previewFunction}>preview</button>
        <button className="b" onClick={nextFunction}>next</button>
      </div>
      </div>
      </div>
  );
}

export default App;
