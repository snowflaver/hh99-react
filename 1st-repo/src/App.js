import React, { useState } from 'react'
import './App.css'

function Title() {
  
return (
  <div className='title'>
    <h3>My ToDo List</h3>
    <p>React</p>
  </div>
)
}

function Appand() {
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
      <div id='content'>
        제목<input type='text' value={title} onChange={handleTitleChange} />
        내용<input type='text' value={content} onChange={handleContentChange} />
        <button id='btn-1' onClick={handleAddItem}>추가하기</button>
      </div>
      <div id='work'>
        <div>
          Working..
          <ul id='worklist'>
            {workingItems.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div id='btn-2'>
                  <button onClick={() => handleDeleteItem(index)}>삭제하기</button>
                  <button onClick={() => handleItemDone(index)}>완료</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          Done..!
          <ul id='donelist'>
            {doneItems.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div>
                  <button onClick={() => handleDeleteItem(index)}>삭제하기</button>
                  <button onClick={() => handleItemUndone(index)}>취소</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Title />
      <Appand />
    </>
  );
}

export default App;