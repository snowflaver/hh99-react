import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    // 쟉스에서 중괄호를 씌워주면서 쟉스내에서 자바스크립트를 쓸수가 잇다.
    <>
      <div>
        {count}
      </div>
      <div>
        <button>- 1</button>
        <button>+ 1</button>
      </div>
    </>
  )
}

export default App