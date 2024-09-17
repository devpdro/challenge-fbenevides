import { Navigate, Outlet } from "react-router-dom";
import { useAtom } from "jotai";

import { authState } from "src/infra/store/auth";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [authenticationState] = useAtom(authState);

  if (!authenticationState.token) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
};
