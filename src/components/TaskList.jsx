import { useSelector, useDispatch } from "react-redux";
// Redux User Actions
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
    dispatch({
      type: "tasks/deleteTask",
      payload: id,
    });
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

const TaskItem = ({
  task,

  handleTaskDelete,
}) => {
  return (
    <li style={{ width: "100%" }} className={Css.TaskItem}>
      <b className={Css.Number} style={{ display: "inline", marginInline: 10 }}>
        {task.id}
      </b>
      <p className={Css.Text} style={{ display: "inline", marginInline: 10 }}>
        {task.text}
      </p>

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
