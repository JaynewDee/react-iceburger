import React from 'react'
import './App.css'
import { Iceburger } from './lib/Iceburger'

function App() {
  return (
    <>
      <Iceburger size={3} color="rgba(0, 69, 169)" kind="standard" duration={200} lineThickness='standard' />
    </>
  )
}

export default App
