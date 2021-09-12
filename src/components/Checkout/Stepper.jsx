import React from 'react';
import { useSelector } from 'react-redux';

const Stepper = () => {
  const steps = useSelector((state) => state.checkoutInfoReducer.steps);

  const unCompletedStep = () => (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        fill='currentColor'
        className='bi bi-arrow-right-circle'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
        />
      </svg>
    </>
  );
  const completedStep = () => (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        fill='green'
        className='bi bi-check-circle-fill'
        viewBox='0 0 16 16'
      >
        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
      </svg>
    </>
  );

  return (
    <div className='container mt-2'>
      <div className='row text-center d-flex justify-content-evently'>
        {steps.map((step) => (
          <div key={step.id} className='col'>
            <div>{!step.completed ? unCompletedStep() : completedStep()}</div>
            <small className='checkout-step-name'>{step.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
