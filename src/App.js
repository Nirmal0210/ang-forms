
import Login from "./Pages/Login/Login";
import Header from "./Layout/Header";
import RouterLayout from "./Layout/RouterLayout";
import Sidebar from "./Layout/Sidebar";
import { useLocation } from "react-router-dom";
import Signup from "./Pages/Login/Signup";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <>
          {location.pathname !== "/createform" &&
            location.pathname !== "/reactform" &&
            !location.pathname.includes("preview") && <Sidebar />}
          <div id="main">
            <Header />
            <RouterLayout />
          </div>
        </>
      ) : location.pathname === "/login" ? (
        <Login />
      ) : (
        <Signup />
      )}
    </>
  );
}

export default App;
