import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plan from './components/Plan';
import './App.css';

function App() {
  const [day, setDay] = useState(1);
  const [plan, setPlan] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/plan/${day}`)
      .then((res) => setPlan(res.data))
      .catch((err) => console.error(err));
  }, [day]);

  const handleNotify = () => {
    if (!email) {
      alert('Please enter your email.');
      return;
    }

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/notify`, { email, day })
      .then(() => alert('Notification sent!'))
      .catch((err) => console.error(err));
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Daily Learning Plan</h1>
      {plan && <Plan plan={plan} />}
      <div className='mt-4'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
          onClick={() => setDay(day + 1)}
        >
          Next Day
        </button>
        <input
          type='email'
          className='border px-4 py-2 rounded mr-2'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className='bg-green-500 text-white px-4 py-2 rounded'
          onClick={handleNotify}
        >
          Send Notification
        </button>
      </div>
    </div>
  );
}

export default App;
