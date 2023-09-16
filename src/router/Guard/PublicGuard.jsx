import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthData } from "../../features/auth/authSlice";

const PublicGuard = () => {
  const { user } = useSelector(getAuthData);
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicGuard;
