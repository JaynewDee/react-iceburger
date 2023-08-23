import React from 'react'
import './App.css'
import { Iceburger } from './lib/Iceburger'
import { useState } from 'react'
import { Drawer } from './lib/Drawer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <>
      <Iceburger size={3} color="white" kind="standard" duration={300} lineThickness='standard' onClick={toggleOpen} className="burger-container" />
      <Drawer open={isOpen} orientation="right" style={{ backgroundColor: "white", height: "350px" }}>

      </Drawer>
    </>
  )
}

export default App;