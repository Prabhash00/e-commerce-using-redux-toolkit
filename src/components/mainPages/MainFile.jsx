import { fetchData } from "../../redux/slice/ecomSlice";
import "./mainFile.css";
import { useDispatch, useSelector } from "react-redux";

function MainFile() {
  const dispatch = useDispatch();
  return (
    <>
      <h3>Home Page</h3>
      <button
        className="border-2 p-2 bg-blue-600 text-white cursor-cell"
        onClick={(e) => dispatch(fetchData())}
      >
        Fetch Data
      </button>
    </>
  );
}

export default MainFile;
