import React from 'react';

function Plan({ plan }) {
  return (
    <div>
      <h2>Day {plan.day}</h2>
      <p>{plan.task}</p>
    </div>
  );
}

export default Plan;
