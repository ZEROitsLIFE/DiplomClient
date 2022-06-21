import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!user.isLogin) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export const ProtectedAdmin = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!user.isLogin || !user.role === "ADMIN") {
    return <Navigate to="/" replace />;
  }
  return children;
};
