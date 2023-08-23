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
      <Iceburger
        onClick={toggleOpen}
        lineThickness='bold'
      />
      <Drawer
        open={isOpen}
        orientation="right"
        style={{ backgroundColor: "rgba(200, 200, 255, .9) ", height: "350px" }}>
      </Drawer>
    </>
  )
}

export default App;


