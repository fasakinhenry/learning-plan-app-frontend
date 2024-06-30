import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plan from './components/Plan';
import './App.css';

function App() {
  const [day, setDay] = useState(1);
  const [plan, setPlan] = useState(null);
  const [email, setEmail] = useState(''); // Input for user email

  useEffect(() => {
    axios
      .get(`/api/plan/${day}`)
      .then((res) => setPlan(res.data))
      .catch((err) => console.error(err));
  }, [day]);

  const handleNotify = () => {
    if (!email) {
      alert('Please enter your email.');
      return;
    }

    const message = `Today's plan: ${plan.task}`;

    axios
      .post('/api/notify', { email, message })
      .then(() => alert('Notification sent!'))
      .catch((err) => console.error(err));
  };

  return (
    <div className='App'>
      <h1>Daily Learning Plan</h1>
      {plan && <Plan plan={plan} />}
      <button onClick={() => setDay(day + 1)}>Next Day</button>
      <input
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleNotify}>Send Notification</button>
    </div>
  );
}

export default App;
