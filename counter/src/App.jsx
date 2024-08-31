import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);

  const addvalue=()=>{
    counter++;
    setCounter(counter);
    //console.log(count);
  }
  const removevalue=()=>{
    if(counter>0){
      counter--;
      setCounter(counter);
    }else{
      counter=0;
      setCounter(counter);
    }
    
  }

  return (
  
    <>
      <h1>React with Vite</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={addvalue}>Add val</button>
      <button onClick={removevalue}>Remove val</button>
    </>
  )
}

export default App
