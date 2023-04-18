import React from 'react';
import './Appand.css';

function Appand({ title, content, handleTitleChange, handleContentChange, handleAddItem }) {
  return (
    <div className='appand'>
      제목<input type='text' value={title} onChange={handleTitleChange} />
      내용<input type='text' value={content} onChange={handleContentChange}  />
      <button onClick={handleAddItem}>추가하기</button>
    </div>
  );
}

export default Appand;