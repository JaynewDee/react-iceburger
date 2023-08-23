# Iceburger

### _Cool Burger_

> A simple burger menu component library
>> `npm i react-iceburger`
```js
import { Iceburger } from 'react-iceburger';
```
### Props Options
All props are optional with sensible defaults

__size__ : `number`  
```js
<Iceburger size={2.5}/>
```
_Note:_ A minimum size prop value of 2 is recommended for best appearance.

__color__ : `string`   
accepts any valid css color value
```js
<Iceburger color="rgba(0, 50, 200, .9)" />
```

__lineThickness__ : `string`   
relative thickness of burger lines
`"thin"` | `"standard"(default)` | `"bold"`


__duration__ : `number`   
millisecond duration of animation sequence 
```js
<Iceburger duration={300} />
```

__kind__ : `string`  
menu variant
`"standard"(default)` | `"honeycomb"` | `"arrow"`
