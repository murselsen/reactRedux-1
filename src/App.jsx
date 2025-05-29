import Css from "./App.module.css";
import MyComponent from "./components/MyComponent";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      {/* <MyComponent />
      <StatusFilter />
      <TaskForm />
      <TaskList /> */}

      <div className={Css.Container}>
        <h1 className={Css.HeaderTitle}> Redux - Todo App </h1>
        
      </div>
    </>
  );
}

export default App;
