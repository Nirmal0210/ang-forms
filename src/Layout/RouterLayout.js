import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CreateForm from "../Pages/FormBuilder/CreateForm";
import EditProfile from "../Pages/Profile/EditProfile";
import Oops from "../Pages/Error/Oops";
import ErrorPage from "../Pages/Error/ErrorPage";
import AppList from "../Pages/AppList/AppList";
import Responses from "../Pages/Responses/Responses";
import AppFormList from "../Pages/FormList/AppFormList";
import FormLinkList from "../Pages/FormList/FormLinkList";
import Notifications from "../Pages/Notifications/Notifications";
import ReactForms from "../Pages/FormBuilder/ReactForms";
import Register from "../Pages/Login/Register";
const RouterLayout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/createform" element={<CreateForm />} />
      <Route exact path="/editprofile" element={<EditProfile />} />
      <Route exact path="/oops" element={<Oops />} />
      <Route exact path="/errorpage" element={<ErrorPage />} />
      <Route exact path="/applist" element={<AppList />} />
      <Route exact path="/responses" element={<Responses />} />
      <Route exact path="/appformlist" element={<AppFormList />} />
      <Route exact path="/formlinklist" element={<FormLinkList />} />
      <Route exact path="/notifications" element={<Notifications />} />
      <Route exact path="/editprofile" element={<EditProfile />} />
      <Route exact path="/reactform" element={<ReactForms />} />
    </Routes>
  );
};

export default RouterLayout;
