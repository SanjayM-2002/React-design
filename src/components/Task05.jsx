import React, { useEffect, useState } from 'react';
const UserCard = ({ fullname, email, username }) => {
  return (
    <>
      <div className='flex flex-col  justify-center align-middle'>
        <div className='flex flex-col justify-center p-4 items-center bg-yellow-100 hover:bg-yellow-200 hover:shadow-lg transition duration-300 border-2 border-red-400 '>
          <div className='font-bold text-blue-600 text-lg '>
            Name: {fullname}
          </div>
          <div className='font-semibold text-blue-600'>Email: {email}</div>
          <div className='font-semibold text-blue-600'>
            Username: {username}
          </div>
        </div>
      </div>
    </>
  );
};

const Task05 = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log('data is: ', data);
      setUsersList(data);
      return;
    } catch (error) {
      console.log('error is: ', error);
      return;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className='bg-red-200 font-bold text-lg'>Loading......</div>
      </>
    );
  }
  return (
    <>
      <div className='font-bold text-red-400'>Task05</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {usersList.length &&
          usersList.map((user) => (
            <UserCard
              fullname={user.name}
              email={user.email}
              username={user.username}
              key={user.id}
            />
          ))}
      </div>
    </>
  );
};

export default Task05;
