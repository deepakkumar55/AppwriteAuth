import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaDatabase, FaCloudUploadAlt, FaComment } from 'react-icons/fa';
import Home from './pages/Home';
import Auth from './components/Auth';
import Database from './components/Database';
import Storage from './components/Storage';
import MessageInput from './components/MessageInput';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col">
      <nav className="flex flex-wrap justify-center space-x-6 mb-10 bg-white shadow-md rounded-lg p-4">
        {[
          { path: '/', label: 'Home', icon: <FaHome /> },
          { path: '/auth', label: 'Auth', icon: <FaUser /> },
          { path: '/database', label: 'Database', icon: <FaDatabase /> },
          { path: '/storage', label: 'Storage', icon: <FaCloudUploadAlt /> },
          { path: '/message', label: 'Message Input', icon: <FaComment /> }
        ].map(({ path, label, icon }, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/database" element={<Database />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/message" element={<MessageInput />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
