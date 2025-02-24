import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
      alert(response.data.message);
      navigate("/dashboard"); // Redirect ke Dashboard setelah login sukses
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>

      {/* Tombol untuk pindah ke halaman register */}
      <p>Belum punya akun?</p>
      <button onClick={() => navigate("/register")}>Daftar</button>
      
    </div>
  );
};

export default LoginPage;
