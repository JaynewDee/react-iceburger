import React from "react";
import "./App.css";
import { Iceburger } from "./lib/Iceburger";
import { useState } from "react";
import { Drawer } from "./lib/Drawer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <Iceburger
        size={3}
        color="white"
        kind="honeycomb"
        duration={300}
        lineThickness="bold"
        onClick={toggleOpen}
        className="burger-container"
      />
    </>
  );
}

export default App;

// <Drawer open={isOpen} orientation="left" style={{ backgroundColor: "blue", width: "150px", height: "350px" }}>

// </Drawer>
