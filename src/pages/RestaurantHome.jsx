import React, { useState } from 'react';
import { restaurantList, IMG_LINK } from '../utils/constants';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantHome = () => {
  const data = restaurantList;
  const IMG = IMG_LINK;
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = () => {
    const newData = data.filter((i) =>
      i.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <>
      <div>Restaurant Home page</div>
      <div className='flex flex-row justify-center gap-2 items-center'>
        <input
          className='flex border-2 border-orange-300 text-black font-semibold text-lg px-4 py-2 bg-slate-200'
          placeholder='search restaurant name.....'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className='flex px-8 py-2 bg-pink-300 text-black'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>searched text is: {searchText}</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4'>
        {filteredData.map((r) => (
          <RestaurantCard
            key={r.data.id}
            imgLink={IMG}
            name={r.data.name}
            avgRating={r.data.avgRating}
            distance={r.data.lastMileTravelString}
            price={r.data.costForTwoString}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantHome;
