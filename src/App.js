import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import RouterComponent from "./routes/RouterComponent";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <div className="App">
      <RouterComponent />
    </div>
  );
}

export default App;
