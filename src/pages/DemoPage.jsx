import React from 'react';
import Parent from './Parent';

const DemoPage = () => {
  const data = [
    {
      info: 'parent-1',
      items: [
        {
          info: 'child-1.1',
        },
      ],
    },
    {
      info: 'parent-2',
      items: [
        {
          info: 'child-2.1',
        },
        {
          info: 'child-2.2',
        },
        {
          info: 'child-2.3',
        },
      ],
    },
    {
      info: 'parent-3',
    },
    {
      info: 'parent-4',
      items: [
        {
          info: 'child-4.3',
        },
        {
          info: 'child-4.4',
        },
      ],
    },
  ];

  return (
    <>
      <div>
        {data.map((p, index) => (
          <Parent key={index} items={p.items} parentValue={p.info} />
        ))}
      </div>
    </>
  );
};

export default DemoPage;
