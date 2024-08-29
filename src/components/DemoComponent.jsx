import React, { useState } from 'react';

const DemoComponent = () => {
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div className='bg-yellow-200 justify-center items-center text-red-500 font-bold'>
        counter value is: {counter}
      </div>
      <button className='bg-blue-400 text-red-400' onClick={addCounter}>
        Add
      </button>
      <button className='bg-blue-400 text-red-400' onClick={decrementCounter}>
        Decrement
      </button>
    </>
  );
};

export default DemoComponent;
