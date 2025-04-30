export const InputTodo = (props) => {
  const { value, onChange, onAdd } = props;
  return (
    <div className="input-area">
      <input placeholder="Todoを入力" value={value} onChange={onChange} />
      <button onClick={onAdd}>追加</button>
    </div>
  );
};
