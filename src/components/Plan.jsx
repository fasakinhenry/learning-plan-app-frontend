// src/components/Plan.jsx
import React from 'react';

function Plan({ plan }) {
  return (
    <div>
      <h2 className='text-xl font-semibold'>Day {plan.day}</h2>
      <p>{plan.task}</p>
    </div>
  );
}

export default Plan;
