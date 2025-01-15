import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleJoin = () => {
        navigate(`/room/${name}`);
    }

  return (
    <div>
      <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleJoin}>Join</button>
    </div>
  )
}

export default HomePage
