import React from 'react';

const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <>
      <div className='bg-blue-200 shadow-sm rounded p-3 '>
        <div className='flex content-center'>
          <div className='text-gray-700'>{title}</div>
          <div className='flex flex-col justify-center'>
            <QuestionIcon />
          </div>
        </div>
        <div className='flex content-around justify-between pt-2 bg-red-500'>
          <div className='font-semibold text-4xl'>Rs. {amount}</div>

          {orderCount ? (
            <div className='flex'>
              <div className='flex justify-between text-blue-600 underline cursor-pointer font-medium'>
                {orderCount} order(s)
              </div>
              <div>
                {' '}
                <ChevronRight />{' '}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

const ChevronRight = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m8.25 4.5 7.5 7.5-7.5 7.5'
        />
      </svg>
    </>
  );
};

const QuestionIcon = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        class='w-4 h-4'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
        />
      </svg>
    </>
  );
};

export default RevenueCard;
