import { useContext, useState } from "react";
import { useTasksDispatch } from "../context/TasksContext";
let nextId = 4;
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  const onAddTask = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };
  return (
    <>
      <input placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
