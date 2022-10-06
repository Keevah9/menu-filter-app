import React from 'react';
import './App.css';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';
import { useGeneralContext } from './context';
function App() {
  const {categories,menuItems} = useGeneralContext()
  return (
    <main>
      <section className='menu'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
          <Categories />
          <Menu/>
        </div>
      </section>
    </main>
  );
}

export default App;
