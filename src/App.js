import './App.css';
import Form from './components/Form';
import GroceryList from './components/GroceryList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Today's Grocery List</h1>
      </header>
      <Form />
      <GroceryList />
    </div>
  );
}

export default App;
