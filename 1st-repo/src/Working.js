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
            <div className='버튼들'> 
              <button className='button' id='삭제' onClick={() => handleDeleteItem(index)}>삭제하기</button>
              <button className='button' id='완료' onClick={() => handleItemDone(index)}>완료</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Working;