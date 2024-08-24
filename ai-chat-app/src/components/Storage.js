import React, { useState } from 'react';
import { storage } from '../AppwriteConfig';

const Storage = () => {
  const [fileId, setFileId] = useState('');

  const uploadFile = async (event) => {
    try {
      const file = event.target.files[0];
      const response = await storage.createFile('unique()', file);
      setFileId(response.$id);
      alert('File Uploaded: ' + response.$id);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const getFilePreview = async () => {
    try {
      const previewURL = await storage.getFilePreview(fileId);
      window.open(previewURL, '_blank');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Storage Operations</h2>
      <input
        type="file"
        onChange={uploadFile}
        className="mb-3 w-full"
      />
      <button
        onClick={getFilePreview}
        className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600"
      >
        Preview File
      </button>
    </div>
  );
};

export default Storage;
