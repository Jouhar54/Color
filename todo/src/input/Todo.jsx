import { useState } from 'react'
import Color from './Color'

const Todo = () => {
  const [val, setVal] = useState('')
  const[col, setCol]= useState('')

   function submit(){
    setCol(val);
  }
  
  return (
    <>
    <input type="text" value={val} onChange={(e)=>setVal (e.target.value)} />
    <button onClick={submit} >Submit</button>
    <Color col={col}/>
    </>
  )
}

export default Todo