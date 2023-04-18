import React from 'react';
import './Done.css';

function Done({ items, handleDeleteItem, handleItemUndone }) {
  return (
    <div>
      <h3>Done..!</h3>
      <ul className='donelist'>
        {items.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <div>
              <button onClick={() => handleDeleteItem(index)}>삭제</button>
              <button onClick={() => handleItemUndone(index)}>취소</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Done;