import React from 'react';
import './Working.css';

function Working({ items, handleDeleteItem, handleItemDone }) {
  return (
    <div>
      <h3>Working..</h3>
      <ul className='worklist'>
        {items.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <div>
              <button onClick={() => handleDeleteItem(index)}>삭제하기</button>
              <button onClick={() => handleItemDone(index)}>완료</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Working;