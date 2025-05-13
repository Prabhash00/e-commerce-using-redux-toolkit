import { useEffect } from "react";
import { fetchData } from "../../redux/slice/productSlice";
import "./mainFile.css";
import { useDispatch, useSelector } from "react-redux";

function MainFile() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.ecom);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h3>Home Page</h3>
      
      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </>
  );
}

export default MainFile;
