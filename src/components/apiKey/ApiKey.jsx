import React, { useState } from 'react';
import { updateApiKey } from '../../apiCalls/apiCalls';
import "./ApiKey.css"

const ApiKey = () => {
  const [newApiKey, setNewApiKey] = useState('');

  const handleUpdateApiKey = async () => {
    try {
      await updateApiKey(newApiKey);
      setNewApiKey('');
    } catch (error) {
      console.error('Error updating API key:', error);
    }
  };

  return (
    <div className='keyContainer'>
      <label className='keyLabel' htmlFor="newApiKey">New API Key : </label>
      <input
        type="text"
        id="newApiKey"
        className='newApiKey'
        value={newApiKey}
        onChange={(e) => setNewApiKey(e.target.value)}
      />
      <button className='apiKeyBtn' onClick={handleUpdateApiKey}>Update API Key</button>
    </div>
  );
};

export default ApiKey;
