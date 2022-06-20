import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const RequiresAuth = ({ children }) => {
  const {
    authState: { isLoggedIn },
  } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};
