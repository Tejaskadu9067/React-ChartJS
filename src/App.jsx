import React from "react";
import { UserContext, UserContextProvider } from "./context/ContextProvider";
// import BarData from "./components/BarData";
import axios from "axios";
import Main from "./components/Main";
import {Route, Routes, BrowserRouter} from "react-router-dom"
import SectorAnalysis from "./components/SectorAnalysis";
import ImpackAnalysis from "./components/ImpactAnalysis"
import Login from "./userComponents/Login"
import Register from "./userComponents/Register";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <BrowserRouter>
      <Routes>
        <Route index path="/home" element={<Main/>}/>
        <Route index path="/" element={<Login/>}/>
        <Route index path="/register" element={<Register/>}/>
        <Route index path="/sector" element={<SectorAnalysis/>}/>
        <Route index path="/impact" element={<ImpackAnalysis/>}/>
      </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
