import Css from "./App.module.css";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <div className={Css.Container}>
        <div className={Css.Header}>
          <h1 className={Css.Title}> Redux - Task List App </h1>
          <StatusFilter />
        </div>
        <TaskForm />
        <TaskList />
      </div>
    </>
  );
}

export default App;
