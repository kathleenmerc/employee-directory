import "./styles.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EmployeePage from "./Pages/EmployeePage"


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<HomePage />} />
        <Route path ="/employee/:name" element={<EmployeePage />} />
      </Routes>
    </div>
  );
}
