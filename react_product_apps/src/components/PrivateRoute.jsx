import { Navigate, Outlet } from "react-router-dom";

const isTokenExpired = (token) => {
  try {
    const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
    const now = Math.floor(Date.now() / 1000); // Waktu sekarang dalam detik
    return decoded.exp < now; // True jika token sudah expired
  } catch (error) {
    return true; // Jika ada error, anggap token invalid
  }
};

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    alert("Session expired, please login again.");
    localStorage.removeItem("token");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
