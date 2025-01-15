import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleJoin = () => {
        navigate(`/room/${name}`);
    }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gray-900'>
    <h1 className='text-white mb-8 text-4xl font-bold'>Video Chat Application</h1>
      <div>
      <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} className='border rounded px-2 py-1 shadow-sm shadow-white' />
      <button onClick={handleJoin} className='mx-2 rounded px-2 py-1 bg-red-50'>Join</button>
      </div>
    </div>
  )
}

export default HomePage
