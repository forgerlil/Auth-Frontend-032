import React from 'react';
import { useNavigate } from 'react-router-dom';

const RubberDuck = ({ firstName, lastName, id, name, image }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/rubber-duck/${id}`)}
        className='w-72 my-12 mx-8 p-4 bg-slate-100 dark:bg-slate-600 rounded flex flex-col items-center hover:bg-slate-200 dark:hover:bg-slate-500 hover:cursor-pointer transition-all duration-300'
      >
        <img
          src={image}
          alt={`${name}'s profile`}
          className='w-60 h-60 object-cover rounded mb-4'
        />
        <p className='text-center text-semibold mb-4'>
          My name is {name}! Do you need my help with debugging?
        </p>
        <p className='text-center text-xs'>
          I am one of {firstName} {lastName}'s trusty confidantes.
        </p>
      </div>
    </>
  );
};

export default RubberDuck;
