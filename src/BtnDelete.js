function BtnDelete({ id, onClick }) {
  return (
    <>
      <button id={id} onClick={onClick}>
        지우기
      </button>
    </>
  );
}
export default BtnDelete;
