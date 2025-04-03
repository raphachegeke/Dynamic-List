import { useState } from 'react';
import './DynamicListManager.css';

function DynamicListManager() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div className="app-container">
      <div className="list-manager">
        <h1>Dynamic List Manager</h1>
        
        <div className="input-group">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter an item"
            className="styled-input"
          />
          <button onClick={addItem} className="styled-button">
            Add Item
          </button>
        </div>
        
        <div className="list-container">
          <ul className="item-list">
            {items.map((item, index) => (
              <li key={index} className="list-item">
                <span className="bullet">-</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DynamicListManager;
