import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from './lib/Appwrite'; // Adjust the path based on your project structure


const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await account.get();
        setUser(userData);
      } catch (err) {
        navigate('/login'); // Redirect to login if not authenticated
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/login');
    } catch (err) {
      console.log('Logout failed:', err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome, {user?.name}</h2>
          <p className="mt-2 text-sm text-gray-600">Email: {user?.email}</p>
        </div>

        <div>
          <button
            type="button"
            onClick={handleLogout}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
