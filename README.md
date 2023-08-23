# Iceburger

### _Cool Burger_

> A simple burger menu component library
>
> > `npm i react-iceburger`

```js
import { Iceburger, Drawer } from "react-iceburger";
```

### Burger Prop Options

All props are optional with sensible defaults

**size** : `number`

```js
<Iceburger size={2.5} />
```

_Note:_ A minimum size prop value of 2 is recommended for best appearance.

**color** : `string`  
accepts any valid css color value

```js
<Iceburger color="rgba(0, 50, 200, .9)" />
```

**lineThickness** : `string`  
relative thickness of burger lines
`"thin"` | `"standard"(default)` | `"bold"`

**duration** : `number`  
millisecond duration of animation sequence

```js
<Iceburger duration={300} />
```

**kind** : `string`  
menu variant
`"standard"(default)` | `"honeycomb"` | `"arrow"`
