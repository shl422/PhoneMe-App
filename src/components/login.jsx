import { useState, useEffect } from 'react';
import axios from 'axios';



const projectID = '84b0d44a-2bc2-4b04-af76-ebe54c275829';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    
    fetch('http://localhost:3002/form')
        .then(res => res.json())
        .then((data) => {
            
            console.log('data:', data);
            setUsername(data.Username);
        })
        .catch((error) => {
            console.error(error);
        });
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Incorrect username or password. Please try again.');
    }
  };

  
  return (
   
    <div className="wrapper">
   
      <div className="form">
        <h1 className="title">Login to Start Chatting</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>PHONE ME</span>
            </button>
          </div>
        </form>
        <h1 className="incorrect"> {error} </h1>
      </div>
    </div>

  );
};

export default Modal;