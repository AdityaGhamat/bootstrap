import "./App.css";
import Firstpage from "./Firstpage";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firstpage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
