import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { axiosList } from "./redux/modules/axiosSlice";
import Router from "./routes/Router";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosList());
  }, [dispatch]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
