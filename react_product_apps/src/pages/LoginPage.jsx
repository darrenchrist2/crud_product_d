import React, { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";

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
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <style>
         {`
         body{
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
         }
         .login-box {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
            max-width: 400px;
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
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
      <div className="login-box">
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
      </div>
    </div>
  );
};

export default LoginPage;
