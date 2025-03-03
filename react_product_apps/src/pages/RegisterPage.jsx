import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      alert(response.data.message);
      navigate("/"); // Redirect ke login setelah register sukses
    } catch (error) {
      alert("Registration failed!");
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
        .register-box {
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
          h2{
            text-align: center;
          }
        `}
      </style>
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
