import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmpListing from "./components/EmpListing";
import EmpCreate from './components/EmpCreate';
import EmpDetail from './components/EmpDetail';
import users from "./db.json";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing/>}></Route>
          <Route path='/employee/create' element={<EmpCreate/>}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
