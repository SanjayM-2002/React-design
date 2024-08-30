import React from 'react';

const PostCard = ({ id, title, body }) => {
  return (
    <>
      <div className='flex flex-col justify-center border-2 border-red-400 hover:scale-95 transition-transform duration-300 transform ease-in-out px-4 py-2'>
        <div className='flex flex-col justify-center bg-blue-400  '>
          <div className='flex flex-col justify-center items-center bg-yellow-200'>
            <div className='text-black font-extrabold text-2xl'>
              id is: {id}
            </div>
            <div className='text-black font-extrabold text-2xl'>
              title is: {title}
            </div>
            <div className='text-black font-extrabold text-2xl'>
              body is: {body}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
