import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [li, setList] = useState([]);
  function onInput(e) {
    const nextValue = e.target.value;
    setInputValue(nextValue);
  }
  function onSubmit(e) {
    // usestate 배열에 추가 하기
    e.preventDefault();
    /*   const newLi = [...li, inputValue];
    setList(newLi);
    li.map((todo) => {
      return <li>{todo}</li>;
    });
    console.log(li); */
    const toDoList = document.querySelector(".toDoList");
    e.preventDefault();
    const li = document.createElement("li");
    li.innerText = inputValue;
    toDoList.append(li);
    setInputValue("");
  }
  return (
    <>
      <h1>안녕</h1>
      <ul className="toDoList"></ul>
      <form onSubmit={onSubmit}>
        <input type="text" value={inputValue} onChange={onInput} />
        <button type="submit">확인</button>
      </form>
    </>
  );
}
export default App;
