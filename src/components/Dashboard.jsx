import React from 'react';
import RevenueCard from './RevenueCard';

const Dashboard = () => {
  return (
    <>
      <div className='grid grid-cols-3'>
        <RevenueCard title={'Amount Pending'} orderCount={13} amount={92856} />
      </div>
    </>
  );
};

export default Dashboard;
