import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import GroceryList from './components/GroceryList'








export default function App() {
// [value, function that allows you to change value]
  const [item, setItem] = useState('');
  const [lists, setList] = useState([]);

  async function getAppData() {
    const BASE_URL = 'https://grocery-back.herokuapp.com/api/items';
    const items = await fetch(BASE_URL).then(res => res.json());
    setItem((prevState) => ({
      ...prevState,
      items,
    }))
  }

  useEffect(() => {
    getAppData();
  }, []);

  
  

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

