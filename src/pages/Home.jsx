import React from 'react'
import Counter from './Components/Counter'
import CounterControls from './Components/CounterControls';
import Hero from './Components/Hero';

const Home = () => {
  return (
    <div>

      <Hero />
      <Counter />
      <CounterControls />
    </div>
  )
}

export default Home