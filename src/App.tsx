import './App.css'

import React, { useState } from 'react'
import { Iceburger, Drawer } from "./lib/index";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <>
      <Iceburger
        onClick={toggleOpen}
        lineThickness='bold'
        kind="honeycomb"
      />
      <Drawer
        open={isOpen}
        orientation="right"
        style={{ backgroundColor: "rgba(200, 200, 255, .9) ", height: "350px" }}>
        {/* <a href="/"></a>
        <a href="/"></a>
        <a href="/"></a> */}
      </Drawer>
    </>
  )
}

export default App;
