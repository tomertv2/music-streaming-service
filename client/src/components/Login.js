import React, { useState } from 'react';
import network from '../services/network';

export default function() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async () => {
    const response = await network.post('api/login', {
      username,
      password,
    });
    if (response.data && response.data.success && response.data.token) {
      localStorage.setItem('token', response.data.token);
      window.location = '/';
    } else {
      console.log(response.response.data.errorMessage);
      setError(response.response.data.errorMessage);
    }
  };

  return (
    <div>
      <input
        value={username}
        onChange={({ target: { value } }) => setUsername(value)}
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <button onClick={onSubmit}>Login</button>
      {error ? <div>*{error}</div> : null}
    </div>
  );
}
