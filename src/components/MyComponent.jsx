// Hook içe aktarıyoruz
import { useSelector } from "react-redux";

const MyComponent = () => {
  // Gerekli durum parçasını alıyoruz
  const value = useSelector((state) => state.some);

  console.log("MyComponent rendered with value:", value);
  return (
    <div>
      <h2>My Component</h2>
      <p>
        Value from Redux: <b>{value}</b>
      </p>
    </div>
  );
};

export default MyComponent;
