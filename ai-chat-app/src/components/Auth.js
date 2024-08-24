// src/components/Auth.js
import React, { useState } from 'react';
import { account } from '../AppwriteConfig';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await account.create('unique()', email, password);
      alert('Signup Successful');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await account.createSession(email, password);
      alert('Login Successful');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      alert('Logged out');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Authentication</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-3 mb-3 w-full rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-3 mb-3 w-full rounded"
      />
      <button onClick={handleSignUp} className="bg-blue-500 text-white p-3 rounded w-full mb-2 hover:bg-blue-600">
        Sign Up
      </button>
      <button onClick={handleLogin} className="bg-green-500 text-white p-3 rounded w-full mb-2 hover:bg-green-600">
        Login
      </button>
      <button onClick={handleLogout} className="bg-red-500 text-white p-3 rounded w-full hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Auth;
