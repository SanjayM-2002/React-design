import React from 'react';

const Task01 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'lightblue',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ backgroundColor: 'green' }}>This is div 1</div>
        <div style={{ backgroundColor: 'orange' }}>This is div 2</div>
        <div style={{ backgroundColor: 'red' }}>This is div 3</div>
      </div>
    </>
  );
};

export default Task01;
