// Hook içe aktarıyoruz
import { useSelector, useDispatch } from "react-redux";
import { selectFilterStatus } from "../redux/actions";

// Css
import Css from "./StatusFilter.module.css";

const StatusFilter = () => {
  const dispatch = useDispatch();

  // 2. Redux durumundan filtre değerini alıyoruz
  const tasks = useSelector((state) => state.tasks.items);
  const filter = useSelector((state) => state.filters.status);
  console.log("Current filter status:", filter);

  const handleFilterChange = (e) => {
    e.preventDefault();

    const newFilter = e.target.value;
    console.log("Filter changed to:", newFilter);

    dispatch(selectFilterStatus(newFilter));
  };

  return (
    <div className={Css.StatusFilter}>
      {/* <button
        onClick={() => {
          handleFilterChange("all");
        }}
      >
        All <b>{filter === "all" && "|is active|"}</b>
      </button>
      <button
        onClick={() => {
          handleFilterChange("active");
        }}
      >
        Active <b>{filter === "active" && " |is active|"}</b>
      </button>
      <button
        onClick={() => {
          handleFilterChange("completed");
        }}
      >
        Completed <b>{filter === "completed" && "|is active|"}</b>
      </button> */}
      <div className={Css.Info}>
        <span className={Css.InfoItem}>
          <b>All:</b> {tasks.length}
        </span>
        <span className={Css.InfoItem}>
          <b>Active:</b> {tasks.filter((task) => !task.completed).length}
        </span>
        <span className={Css.InfoItem}>
          <b>Completed:</b> {tasks.filter((task) => task.completed).length}
        </span>
      </div>
      <div className={Css.Action}>
        <select className={Css.Select} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default StatusFilter;
