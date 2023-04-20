#### app.js에서 하나의 컴포넌트 분리
하나의 컴포넌트로 완성햇다가
4개의 컴포넌트로 분리및 리팩토링작업
Title을 담당하는 Title.js
제목과 내용을 추가하는걸 담당하는 Appand.js
Appand로 추가한 내용을 먼저 들어가는 Working.js
Working.js에서 완료를 누르면 Done으로 넘어가는 Done.js로
4개의 컴포넌트파일들을 분리햇다.

#### 트러블 슈팅....
working에서 done으로 넘어가는중에 정의되지않은 iddone속성을 설정하려고 시도함에 따라 오류 발생

##### 시도해본 것들
 handleItemDone 함수에서 "isDone" 속성을 설정하기 전에 항목 배열에 항목이 있는지 확인을 먼저해서
 정의되지 않은 개체 또는 배열 요소에 속성을 설정하지 못하게 해서 오류를 해결을 시도
```
function handleItemDone(index) {
  if (items[index]) {
    const newItem = { ...items[index], isDone: true };
    const newItems = [...items];
    newItems[index] = newItem;
    setItems(newItems);
  }
}

function handleItemUndone(index) {
  if (items[index]) {
    const newItem = { ...items[index], isDone: false };
    const newItems = [...items];
    newItems[index] = newItem;
    setItems(newItems);
  }
}
```
결과 오류는 해결됫지만 버튼을 누르면 이동이 안되는 오류 발생
