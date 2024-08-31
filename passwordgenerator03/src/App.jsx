import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [characterallowed,setcharacterallowed]=useState(false)
  const [numberallowed,setnumberallowed]=useState(false)
  const [password,setpassword]=useState("")
  const passwordref=useRef(null)
  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed){
      str+="1234567890"
    }
    if(characterallowed){
      str+="!@#$%^&*()_-="
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[length,characterallowed,numberallowed,setpassword])
  const copypasswordtoclipboard=useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordgenerator()
  },[length,numberallowed,characterallowed,passwordgenerator])
  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-center text-4xl text-white mb-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordref}/>
        <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex iteam-center gap-x-1'>
          <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberallowed} id='numberinput' onChange={()=>{
            setnumberallowed((prev)=>!prev);
          }}/>
          <label>Number</label>
          <input type="checkbox" defaultChecked={characterallowed} id='characterinput' onChange={()=>{
            setcharacterallowed((prev)=>!prev);
          }}/>
          <label>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
