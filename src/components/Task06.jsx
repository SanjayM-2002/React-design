import React, { useState } from 'react';

const Task06 = () => {
  const imageData = [
    'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81',
    'https://images.unsplash.com/photo-1605701250441-2bfa95839417?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1519819286236-0b3c6506e475?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1582496927349-3c368dc73c28?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const [currIndex, setCurrIndex] = useState(0);
  const handlePrevious = () => {
    setCurrIndex(!currIndex ? imageData.length - 1 : currIndex - 1);
  };
  const handelNext = () => {
    setCurrIndex(currIndex === imageData.length - 1 ? 0 : currIndex + 1);
  };
  return (
    <>
      <div>Task06</div>
      <div className='flex flex-row justify-center items-center gap-4'>
        <button
          className='bg-yellow-300 text-black p-4'
          onClick={handlePrevious}
        >
          Previous
        </button>
        {imageData.map((url, index) => (
          <img
            key={url}
            src={url}
            alt={url}
            className={
              'm-2 w-60 h-60 ' + (currIndex === index ? 'block' : 'hidden')
            }
          />
        ))}
        <button className='bg-yellow-300 text-black p-4' onClick={handelNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default Task06;
