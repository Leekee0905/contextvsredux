import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/modules/todos";
import TodoListWithReducer from "./components/Reducer";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleAddButton = () => {
    dispatch(addTodo({ id: Date.now(), text: input }));
    setInput("");
  };
  const handleDeleteButton = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <h1>TodoList</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddButton();
          }}
        >
          add
        </button>
      </form>
      {todos.map((e, idx) => {
        return (
          <div key={idx}>
            <span>{e.text}</span>
            <button
              onClick={() => {
                handleDeleteButton(e.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}

      <TodoListWithReducer />
    </div>
  );
}

export default App;
