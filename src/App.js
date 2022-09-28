import "reactjs-popup/dist/index.css";
import "./Assets/Css/Style.css";
import Login from "./Pages/Login/Login";
import Header from "./Layout/Header";
import RouterLayout from "./Layout/RouterLayout";
import Sidebar from "./Layout/Sidebar";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" ? (
        <>
          {location.pathname !== "/createform" &&
            location.pathname !== "/reactform" && <Sidebar />}
          <div id="main">
            <Header />

            <RouterLayout />
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
