import React, { useState } from 'react';
import { login } from '../config/AxiosHelper';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      toast.success("Login successful!");
      navigate("/"); // redirect to dashboard or home
    } catch (err) {
      toast.error(err || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
      Login to VidNest 🎬
      </h2>
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account? <span className="text-blue-600">Register</span>
      </p>
    </div>
  </div>
);
};

export default LoginPage;
