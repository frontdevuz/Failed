import React from "react";
//Home
import Home from "./pages/Home/Home";

//Form
import Login from "./pages/form/login/login";
import Register from "./pages/form/register/register";

//Admin
import Admin from "./pages/Admin/Admin";
import Admin_Glavny from "./pages/Admin/Admin_Glavny";
import Admin_Student from "./pages/Admin/Admin_Student";
import Admin_University from "./pages/Admin/Admin_University";

//Student
import Student from "./pages/Student/Student";

//University
import University from "./pages/University/University";

//Not found
import Notfound from "./views/notfound/notfound";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  
  return (
    <React.Fragment>
      <ToastContainer theme="colored" />
      <Routes>
        <Route index element={<Home />} />
        <Route path={"login"} element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
