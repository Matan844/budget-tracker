import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Context from "./pages/context";
import Add from "./pages/Add";
import Graph from "./pages/Graph";

function App() {
  return (
    <div className="App">
      <Context>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/graph" element={<Graph />}></Route>
        </Routes>
      </Context>
    </div>
  );
}

export default App;
