import { Navigate } from "react-router-dom";

export default function NavigateToDashboard({children}) {
    const token = localStorage.getItem("token");

    if (token) {
      return <Navigate to="/" />;
    }
    return children;
  }
