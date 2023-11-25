/* eslint-disable react/prop-types */

import { useState } from "react";
import "./index.css"
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from './components/Stats';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems(items => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems(itemsArr => itemsArr.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed}: item));
  }

  function handleClearAll() {
    let confirmation = confirm('Are u sure u want to clear all?')
    if(confirmation) setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItem}/>
        <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearAll={handleClearAll}/>
        <Stats items={items} />
      </div>
    </>
  )
}

export default App;
