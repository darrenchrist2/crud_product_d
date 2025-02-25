import React, { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";

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
            margin-top: 20px;
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>

      {/* Tombol untuk pindah ke halaman register */}
      <div className="register-container">
      <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
