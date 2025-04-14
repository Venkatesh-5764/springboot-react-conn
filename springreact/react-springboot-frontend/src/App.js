import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Click the button to get a message!');

  const fetchMessage = () => {
    axios.get('http://localhost:8080/message')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the message!', error);
      });
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={fetchMessage}>Get Message from Spring Boot</button>
    </div>
  );
}

export default App;
