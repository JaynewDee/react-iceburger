# Iceburger
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

### _Cool Burger_

A simple burger menu component library.   
Designed for mix & match - use just the burger, use just the drawer, or use them together
>> `npm i react-iceburger`
```js
import { Iceburger, Drawer } from 'react-iceburger';
```

___  


### Burger Prop Options
All props are optional with sensible defaults

__size__ : `number` - defaults to `3`   
```js
<Iceburger size={2.5}/>
```
_Note:_ A minimum size prop value of 2 is recommended for best appearance.

__color__ : `string` - defaults to `black`   
accepts any valid css color value
```js
<Iceburger color="rgba(0, 50, 200, .9)" />
```

__lineThickness__ : `string` - `"thin"` | `"standard"(default)` | `"bold"`  
relative thickness of burger lines

__duration__ : `number` - defaults to `300`   
millisecond duration of animation sequence 
```js
<Iceburger duration={300} />
```

__kind__ : `string` - `"standard"(default)` | `"honeycomb"` | `"arrow"`  
menu variant

__className__ : `string` - defaults to an empty string   
use custom styles with caution, as tweaking certain style properties may break the relationship between lines

__style__ : `CSSProperties`  
again, be cautious when overriding styles.  
example cases would be to fix the burger / drawer on scroll, or create depth with a box shadow:
```js
      <Iceburger
        onClick={toggleOpen}
        lineThickness='bold'
        kind="honeycomb"
        position="fixed"
      />
      <Drawer
        open={isOpen}
        orientation="left"
        height={350}
        style={{ 
          backgroundColor: "rgba(200, 200, 255, .9) ", 
          position: "fixed",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 13px"
        }}>
          <a href="/">Hello</a>
          <br />
          <a href="/">Iceburger</a>
          <br />
          <a href="/">Drawer</a>
      </Drawer>
```

__onClick__ : `() => void`  
pass a simple callback to have the burger manage toggling of boolean state
```js
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <>
      <Iceburger
        size={3}
        color="white"
        kind="honeycomb"
        duration={300}
        lineThickness='bold'
        onClick={toggleOpen}
        className="burger-container" />

      <Drawer
        open={isOpen}
        orientation="right"
        height="800px"
        style={{ backgroundColor: "blue", }}>

      </Drawer>
    </>
  )
}

export default App;
```

___


### Drawer Prop Options
The `open` and `orientation` props are mandatory:
```js
export interface DrawerProps {
  open: boolean;
  orientation: "left" | "right";
  children?: JSX.Element | JSX.Element[];
  width?: number;
  height?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}
```

__open__ : `boolean`  
The drawer component must receive a boolean state value in order to transition between states  

__orientation__ : `"left"` | `"right"`  
"left" - drawer emerges from the left edge of the viewport  
"right" - drawer emerges from the right edge of the viewport


## _Changelog_

8/24/23: v0.1.26 - support sequential focus navigation while drawer is visible