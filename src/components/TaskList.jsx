import { useTasks, useTasksDispatch } from "../context/TasksContext";

const TaskList = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();
  const onDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button onClick={() => onDeleteTask(task.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
