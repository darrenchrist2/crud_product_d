import React, { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "../components/GoogleLoginButton";

const GOOGLE_CLIENT_ID = "654450235611-56cqcfg24j59b7g2g0bls6u0qfgd2lj5.apps.googleusercontent.com";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      localStorage.setItem("token", response.data.token); // Simpan token
      alert(response.data.message);
      navigate("/dashboard"); // Redirect ke Dashboard setelah login sukses
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div>
      <style>
         {`
         .register-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10px;
          }
          .register-container p {
            margin: 0;
          }
          .register-container a{
            text-decoration: none;
            color: blue;
          }
          h2{
            text-align: center;
          }
          form button{
            padding: 10px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 10px;
            width: 100%;
            max-width: 500px;
          }
        `}
      </style>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
        <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
        <div style={{ flex: 1, borderTop: "1px solid #ccc" }}></div>
        <span style={{ margin: "0 10px", color: "#666" }}>or</span>
        <div style={{ flex: 1, borderTop: "1px solid #ccc" }}></div>
        </div>
      </form>
      <GoogleLoginButton />
      {/* Tombol untuk pindah ke halaman register */}
      <div className="register-container">
      <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </div>
      </GoogleOAuthProvider>
    </div>
  );
};

export default LoginPage;
