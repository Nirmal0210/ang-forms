import React, { useState, useEffect } from "react";
import Login from "./Pages/Login/Login";
import Header from "./Layout/Header";
import RouterLayout from "./Layout/RouterLayout";
import Sidebar from "./Layout/Sidebar";
import { Navigate, useLocation } from "react-router-dom";
import Signup from "./Pages/Login/Signup";
import PrivateRoute from "./PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./AuthContext";
import { auth } from "./firebase";
function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <>
      <AuthProvider value={{ currentUser }}>
        {location.pathname !== "/" && location.pathname !== "/signup" ? (
          <>
            {location.pathname !== "/createform" &&
              location.pathname !== "/reactform" &&
              !location.pathname.includes("preview") && <Sidebar />}
            <div id="main">
              <Header />
              <PrivateRoute>
                <RouterLayout />
              </PrivateRoute>
            </div>
          </>
        ) : location.pathname === "/" && !currentUser ? (
          <Login />
        ) : location.pathname === "/signup" && !currentUser ? (
          <Signup />
        ) : (
          <Navigate to="/dashboard" replace />
        )}
      </AuthProvider>
    </>
  );
}

export default App;
