import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const location = useLocation();
  const isRoleAllowed = userInfo?.roles?.some(role => allowedRoles?.includes(role));
  return  !userInfo.first_Name ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : !userInfo?.verified ? (
    <Navigate to="/verify" state={{ from: location }} replace />
  ) : isRoleAllowed ? (
    <Outlet />
  ) :  (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) 
};

export default RequireAuth;
