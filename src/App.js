// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Second from './Second';

function App() {

  const [name, setName] = useState('');

  const [data, setData] = useState([]); 

  useEffect(() => {

  
  }, [])


  console.log("NAME",name)

  let saveClick = () => {
    setData([ ...data,name ])
    setName('')
  }

  let deleteClick = (e) => {
    let res = data.filter(d=> d != e)
    setData(res)
  }
  return (
    <div className="App">

      <input type='text' value={name} onChange={(e)=> setName(e.target.value)  }   />

      {/* {data.map((d, i) => {
        return (
          <p>{d}</p>
        )
      })} */}

      {/* <input type='button' value="Download" onClick={saveClick} /> */}

      <Second textBoxValue={name} saveClick={saveClick} allData={data} deleteClick={deleteClick} />

    </div>
  );
}

export default App;