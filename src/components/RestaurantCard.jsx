import React, { useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';

/*
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '74453',
      name: "Domino's Pizza",
      uuid: '87727dbd-7f2b-4857-9763-359624165845',
      city: '21',
      area: 'Athwa',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'bz9zkh2aqywjhpankb07',
      cuisines: ['Pizzas'],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      slaString: '45 MINS',
      lastMileTravel: 0,
      slugs: {
        restaurant: 'dominos-pizza-majura-nondh-test_surat',
        city: 'surat',
      },
      cityState: '21',
      address:
        'Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001',
      locality: 'Bhatar Road',
      parentId: 2456,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: 'FREE DELIVERY',
        shortDescriptionList: [
          {
            meta: 'FREE DELIVERY',
            discountType: 'FREE_DELIVERY',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'FREE DELIVERY',
            discountType: 'FREE_DELIVERY',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '',
        shortDescriptionList: [
          {
            meta: 'Free Delivery',
            discountType: 'FREE_DELIVERY',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'FREE DELIVERY',
            discountType: 'FREE_DELIVERY',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '2.1 kms',
      hasSurge: false,
      sla: {
        restaurantId: '74453',
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
*/

const RestaurantCard = ({ imgLink, name, avgRating, distance, price }) => {
  const [liked, setLiked] = useState(false);
  const likeOrDislike = () => {
    setLiked(!liked);
  };
  return (
    <>
      <div className='flex flex-col justify-center border-2 border-red-400 hover:scale-95 transition-transform duration-300 transform ease-in-out px-4 py-2'>
        <div className='flex flex-col justify-center bg-blue-400  '>
          <div className='flex flex-col justify-center items-center  '>
            <img src={imgLink} className='h-40 w-40' />
          </div>
          <div className='flex flex-row justify-around items-center bg-yellow-200'>
            <div className='text-black font-extrabold text-2xl'>{name}</div>
            {liked ? (
              <MdFavorite onClick={likeOrDislike} className='h-12 w-12' />
            ) : (
              <MdFavoriteBorder onClick={likeOrDislike} className='h-12 w-12' />
            )}
          </div>

          <div className='flex flex-row justify-around'>
            <div className='bg-green-600 px-2 py-1 text-white'>{avgRating}</div>
            <div className='text-black font-semibold text-base'>{distance}</div>
            <div className='text-black font-bold text-lg'>{price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
