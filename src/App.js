import React, { Component } from 'react'
import {useState} from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  
   const[board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"])


    
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="boardGame">
        {board.map((value, index)=>{
          return <Square value={value}/>
        })}
        </div>
      </>
    )
}
export default App
