import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './team';
import Users from './Users';
import Friends from './Friends';

function App() {


  function handleClick() {
    alert('btn clicked');
  }

  const handleClick2 = () => {
    alert('btn 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => { alert('btn 3 clicked') }}>Click Me 3</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
