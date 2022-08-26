function BtnDelete({ id, onClick, className }) {
  return (
    <>
      <button className={className} id={id} onClick={onClick}></button>
    </>
  );
}
export default BtnDelete;
