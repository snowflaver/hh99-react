import React, { useState } from 'react';
import './App.css';
import Title from './Title';
import Appand from './Appand';
import Working from './Working';
import Done from './Done';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [items, setItems] = useState([]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleAddItem = () => {
    setItems([...items, { title, content, isDone: false }]);
    setTitle('');
    setContent('');
  };

  const handleItemDone = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isDone = true;
    setItems(updatedItems);
  };

  const handleItemUndone = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isDone = false;
    setItems(updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const workingItems = items.filter((item) => !item.isDone);
  const doneItems = items.filter((item) => item.isDone);

  return (
    <div className='listappand'>
      <Title />
      <Appand
        title={title}
        content={content}
        handleTitleChange={handleTitleChange}
        handleContentChange={handleContentChange}
        handleAddItem={handleAddItem}
      />
      <Working
        items={workingItems}
        handleDeleteItem={handleDeleteItem}
        handleItemDone={handleItemDone}
      />
      <Done
        items={doneItems}
        handleDeleteItem={handleDeleteItem}
        handleItemUndone={handleItemUndone}
      />
    </div>
  );
}

export default App;