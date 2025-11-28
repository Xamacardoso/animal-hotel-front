import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import type { ReactNode } from "react";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const token = Cookies.get("auth_token");

  return token ? children : <Navigate to="/login" />;
}
