import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "../context/TasksContext";

const ContextWithReducer = () => {
  return (
    <>
      <TasksProvider>
        <h1 style={{ marginTop: "50px" }}>TodoList with Context and Reducer</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
};

export default ContextWithReducer;
