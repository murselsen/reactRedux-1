import "./App.css";
import MyComponent from "./components/MyComponent";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <MyComponent />
      <StatusFilter />
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
