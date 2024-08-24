// src/components/Database.js
import React, { useState } from 'react';
import { databases } from '../AppwriteConfig';

const Database = () => {
  const [documentId, setDocumentId] = useState('');
  const [data, setData] = useState({});

  const createDocument = async () => {
    try {
      const response = await databases.createDocument(
        process.env.REACT_APP_DATABASE_ID,
        process.env.REACT_APP_COLLECTION_ID,
        'unique()',
        { key: 'value' }
      );
      setDocumentId(response.$id);
      alert('Document Created: ' + response.$id);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const getDocument = async () => {
    try {
      const response = await databases.getDocument(
        process.env.REACT_APP_DATABASE_ID,
        process.env.REACT_APP_COLLECTION_ID,
        documentId
      );
      setData(response);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Database Operations</h2>
      <button onClick={createDocument} className="bg-blue-500 text-white p-3 rounded mb-2 w-full hover:bg-blue-600">
        Create Document
      </button>
      <input
        type="text"
        value={documentId}
        onChange={(e) => setDocumentId(e.target.value)}
        placeholder="Document ID"
        className="border p-3 mb-2 w-full rounded"
      />
      <button onClick={getDocument} className="bg-green-500 text-white p-3 rounded w-full hover:bg-green-600">
        Get Document
      </button>
      <pre className="mt-4 bg-gray-100 p-3 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Database;
