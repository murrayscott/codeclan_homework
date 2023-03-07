import './App.css';
import React, {useState} from 'react';

function App() {

  const [items, setItems] = useState([
    {name: 'Buy Shopping', isHigh: true},
    {name: 'Clean Bathroom', isHigh: false},
    {name: "Car's MOT", isHigh: true},
  ]);
  const [newItemName, setNewItemName] = useState('');

  function saveNewItem(event){
    event.preventDefault();

    const newItem = {
      name: newItemName,
      isHigh: false,  // needs set to the value of the radio buttons
    }

    console.log(useState);

    const newItems = [...items, newItem];
    setItems(newItems);
    setNewItemName('');
  };

  function handleInputChange (event){
    setNewItemName(event.target.value);
  };

  function toggleHigh (index){
     const itemToUpdate = {...items[index]};
    itemToUpdate.isHigh = true;
    const newItems = [...items];
    newItems[index] = itemToUpdate;
    setItems(newItems);
  };

  function toggleLow (index){
    const itemToUpdate = {...items[index]};
   itemToUpdate.isHigh = false;
   const newItems = [...items];
   newItems[index] = itemToUpdate;
   setItems(newItems);
 };

  function deleteItem (index){
    const itemToUpdate = {...items[index]};
  // needs another method to delete
    const newItems = [...items];
    newItems[index] = itemToUpdate;
    setItems(newItems);
};

  const itemNodes = items.map((item, index) => {
    return <li class =   {item.isHigh ? "high": "low"} key={index} >
      <span>{item.name}</span>
      <button onClick={() => deleteItem(index)}>Delete</button>
      {item.isHigh ? <button onClick={() => toggleLow(index)}>High</button>: <button onClick={() => toggleHigh(index)}>Low</button>}
      </li>
  });

  return (
    <div className="App">

      <h1>ToDo List</h1>

      <form onSubmit={saveNewItem}>
        <label htmlFor="item-name">Add:</label>
        <input id="item-name" type="text" value={newItemName} onChange={handleInputChange}/>
        High <input type="radio" value="High" name="priority"/>
        Low <input type="radio" value="Low" name="priority" defaultChecked/>
        <input type="submit" value="Save Item"/>
      </form>

      <ul>
        {itemNodes}
      </ul>

    </div>
  );

}

export default App;