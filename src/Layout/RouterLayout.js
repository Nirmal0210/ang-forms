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
import Signup from "../Pages/Login/Signup";
import FormDialog from "../Pages/FormBuilder/FormDialog";
import Preview from "../Pages/FormBuilder/Preview";
const RouterLayout = () => {
  return (
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/formdialog" element={<FormDialog />} />
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
      <Route exact path="/preview" element={<Preview />} />
    </Routes>
  );
};

export default RouterLayout;
