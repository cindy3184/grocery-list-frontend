import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import GroceryList from './components/GroceryList'

function App() {
// [value, function that allows you to change value]
  const [item, setItem] = useState('');
  const [lists, setList] = useState([]);

  return (
    <div className='App'>
      <header>
        <h1>Today's Grocery List</h1>
      </header>
      {/* passed setItem into the form.js AKA PROPS*/}
      <Form 
        item={item} 
        lists={lists} 
        setList={setList} 
        setItem={setItem} 
      /> 

      <GroceryList setList={setList} lists={lists} />
    </div>
  );
}

export default App;
