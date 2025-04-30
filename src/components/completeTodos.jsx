export const CompleteTodos = (props) => {
  const { todos, onBack } = props;
  return (
    <div className="todo-area">
    <h2>完了のTodo</h2>
    <ul className="todo-list">
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            <p>{todo}</p>
            <button className="back-button" onClick={() => onBack(index)}>戻す</button>
          </li>
        )
      })}
    </ul>
  </div>
  );
};
