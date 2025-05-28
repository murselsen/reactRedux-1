import { useDispatch } from "react-redux";
import { FiltersActions } from "../redux/contants";
const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskInput = event.target.elements.taskInput.value;
    alert(`New task added: ${taskInput}`);

    dispatch({
      type: FiltersActions.ADD_TASK,
      payload: {
        text: taskInput,
      },
    });
  };
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label htmlFor="taskInput" className="task-form-label">
        New Task:
      </label>
      <input
        type="text"
        name="taskInput"
        placeholder="New Task Content"
        required
      />
      <button type="submit"> Add </button>
    </form>
  );
};

export default TaskForm;
