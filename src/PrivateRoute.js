import { Navigate } from "react-router-dom";
import { useAuthValue } from "./AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuthValue();
  if (!currentUser) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}
