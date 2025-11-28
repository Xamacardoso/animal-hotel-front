import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rota pública */}
        <Route path="/login" element={<Login />} />

        {/* Rota privada (somente autenticado acessa) */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }/>

        {/* Redirecionar raiz para /login */}
        <Route path="*" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}
