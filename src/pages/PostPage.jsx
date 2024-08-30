import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

const PostPage = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${page}`;
    try {
      const res = await fetch(url);
      const post = await res.json();
      setData(post);
    } catch (error) {
      alert('error in fetching data');
      return;
    }
  };

  const handlePrevious = () => {
    setPage(page > 1 ? page - 1 : page);
  };

  const handleNext = () => {
    setPage(page < 11 ? page + 1 : page);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div>Post page</div>
      {data ? (
        <div className='flex justify-center'>
          <PostCard id={data.id} title={data.title} body={data.body} />
        </div>
      ) : (
        <div className='flex justify-center'>No data</div>
      )}

      <div className='flex flex-row justify-center gap-4'>
        <button
          className='bg-pink-200 text-black p-4 font-semibold'
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className='bg-pink-200 text-black p-4 font-semibold'
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PostPage;
