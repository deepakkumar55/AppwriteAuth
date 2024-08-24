import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaDatabase, FaCloudUploadAlt, FaComment } from 'react-icons/fa';

// Mock authentication state for demonstration
const mockAuthState = {
  isAuthenticated: true, // Set this based on your actual authentication state
  userName: 'John Doe'   // Replace with actual user name from your authentication context
};

const Home = () => {
  const [authState, setAuthState] = useState(mockAuthState);

  useEffect(() => {
    // Fetch and set the actual authentication state from your auth provider or context
    // Example: setAuthState({ isAuthenticated: true, userName: 'John Doe' });
  }, []);

  return (
    <div className="text-center p-6 bg-gradient-to-r from-blue-100 to-green-100 min-h-screen">
      {authState.isAuthenticated ? (
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Welcome back, {authState.userName}!
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Explore the features of our application below.
          </p>

          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li className="flex items-center space-x-2">
                <FaUser className="text-blue-500" />
                <NavLink to="/auth" className="text-blue-600 hover:underline">Authentication</NavLink>: Manage your account settings and log in/out.
              </li>
              <li className="flex items-center space-x-2">
                <FaDatabase className="text-green-500" />
                <NavLink to="/database" className="text-green-600 hover:underline">Database</NavLink>: Access and manage your data.
              </li>
              <li className="flex items-center space-x-2">
                <FaCloudUploadAlt className="text-purple-500" />
                <NavLink to="/storage" className="text-purple-600 hover:underline">Storage</NavLink>: Upload and manage your files.
              </li>
              <li className="flex items-center space-x-2">
                <FaComment className="text-red-500" />
                <NavLink to="/message" className="text-red-600 hover:underline">Message Input</NavLink>: Send and receive messages.
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get Started</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Use the navigation bar to explore the features of our app. Each section offers detailed functionality integrated with Appwrite and OpenAI services.
            </p>
            <NavLink to="/auth" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors">
              Go to Authentication
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Our App</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Please log in to access the features of our application.
          </p>
          <NavLink to="/auth" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors">
            Go to Authentication
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Home;
