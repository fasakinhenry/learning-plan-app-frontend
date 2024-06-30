import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plan from './components/Plan';
import './App.css';

function App() {
  const [day, setDay] = useState(1);
  const [plan, setPlan] = useState(null);
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/plan`)
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

  const handleStart = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/start`, {
        start: startDate,
        email,
      })
      .then(() => alert('Start date and email saved!'))
      .catch((err) => console.error(err));
  };

  return (
    <div className='container mx-auto p-4'>
      <header className='bg-blue-500 text-white p-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Learning Plan App</h1>
        <nav>
          <a href='#' className='mr-4'>
            Home
          </a>
          <a href='#' className='mr-4'>
            Features
          </a>
          <a href='#'>Contact</a>
        </nav>
      </header>
      <main className='my-4'>
        <h2 className='text-xl font-semibold mb-4'>Daily Learning Plan</h2>
        {plan && <Plan plan={plan} />}
        <div className='mt-4'>
          <input
            type='date'
            className='border px-4 py-2 rounded mr-2'
            placeholder='Start Date'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type='email'
            className='border px-4 py-2 rounded mr-2'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
            onClick={handleStart}
          >
            Save Start Date & Email
          </button>
          <button
            className='bg-green-500 text-white px-4 py-2 rounded'
            onClick={handleNotify}
          >
            Send Notification
          </button>
        </div>
      </main>
      <footer className='bg-blue-500 text-white p-4 mt-8 text-center'>
        <p>&copy; 2024 Learning Plan App</p>
      </footer>
    </div>
  );
}

export default App;
