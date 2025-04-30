export const IncompleteTodos = (props) => {
  const { todos, onComplete, onDelete } = props;
  return (
    <div className="todo-area">
    <h2>未完了のTodo</h2>
    <ul className="todo-list">
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            <p>{todo}</p>
            <button className="complete-button" onClick={() => onComplete(index)}>完了</button>
            <button className="delete-button" onClick={() => onDelete(index)}>削除</button>
          </li>
        )
      })}
    </ul>
  </div>
  );
};
