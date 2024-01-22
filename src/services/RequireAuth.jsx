import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  // console.log(userInfo);
  const location = useLocation();
  const isRoleAllowed = userInfo?.roles?.some(role => allowedRoles?.includes(role));
  return isRoleAllowed ? (
    <Outlet />
  ) : userInfo ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
