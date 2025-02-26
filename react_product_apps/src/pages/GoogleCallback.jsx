import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      alert("Login successful!");
      navigate("/dashboard"); // Redirect ke dashboard
    } else {
      alert("Login failed!");
      navigate("/");
    }
  }, [location, navigate]);

  return <p>Processing Google Login...</p>;
};

export default GoogleCallback;
