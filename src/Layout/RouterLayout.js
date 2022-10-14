import React, { useState, useEffect } from "react";
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
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { AuthProvider } from "../AuthContext";
import { auth } from "../firebase";
import PrivateRoute from "../PrivateRoute";
import { Navigate } from "react-router-dom";
import FormDialog from "../Pages/FormBuilder/FormDialog";
import Preview from "../Pages/FormBuilder/Preview";

const RouterLayout = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <AuthProvider value={{ currentUser }}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/login"
          element={!currentUser ? <Login /> : <Navigate to={"/"} replace />}
        />
        <Route
          exact
          path="/signup"
          element={!currentUser ? <Signup /> : <Navigate to={"/"} replace />}
        />
        <Route
          exact
          path="/formdialog"
          element={
            <PrivateRoute>
              <FormDialog />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/createform"
          element={
            <PrivateRoute>
              <CreateForm />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/editprofile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route exact path="/oops" element={<Oops />} />
        <Route exact path="/errorpage" element={<ErrorPage />} />
        <Route
          exact
          path="/applist"
          element={
            <PrivateRoute>
              <AppList />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/responses"
          element={
            <PrivateRoute>
              <Responses />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/appformlist"
          element={
            <PrivateRoute>
              <AppFormList />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/formlinklist"
          element={
            <PrivateRoute>
              <FormLinkList />
            </PrivateRoute>
          }
        />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route
          exact
          path="/editprofile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/reactform"
          element={
            <PrivateRoute>
              <ReactForms />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/preview/:userID/:docRefId"
          element={<Preview />}
        />
      </Routes>
    </AuthProvider>
  );
};

export default RouterLayout;
