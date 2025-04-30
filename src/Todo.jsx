import { useState } from 'react';
import './styles.css';
import { InputTodo } from './components/inputTodo';
import { IncompleteTodos } from './components/incompleteTodos';
import { CompleteTodos } from './components/completeTodos';

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["Todo1", "Todo2"])
  const [completeTodos, setCompleteTodos] = useState(["Todo3", "Todo4"])
  const [todoText, setTodoText] = useState("")
  const onChangeTodoText = (event) => setTodoText(event.target.value)
  const addTodo = (text) => {
    if (text === "") return;
    const newTodos = [...incompleteTodos, text];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  const deleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }
  const completeTodo = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  }
  const backTodo = (index) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo
        value={todoText}
        onChange={onChangeTodoText}
        onAdd={() => addTodo(todoText)}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
      />
      <CompleteTodos
        todos={completeTodos}
        onBack={backTodo}
      />
    </>
  );
}
