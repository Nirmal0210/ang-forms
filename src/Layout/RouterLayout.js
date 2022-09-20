import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CreateForm from "../Pages/FormBuilder/CreateForm";

const RouterLayout = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/createform" element={<CreateForm />} />
    </Routes>
  );
};

export default RouterLayout;
