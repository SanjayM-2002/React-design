import React from 'react';
import Child from './Child';

const Parent = ({ parentValue, items = [] }) => {
  return (
    <div>
      <div className='bg-blue-600 border-red-600 p-4 m-2'>
        <div>current parent value is: {parentValue}</div>
        {items.map((i, index) => (
          <>
            <div className='bg-blue-200 border-red-200 p-4 m-2'>
              <Child key={index} info={i.info} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Parent;
