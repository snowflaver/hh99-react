import { useState } from "react"
import './App.css';

function InputWithButton(props) {
  const [inputValue, setInputValue] = useState("");

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const ButtonClick = () => {
    props.onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div className="btn-1">
      <input type="text" value={inputValue} onChange={InputChange} />
      <button onClick={ButtonClick}>추가하기</button>
    </div>
  );
}

function List() {
  return (
    <div className="title">
      <h3>My ToDo List</h3>
      <p>React</p>
    </div>
  );
}

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <List />
      <InputWithButton onSubmit={handleAddItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
