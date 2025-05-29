import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Redux User Actions
import { deleteTask } from "../redux/actions";
// Css
import Css from "./TaskList.module.css";

const TaskList = () => {
  const dispatch = useDispatch();

  const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const handleTaskDelete = (id) => {
    console.log("TaskList - handleTaskDelete called with id:", id);
    // Dispatch the delete action here if needed
    dispatch(deleteTask(id));
  };

  // Tasks Listesini Al
  const tasks = useSelector((state) => state.tasks.items);
  console.log("TaskList rendered with tasks:", tasks);

  const statusFilter = useSelector((state) => state.filters.status);
  console.log("TaskList rendered with statusFilter:", statusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={Css.TaskList}>
      {visibleTasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            handleTaskDelete={handleTaskDelete}
          />
        );
      })}
    </ul>
  );
};

const TaskItem = ({ task, handleTaskDelete }) => {
  const [taskEdit, setTaskEdit] = useState(null);
  return (
    <li style={{ width: "100%" }} className={Css.TaskItem}>
      <b className={Css.Number} style={{ display: "inline", marginInline: 10 }}>
        {task.id}
      </b>
      <p
        className={taskEdit ? `${Css.Text} ${Css.Hide}` : Css.Text}
        onDoubleClick={() => {
          setTaskEdit(task.text);
        }}
        style={{ display: "inline", marginInline: 10 }}
      >
        {task.text}
      </p>

      <input
        type="text"
        onDoubleClick={() => {
          setTaskEdit(null);
        }}
        className={taskEdit ? `${Css.Input} ${Css.Active}` : Css.Input}
        value={task.text}
        checked={task.completed}
        onChange={() => {
          // Here you would typically dispatch an action to toggle the task's completion status
          console.log(
            "TaskItem - Checkbox clicked for task:",
            task.id,
            task.text,
          );
        }}
        placeholder="Task Content"
      />
      <button
        onClick={() => {
          handleTaskDelete(task.id);
        }}
        className={Css.Btn}
        type="button"
      >
        Sil
      </button>
    </li>
  );
};

export default TaskList;
