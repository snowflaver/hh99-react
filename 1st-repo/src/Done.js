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
            <div className='버튼들'>
              <button id='삭제' onClick={() => handleDeleteItem(index)}>삭제하기</button>
              <button id='취소' onClick={() => handleItemUndone(index)}>취소</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Done;