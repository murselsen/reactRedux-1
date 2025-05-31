// Hook içe aktarıyoruz
import { useSelector, useDispatch } from "react-redux";

// Css
import Css from "./StatusFilter.module.css";

const StatusFilter = () => {
  const dispatch = useDispatch();

  // 2. Redux durumundan filtre değerini alıyoruz
  const tasks = useSelector((state) => state.tasks.items);
  const filterStatus = useSelector((state) => state.filters.status);

  const handleFilterChange = (e) => {
    e.preventDefault();

    const newFilter = e.target.value;

    dispatch({
      type: "filters/selectFilterStatus",
      payload: newFilter,
    });
  };

  return (
    <div className={Css.StatusFilter}>
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
        <select
          className={Css.Select}
          defaultValue={filterStatus}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default StatusFilter;
