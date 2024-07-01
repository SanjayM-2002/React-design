import React, { useEffect, useState } from 'react';

const CommentCard = ({ comment }) => {
  return (
    <>
      <div className='flex flex-col bg-yellow-100 hover:bg-yellow-400 hover:shadow-lg transition duration-200 border-2 border-red-400 px-4 py-2 text-wrap'>
        <div className='text-lg text-blue-600 font-bold'>Id: {comment.id}</div>
        <div className='text-lg text-blue-600 font-bold'>
          Name: {comment.name}
        </div>
        <div className='text-sm text-blue-600 font-bold'>
          Email: {comment.email}
        </div>
        <div className='text-sm text-blue-600 font-bold'>
          Body: {comment.body}
        </div>
      </div>
    </>
  );
};

const Task07 = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const arr = [1, 2, 3, 4, 5, 6];
  const onPressNext = () => {
    setPage(page < 10 ? page + 1 : page);
  };
  const onPressPrev = () => {
    setPage(page > 1 ? page - 1 : page);
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${page}/comments`
      );
      const data = await res.json();
      setCommentsList(data);
      console.log('data is: ', data);
    } catch (error) {
      console.log('error block: ', error);
      return;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  const staticComment = {
    postId: 4,
    id: 16,
    name: 'perferendis temporibus delectus optio ea eum ratione dolorum',
    email: 'Christine@ayana.info',
    body: 'iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis',
  };

  if (isLoading)
    return (
      <>
        <div className='flex flex-col h-24 w-screen bg-blue-500 text-black text-3xl font-extrabold'>
          Loading.....
        </div>
      </>
    );
  return (
    <>
      <div>Task07</div>
      <div className='flex flex-row justify-around items-center bg-blue-300'>
        <button
          disabled={page <= 1}
          className={
            'flex flex-col justify-center items-center bg-red-400 text-lg font-bold text-black p-4 hover:cursor-pointer' +
            (page <= 1 ? 'opacity-5' : 'block')
          }
          onClick={onPressPrev}
        >
          Previous
        </button>
        <div className='flex flex-col justify-center items-center bg-gray-200 text-2xl font-bold text-black p-4'>
          Page number: {page}
        </div>
        <button
          disabled={page >= 10}
          className={
            'flex flex-col justify-center items-center bg-red-400 text-lg font-bold text-black p-4 hover:cursor-pointer' +
            (page >= 10 ? 'opacity-5' : 'block')
          }
          onClick={onPressNext}
        >
          Next
        </button>
      </div>
      <div className='flex flex-col bg-gray-500'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {commentsList.map((cmt) => (
            <CommentCard key={cmt.id} comment={cmt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Task07;
