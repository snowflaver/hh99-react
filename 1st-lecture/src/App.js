import React from 'react'

function App() {
  const number = 11

  const psty = {
    color: 'red',
  }
  return (
    <>
      <div>
        <p style={psty}>hello React</p>
        {/* 주석은 Ctrl + /를 눌러서 사용한다 */}
        {/* 삼항 연산자를 사용해보자 */}
        <p style={psty}>
          {
            number > 10
              ? number + '은 10보다 크다'
              : number + '은 10보다 작다'
          }
        </p>
      </div>
    </>
  )
}
// p는 paragraph의 약자
export default App