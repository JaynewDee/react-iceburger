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
        position="fixed"
      />
      <Drawer
        open={isOpen}
        orientation="left"
        height={800}
        style={{
          backgroundColor: "rgba(200, 200, 255, .9)",
          position: "fixed",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 13px"
        }}>
        <a href="/">Hello</a>
        <br />
        <a href="/">Iceburger</a>
        <br />
        <a href="/">Drawer</a>
      </Drawer>
      <div style={{ height: "100vh" }}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, dolorum sint fuga perferendis, recusandae veritatis nemo illo asperiores sunt provident impedit. Corporis vero esse eum ea. Perspiciatis aliquam quos quod! Omnis, ad reiciendis magni nemo est eaque libero facilis doloremque. Exercitationem facere reiciendis, magni quibusdam quos hic! Modi, a corporis.</p>
        <p>Consectetur deserunt at modi fugit quisquam beatae voluptate! Expedita, dolor ipsum eos fugit hic neque quis quod nesciunt iure, ab sed provident quasi. Numquam explicabo modi itaque voluptatum eligendi inventore possimus corporis delectus in sed ratione laboriosam animi magni vel iure, fugit quas ipsum aliquid, dicta molestiae sit perferendis saepe!</p>
        <p>Quisquam a eum, illum maiores nisi culpa laborum, tempora fuga unde deleniti omnis natus dolores atque debitis iure maxime perferendis ex sunt! Explicabo natus libero non saepe hic quasi molestias nisi sed earum numquam ducimus quaerat, assumenda quia ipsum nostrum eveniet tempore provident aspernatur! Enim praesentium aperiam veritatis animi! Eum.</p>
        <p>Doloremque, itaque voluptatum nulla in qui minus explicabo quos sint similique commodi laborum fugit id iusto quis illo natus eum eos sunt. Cumque, molestiae? Sunt dolorem maxime debitis, tempora laborum necessitatibus error velit sapiente neque fugit, perferendis praesentium cum, delectus omnis. Veniam earum perspiciatis impedit laborum. Facere sequi suscipit nesciunt.</p>
        <p>Aliquid veniam laborum est pariatur, vel ducimus veritatis accusantium dicta asperiores minima quia laudantium consequatur magni architecto cupiditate optio temporibus facilis culpa quam perferendis! Odio veritatis aut eius voluptas quia quasi, voluptates fuga id aliquid ratione tenetur deleniti magnam nemo voluptatem ab saepe reiciendis adipisci quibusdam, possimus dolorem, voluptate necessitatibus?</p>
        <p>Consectetur asperiores ipsam aliquam numquam impedit quo eveniet alias sint doloribus tempore, excepturi repellat vero consequuntur adipisci, dolorem minus fuga fugiat accusamus necessitatibus voluptas illum cumque! Ipsa voluptatum eum, quis aliquid eos, deserunt alias aut ex possimus eligendi minima fuga totam voluptate cumque iure. Debitis minus quam modi sapiente deserunt.</p>
        <p>Quisquam excepturi ducimus pariatur vitae quod, voluptatum debitis deserunt odit amet dolorem recusandae ea aliquam, facere quam enim eius, dolores nostrum modi. Alias praesentium possimus consequatur eligendi, officiis beatae quam, voluptate exercitationem quos, totam ab! Reiciendis, maxime alias obcaecati ipsum cumque laudantium! Cumque a, reprehenderit maxime quos soluta explicabo voluptatem!</p>
        <p>Dolore minus iusto architecto quod facere, error voluptatem debitis incidunt quibusdam deserunt nihil, et neque maiores nobis! Aspernatur beatae atque rem molestiae odio eveniet minus qui autem doloribus iste perspiciatis aliquam non quisquam magni, cumque veniam officia quo obcaecati pariatur officiis ipsum odit? Maxime sunt quasi quas culpa dignissimos deserunt.</p>
        <p>A at quis assumenda libero cumque illo animi molestiae facilis labore veniam obcaecati corporis quod error nihil maiores fuga accusamus, iure ad nostrum alias optio. Perferendis a ducimus tempora ab autem eos quibusdam incidunt ipsa impedit. Exercitationem illum, tenetur, sed voluptas cupiditate voluptatibus, illo aliquam voluptatum facilis sint rerum. Illum!</p>
        <p>Et aut incidunt adipisci laborum voluptas. Dolore hic at, inventore enim perspiciatis saepe quae vel recusandae repellendus eaque optio molestiae asperiores, aliquid soluta quibusdam itaque sunt! Laudantium id voluptatem nemo veritatis corrupti, dolor provident sint! Minima vero voluptatum dignissimos vitae nemo tenetur, aspernatur nostrum, laborum corporis rerum officia explicabo culpa.</p>
      </div>
    </>
  )
}

export default App;
