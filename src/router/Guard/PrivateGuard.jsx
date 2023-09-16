import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthData } from "../../features/auth/authSlice";

const PrivateGuard = () => {
  const { user } = useSelector(getAuthData);

  return user ? <Outlet/> : <Navigate to="/" />;
};

export default PrivateGuard;
