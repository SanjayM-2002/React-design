import React from 'react';
import RevenueCard from './RevenueCard';
import ImageSlider from './ImageSlider';
import Task05 from './Task05';
import Task06 from './Task06';
import Task07 from './Task07';
import DemoComponent from './DemoComponent';
import RestaurantHome from '../pages/RestaurantHome';

const Dashboard = () => {
  return (
    <>
      {/* <div className='grid grid-cols-3'>
        <RevenueCard title={'Amount Pending'} orderCount={13} amount={92856} />
      </div> */}
      <div>
        {/* <ImageSlider /> */}
        {/* <Task05 /> */}
        {/* <Task06 /> */}
        {/* <Task07 /> */}
        {/* <DemoComponent /> */}
        <RestaurantHome />
      </div>
    </>
  );
};

export default Dashboard;
