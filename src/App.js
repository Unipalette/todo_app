import { useState } from "react";
import BtnDelete from "./BtnDelete";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [doneList, setDoneList] = useState([]);
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

  function onCheck(e) {}
  return (
    <div className="all">
      <div className="box">
        <h1>오늘 할 일</h1>
        <ul>
          {toDos.map((item, index) => (
            <li key={index} id={index}>
              <p id={index} onClick={onCheck}>
                {item}
                <span></span>
              </p>
              <BtnDelete className="btnDelete" id={index} onClick={onDelete} />
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="여기에 할 일 추가하기"
        />
        <button className="btn_submit" type="submit"></button>
      </form>
    </div>
  );
}
export default App;
