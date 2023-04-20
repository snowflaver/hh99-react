import React, { useState } from 'react';
import './App.css';

function Title() {
  return (
    <div className='title'>
      <h2>Todo List</h2>
    </div>
  )
}

function App() {
  const [content, setContent] = useState('')
  const [items, setItems] = useState([])

  const handleContentChange = (e) => setContent(e.target.value)

  const handleAddItem = () => {
    if (content.trim() !== '') {
      setItems([...items, { content }])
      setContent('')
    }
  }

  return (
    <div className='main'>
      <div id='appand'>
        <input type='text' value={content} onChange={handleContentChange} />
        <button onClick={handleAddItem}>추가하기</button>
      </div>
      <Title />
      <div className='list'>
        <ul>
          {items.map((item, index) => (
            <li key={index} id='items'>{item.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
