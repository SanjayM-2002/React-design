import React, { useState } from 'react';

const ImageSlider = () => {
  const imageData = [
    'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81',
    'https://images.unsplash.com/photo-1605701250441-2bfa95839417?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1519819286236-0b3c6506e475?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1582496927349-3c368dc73c28?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const [curr, setCurr] = useState(0);
  const onClickNext = () => {
    if (curr < imageData.length - 1) {
      setCurr(curr + 1);
    }
  };
  const onClickPrev = () => {
    if (curr > 0) {
      setCurr(curr - 1);
    }
  };
  console.log(`${Math.random()}, curr value is: ${curr}`);
  return (
    <>
      <div className='w-96 flex-col justify-center m-4 p-4 border-rounded border-red-600'>
        <div>
          <img src={imageData[curr]} className='m-2 h-28' />
        </div>
        <div className=' flex-row bg-yellow-200 gap-4 justify-around '>
          <button
            className='justify-between border-rounded border-black bg-slate-500 mx-2'
            onClick={onClickPrev}
          >
            Previous
          </button>

          <button
            className='justify-between border-rounded border-black bg-slate-500 mx-2'
            onClick={onClickNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
