import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  function onChange(e) {
    e.preventDefault();
    const nextInputValue = e.target.value;
    setToDo(nextInputValue);
  }

  function onSubmit(e) {
    e.preventDefault();
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  }
  function onDelete(e) {
    const toDoId = e.target.id;
    const nextToDos = toDos.filter((toDo) => toDo !== toDos[toDoId]);
    setToDos(nextToDos);
  }
  return (
    <>
      <h1>MY TO DOS ({toDos.length})</h1>
      <ul id="list"></ul>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일을 입력하세요."
        />
        <button type="submit">확인</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index} id={index} onClick={onDelete}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
