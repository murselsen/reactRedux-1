// Hook içe aktarıyoruz
import { useSelector, useDispatch } from "react-redux";
import { selectFilterStatus } from "../redux/actions";
const StatusFilter = () => {
  const dispatch = useDispatch();

  // 2. Redux durumundan filtre değerini alıyoruz
  const filter = useSelector((state) => state.filters.status);
  console.log("Current filter status:", filter);
  const handleFilterChange = (newFilter) => {
    console.log("Filter changed to:", newFilter);
    // 3. Redux durumunu güncellemek için eylem gönderiyoruz
    // dispatch(selectFilterStatus(newFilter));
    console.log(
      "Dispatched action to change filter status to:",
      dispatch(selectFilterStatus(newFilter)),
    );
  };

  return (
    <div>
      <button
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
      </button>
    </div>
  );
};

export default StatusFilter;
