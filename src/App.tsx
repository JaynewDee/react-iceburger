import React from 'react'
import './App.css'
import { Iceburger } from './lib/Iceburger'

function App() {
  return (
    <>
      <Iceburger size={3} color="green" kind="arrow" duration={300} lineThickness='bold' />
    </>
  )
}

export default App;