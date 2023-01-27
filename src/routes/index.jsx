import { Route, Routes } from "react-router-dom";
import { TechProvider } from "../contexts/TechContext";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <TechProvider>
            <Dashboard />
          </TechProvider>
        }
      />
    </Routes>
  );
};
