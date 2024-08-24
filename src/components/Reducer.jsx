import { useReducer, useState } from "react";

const TodoListWithReducer = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [text, setText] = useState("");
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <>
      <h1 style={{ marginTop: "50px" }}>TodoList with Reducer</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          handleAddTask(text);
        }}
      >
        Add
      </button>
      {tasks.map((e) => {
        return (
          <div key={e.id}>
            <span>{e.text}</span>
            <button onClick={() => handleDeleteTask(e.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

let nextId = 4;
const initialTasks = [
  { id: 0, text: "안녕하세요" },
  { id: 1, text: "감사해요" },
  { id: 2, text: "잘있어요" },
  { id: 3, text: "다시 만나요" },
];

export default TodoListWithReducer;
